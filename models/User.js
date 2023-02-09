const sequelize = require('sequelize')
const db = require('./db')

const User = db.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type:sequelize.STRING,
        allowNull: false,    
}});

//Cria a tabela
//User.sync()

//Verifica se há alguma diferença na tabela, realiza a alteração
//User.sync({ alter: true })

module.exports = User