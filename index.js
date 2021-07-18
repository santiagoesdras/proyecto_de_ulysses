const path = require('path');
const express = require('express');
const app = express();
//ASI SE IMPORTAN LAS LIBRERIAS
require('dotenv').config();
var nombre = process.env.NOMBREULYSSES;
const port = process.env.PORT;

app.use(express.static('public'));

app.get('' , function get (req,res){
    res.send("Hello world")
});
app.get('/nombre', function nombre (req, res){
    res.sendFile(path.resolve('public/index.html'))
})

app.listen(port, console.log("Servidor funcionando en el puerto:", port));
