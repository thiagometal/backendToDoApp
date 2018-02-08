//configuração do express, esse cara vai startar o server
const port = 3003 // alocar uma porta
const bodyParser = require('body-parser') //o cara que vai fazer o parser do corpo da requisição quando chegar
const express = require('express') //servidor web que roda em cima do node, padrão
const server = express() //startar o express, criar uma instancia e associar a variável server

//aplicar alguns middlewares para a nossa requisição, instância do express
server.use(bodyParser.urlencoded({ extended: true})) 
//Requisição no padrão urlencode(submissão de formulário), será tratada pelo bodyParser
//Modo extended suporta mais tipos de dados do que o padrão
//O express é fortemente baseado no padrão Chenge Of Responsability, 
//   como se vc tivesse uma cadeia de middlewares que vão estar trabalhando com as requisições. 
//   Todas as requisições vão passr pelo middleware bodyParser

//registrar a porta e se tudo der certo vai mostrar mensagem no console
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

