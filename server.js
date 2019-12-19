const express = require('express')
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/login.html`)
})

app.post('/', (req, res) => {
    res.sendFile(`${__dirname}/login.html`)
})

app.post('/principal',(req,res) => {
    console.log(req.body)
    res.sendFile(`${__dirname}/principal.html`)
})

app.post('/criar',(req,res) => {
    console.log(req.body)
    res.sendFile(`${__dirname}/criarusuario.html`)
})

app.get('/estiloLogin',(req,res) => {
    console.log(req.body)
    res.sendFile(`${__dirname}/css/login.css`)
})

app.get('/estilo',(req,res) => {
    console.log(req.body)
    res.sendFile(`${__dirname}/css/principal.css`)
})

app.get('/script',(req,res) => {
    console.log(req.body)
    res.sendFile(`${__dirname}/script.js`)
})

app.get('/imagens/pesquisar',(req,res) => {
    console.log(req.body)
    res.sendFile(`${__dirname}/imagens/pesquisar.svg`)
})

app.listen(1999,() => {
    console.log("Servidor Iniciado")
})