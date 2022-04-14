var express = require('express');
var routerElectroValvula = express.Router();
var pool = require('../../mysql');


routerElectroValvula.get('/:id/logs', function(req, res) {
    pool.query('SELECT * From Log_Riegos WHERE electrovalvulaId = ? ORDER BY fecha DESC', [req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            console.log(err);
            return;
        }
        res.send(result);
    });
});

routerElectroValvula.put('/:id/open', function(req, res) {
    pool.query('Insert into Log_Riegos (fecha,apertura,electrovalvulaId) values (?,?,?)', [new Date(), true, req.params.id], function(err, result, fields) {
            if (err) {
                res.send(err).status(400);
                console.log(err);
                return;
            }
            res.send(result);
        });
});

routerElectroValvula.put('/:id/close', function(req, res) {
    pool.query('Insert into Log_Riegos (fecha,apertura,electrovalvulaId) values (?,?,?)', [new Date(), false, req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            console.log(err);
            return;
        }
        res.send(result);
    });
});

module.exports = routerElectroValvula;