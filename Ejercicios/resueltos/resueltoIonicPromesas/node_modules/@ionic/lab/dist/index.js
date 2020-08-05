"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_framework_1 = require("@ionic/cli-framework");
const utils_fs_1 = require("@ionic/utils-fs");
const chalk = require("chalk");
const express = require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const WWW_DIRECTORY = path.join(__dirname, '..', 'www');
class DefaultCommand extends cli_framework_1.Command {
    async getMetadata() {
        return {
            name: 'default',
            summary: '',
            inputs: [
                {
                    name: 'url',
                    summary: 'The URL of the livereload server to use with lab',
                    validators: [cli_framework_1.validators.required, cli_framework_1.validators.url],
                },
            ],
            options: [
                {
                    name: 'host',
                    summary: 'HTTP host of Ionic Lab',
                    default: 'localhost',
                },
                {
                    name: 'port',
                    summary: 'HTTP port of Ionic Lab',
                    default: '8200',
                },
                {
                    name: 'project-type',
                    summary: 'Ionic project type',
                },
                {
                    name: 'ssl',
                    summary: 'Host Ionic Lab with HTTPS',
                    type: Boolean,
                },
                {
                    name: 'ssl-key',
                    summary: 'Path to SSL key',
                },
                {
                    name: 'ssl-cert',
                    summary: 'Path to SSL certificate',
                },
                {
                    name: 'app-name',
                    summary: 'App name to show in bottom left corner',
                },
                {
                    name: 'app-version',
                    summary: 'App version to show in bottom left corner',
                },
            ],
        };
    }
    async run(inputs, options) {
        const [url] = inputs;
        const { host, port, ssl } = options;
        const protocol = ssl ? 'https' : 'http';
        const projectType = options['project-type'];
        const name = options['app-name'];
        const version = options['app-version'];
        const app = express();
        app.use('/', express.static(WWW_DIRECTORY));
        app.get('/api/app', (req, res) => {
            res.json({ url, name, version, projectType });
        });
        const server = ssl ? https.createServer(await this.collectSecureContextOptions(options), app) : http.createServer(app);
        server.listen({ port, host });
        const labUrl = `${protocol}://${host}:${port}`;
        server.on('listening', () => {
            process.stdout.write('Ionic Lab running!\n' +
                `Lab: ${chalk.bold(labUrl)}\n` +
                `App: ${chalk.bold(url)}\n`);
        });
    }
    async collectSecureContextOptions(options) {
        const sslKeyPath = options['ssl-key'] ? String(options['ssl-key']) : undefined;
        const sslCertPath = options['ssl-cert'] ? String(options['ssl-cert']) : undefined;
        if (!sslKeyPath || !sslCertPath) {
            throw new Error('SSL key and cert required for serving SSL');
        }
        const [key, cert] = await Promise.all([this.readPem(sslKeyPath), this.readPem(sslCertPath)]);
        return { key, cert };
    }
    async readPem(p) {
        try {
            return await utils_fs_1.readFile(p, { encoding: 'utf8' });
        }
        catch (e) {
            process.stderr.write(String(e.stack ? e.stack : e) + '\n');
            throw new Error(`Error encountered with ${p}`);
        }
    }
}
class LabNamespace extends cli_framework_1.Namespace {
    async getMetadata() {
        return {
            name: 'ionic-lab',
            summary: '',
        };
    }
    async getCommands() {
        return new cli_framework_1.CommandMap([[cli_framework_1.CommandMapDefault, async () => new DefaultCommand(this)]]);
    }
}
const namespace = new LabNamespace();
async function run(argv, env) {
    await cli_framework_1.execute({ namespace, argv, env });
}
exports.run = run;
