const express = require('express');
const colors = require('colors');
const config = require('./config')
const bodyParser = require('body-parser'); // enviar objetos asociados a la peticion post

const app = express();

app.use(bodyParser.json()); // lanzar un middleware
app.use(bodyParser.urlencoded({extended: true })); // codificacion de la url
app.use(express.json());

const PORT = config.module.PORT || 3000

app.get('/', (req,res) => {
    res.json('hola desde el servidor de express')
})

app.listen(PORT, ()=>{
    console.log(("escuchando en el localhost:"+PORT+" ").inverse);
});

module.exports = app;