var express = require('express');
var cors = require('cors');

var corsOptions = { origin:"*", optionsSucessStatus:200}

var app = express();
var routerDisp = require('./routes/dispositivos');
var routerMed = require('./routes/mediciones');
var electrovalvula = require('./routes/electrovalvulas');
var authenticate = require('./routes/authenticate');
const { application } = require('express');


app.use(express.json());
app.use(cors(corsOptions));

var logger = function(req, res, next) {
    console.log("Request:"+ new Date());
    next();
}

app.use(logger);

app.use('/api/dispositivos', routerDisp);
app.use('/api/mediciones', routerMed);
app.use('/api/electrovalvulas', electrovalvula);
app.use('/api/authenticate', authenticate);

app.listen(3000, function(req, res) {
    console.log('API funcionando');
});