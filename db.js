// usaremos remote mysql 

const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {

    host: 'remotemysql.com',  //! server
    dialect: 'mysql'
    
})