var express = require('express');
var routerMedicion = express.Router();
var pool = require('../../mysql');
var jwtValidator = require('../../middleware/auth');

//Espera recibir por parámetro un id de dispositivo y un valor de medición y lo inserta en base de datos.
routerMedicion.post('', jwtValidator, function(req, res) {
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [req.body.fecha, req.body.valor, req.body.dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerMedicion;