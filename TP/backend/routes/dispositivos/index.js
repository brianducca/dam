var express = require('express');
var routerDispositivo = express.Router();
var pool = require('../../mysql');
var jwtValidator = require('../../middleware/auth');

//Devuelve un array de dispositivos
routerDispositivo.get('/', jwtValidator, function(req, res) {
    let query = 'Select * from Dispositivos d WHERE deleted = false AND usuarioId= ?';
    console.log(req.user.usuarioId);
        pool.query(query,[req.user.usuarioId], function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result);
            });
});

routerDispositivo.get('/:id', jwtValidator, function(req, res) {
        let query = 'Select * from Dispositivos d  WHERE d.dispositivoId = ? AND d.deleted = false'
        pool.query(query, [req.params.id], function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result);
            });
});


routerDispositivo.get('/:id/ultima-medicion', jwtValidator, function(req, res) {
    let query = 'Select * from Mediciones m  WHERE m.dispositivoId = ? ORDER BY m.fecha DESC LIMIT 1'
    pool.query(query, [req.params.id], function(err, result, fields) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send(result);
        });
});




routerDispositivo.get('/:id/mediciones', jwtValidator, function(req, res) {
        let query = "SELECT * FROM Mediciones WHERE dispositivoId = ? order by fecha desc";
        pool.query(query, [req.params.id], function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result);
            });
});

routerDispositivo.post("/", jwtValidator, function(req, res) {
    let insertElectroSQL = "INSERT INTO Electrovalvulas (nombre) VALUES (?)";
    pool.query(insertElectroSQL, [req.body.electrovalvula],(error, result, fields) => {
        if(error) return res.status(500).send("Error:"+ error);
        let electroId = result.insertId;
        let insertSQL = "INSERT INTO Dispositivos (nombre,ubicacion,electrovalvulaId, usuarioId) VALUES (?,?,?,?)";
        pool.query(insertSQL, [req.body.nombre, req.body.ubicacion,electroId,req.user.usuarioId],(errorInsertDisp, resultInsertDisp, fields) => {
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