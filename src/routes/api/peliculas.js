const express = require('express');
const Proute = express.Router();

const PELI = require('../../db')

Proute.get('/', async (req,res)=>{

    res.json("hola desde el get de peliculas.js leido desde api.js")
    
    // mostramos todas las peliculas guardadas en la base de datos
    
    console.log(("se han obtenido las peliculas").blue);
    const peliculas = await PELI.findAll()
    //res.json(peliculas)
    console.log(peliculas);

})

Proute.post('/', (req,res) => {
});

module.exports = Proute;