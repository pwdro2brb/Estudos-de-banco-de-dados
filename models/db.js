const Sequelize = require('sequelize')

const sequelize = new Sequelize("comeco", "root", "123456",{
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
.then(function(){
console.log("Conexão realizada com sucesso. Boa!!!!")
}).catch(function(){
    console.log("Erro: Conexão com banco de dados não realizada")
})

module.exports = sequelize;