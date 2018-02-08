const mongoose = require('mongoose') // serve tanto para mapear os obj js para os docs que vão para o mongo
// e para abrir uma conexão com o mongo e mandar os comandos de CRUD

mongoose.Promise = global.Promise //para evitar mensagem warning que a api do mongoose está depreciada
module.exports = mongoose.connect('mongodb://localhost/todo')