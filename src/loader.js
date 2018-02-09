//este arquivo vai carregar os principais arquivos de configuração

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)

//o resultado da chamada require ('./config/routes') é um método


