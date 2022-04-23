var express = require('express');
var routerAuthenticate = express.Router();
const jwt = require('jsonwebtoken');
var pool = require('../../mysql');

const JWT_Secret = 'your_secret_key';




routerAuthenticate.post('', (req, res) => {

    if (req.body) {
        var user = req.body;
        console.log(user);
        pool.query('SELECT * From Usuarios WHERE username = ? AND password = ?', [req.body.username, req.body.password], function(err, result, fields) {
            if (err) {
                res.status(403).send({
                    errorMessage: 'Auth required!'
                });
            }
            if(result.length == 1) {
                var token = jwt.sign({usuarioId:result[0].usuarioId}, JWT_Secret, {
                    expiresIn: "24h"
                });
                res.status(200).send({
                    signed_user: {username:user.username},
                    token: token
                });
            } else {
                res.status(403).send({
                    errorMessage: 'Please provide username and password'
                });
            }
            
        });
       
    } else {
        res.status(403).send({
            errorMessage: 'Please provide username and password'
        });
    }

});

module.exports = routerAuthenticate;