var express = require('express');
var routerUsuario = express.Router();
var mongo = require('../db');
//6
routerUsuario.get('/6', function(req, res) {
    console.log(mongo.db);
    mongo.db.collection("Usuarios").find().toArray(function(err, docs) {
        if (err != null) {
            res.send(err).status(400);
            return;
        }
        console.log(docs);
        res.send(docs);
    });
});

//7
routerUsuario.get('/7', function(req, res) {
    mongo.db.collection("Usuarios").countDocuments({}, {}, function(err, count) {
        if (err) {
            res.send(err);
            return;
        }
        res.send({ count });
    })
});

//8
routerUsuario.get('/8', function(req, res) {
    mongo.db.collection("Usuarios").find({ dni: { $gt: 30000000 } }).project({
        email: 1
    }).toArray(function(err, docs) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(docs);
    });
});

//9
routerUsuario.get('/9', function(req, res) {
    mongo.db.collection("Usuarios").find().limit(1).sort({ dni: -1 }).toArray(function(err, docs) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(docs);
    });
});

//10
routerUsuario.get('/10', function(req, res) {
    console.log(mongo.db);
    mongo.db.collection("Usuarios").find({ apellido: /^B/ }).toArray(function(err, docs) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(docs);
    });
});


//10
routerUsuario.put('/actualizar', function(req, res) {
    console.log(mongo.db);
    mongo.db.collection("Usuarios").update({ _id: mongo.objectId('5f342aa2c3e20036c7a6d75e') }, { $set: { nombre: "nuevoNombre" } }, function(err, docs) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(docs);
    });
});

module.exports = routerUsuario;