var express = require('express');
var app = express();
var usuarios = require('./usuarios');
app.use("/", usuarios);

app.listen(8000, function(req, res) {
    console.log("API funcionando ");
});