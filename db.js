// usaremos remote mysql 

const Sequelize = require('sequelize')

const peliculaModelo = require('./models/peliculas');

const sequelize = new Sequelize('mybasededatos', 'root', 'root', {   //! aqui debo llenar estos datos para conectar a la base de datos, si no amrca error

    host: 'localhost',  //! server
    dialect: 'mysql'

})

const pelicula = peliculaModelo(sequelize, Sequelize)

sequelize.sync({force : false})
.then(()=> {
    console.log("tablas sincronzadas");
})


module.exports = pelicula;  