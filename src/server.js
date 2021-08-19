//importa o express e as routes
const express = require('express')
const routes = require('./routes')

//cria o servidor e a porta
const server = express()
const port = 3000

//usando template engine
server.set('view engine', 'ejs')

//habilita arquivos statics
server.use(express.static('public'))

//usar o req.body
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)

server.listen(port, () => { console.log('Rodando..') })