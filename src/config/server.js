//configuração do express, esse cara vai startar o server
const port = 3003 // alocar uma porta
const bodyParser = require('body-parser') //o cara que vai fazer o parser do corpo da requisição quando chegar
const express = require('express') //servidor web que roda em cima do node, padrão
const server = express() //startar o express, criar uma instancia e associar a variável server
//No entanto, ao chamar uma instancia do express, para cada chamada ele é um diferente
//Então esse server aqui vai ser importante ser passado para o meu arquivo de rotas para que eu possa
//a partir daquele servidor mapear as rotas dentro dele

//aplicar alguns middlewares para a nossa requisição, instância do express
server.use(bodyParser.urlencoded({ extended: true})) 
server.use(bodyParser.json())
//Requisição no padrão urlencode(submissão de formulário), será tratada pelo bodyParser
//Modo extended suporta mais tipos de dados do que o padrão
//O express é fortemente baseado no padrão Chenge Of Responsability, 
//   como se vc tivesse uma cadeia de middlewares que vão estar trabalhando com as requisições. 
//   Todas as requisições vão passr pelo middleware bodyParser

//registrar a porta e se tudo der certo vai mostrar mensagem no console
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server

