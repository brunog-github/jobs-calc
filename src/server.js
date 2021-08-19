//importa o express e as routes
const express = require('express')
const routes = require('./routes')

//cria o servidor e a porta
const server = express()
const port = 3000;

server.set('view engine', 'ejs')

server.use(express.static('public'))
server.use(routes)

server.listen(port, () => { console.log('Rodando...') })