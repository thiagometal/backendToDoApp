const express = require('express') // no node, toda vez que eu uso o require('biblioteca') ele retorna a mesma instância

//a forma como vc tem no node para receber um parâmetro é exportando uma função que recebe um parâmetro.
module.exports = function(server) {
    //API Routes
    const router = express.Router()
    server.use('/api', router) 
    //Esse Router será chamado sempre que vc digitar /api. middleware Específico para as urls que começçam com /api
    //Daí concluisse que todas as apis que vão ser consumidas pelo nosso frontend vão iniciar com /api

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') 
    // método register vai usar todos os métodos declarados no todo service
}