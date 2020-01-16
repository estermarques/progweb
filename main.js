const Sequelize = require('sequelize')
const sequilize = new Sequelize('progweb', 'root', 'ester123', {
    host: '127.0.0.1',
    dialect: 'mysql',
})

sequilize.authenticate().then(function(){
    console.log("Conectado!")
}).catch(function(erro){
    console.log("Falha: " + erro)
})