var express = require('express');
var routerDispositivo = express.Router();
var pool = require('../../mysql');

//Devuelve un array de dispositivos
routerDispositivo.get('/', function(req, res) {
        pool.query('Select * from Dispositivos WHERE deleted = false', function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result);
            });
});

routerDispositivo.get('/:id', function(req, res) {
        let query = 'Select * from Dispositivos d  WHERE d.dispositivoId = ? AND d.deleted = false'
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

routerDispositivo.post("/", function(req, res) {
    let insertElectroSQL = "INSERT INTO Electrovalvulas (nombre) VALUES (?)";
    pool.query(insertElectroSQL, [req.body.electrovalvula],(error, result, fields) => {
        if(error) return res.status(500).send("Error:"+ error);
        let electroId = result.insertId;
        let insertSQL = "INSERT INTO Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES (?,?,?)";
        pool.query(insertSQL, [req.body.nombre, req.body.ubicacion,electroId],(errorInsertDisp, resultInsertDisp, fields) => {
            if(errorInsertDisp) return res.status(500).send("Error:"+ errorInsertDisp);
                return res.status(201).send({
                    electrovalvulaId:electroId,
                    dispositivoId:resultInsertDisp.insertId
            });;
        });
    });
});

routerDispositivo.delete("/:id", function(req,res) {
    let sql = "UPDATE Dispositivos set deleted = true WHERE dispositivoId = ?";

    

    pool.query(sql, [req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });

});


module.exports = routerDispositivo;