var express = require('express');
var routerDispositivo = express.Router();
var pool = require('../../mysql');

//Devuelve un array de dispositivos
routerDispositivo.get('/', function(req, res) {
        pool.query('Select * from Dispositivos', function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result);
            });
});

routerDispositivo.get('/:id', function(req, res) {
        let query = 'Select * from Dispositivos d  WHERE d.dispositivoId = ?'
        pool.query(query, [req.params.id], function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result);
            });
});


routerDispositivo.get('/:id/ultima-medicion', function(req, res) {
    let query = 'Select * from Mediciones m  WHERE m.dispositivoId = ? ORDER BY m.fecha DESC LIMIT 1'
    pool.query(query, [req.params.id], function(err, result, fields) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send(result);
        });
});




routerDispositivo.get('/:id/mediciones', function(req, res) {
        let query = "SELECT * FROM Mediciones WHERE dispositivoId = ? order by fecha desc";
        pool.query(query, [req.params.id], function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result);
            });
});


module.exports = routerDispositivo;