// vamos criar um middleware agora
module.exports = function(req, res, next) {
    //o next é justamente conhecido como chain, do chain of responsability, 
    //ele que determina se vai para o próximo middleware ou vai abortar
    
    //Série de cabeçalhos para permitir que requisições venham de origens diferentes
    //Estou adicionando os cabeçalhos a resposta(res[response]) que será enviada ao browser
    res.header('Access-Control-Allow-Origin', '*') // permite origens *, quer dizer qualquer uma
    //eu tenho determinados clicntes que podem concumir minha api, mais não são da minha própria aplicação, vc pode determiná-los em vez do *
    res.header('Access-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') // permitir que nossa requisição possa ser bem sucedida ao ser feita de outra aplicação
    //Quando vc tem um middleware, uma função ou você neste função vc atende a requisição, dá uma resposta para quem te requistou
    //já que é baseado em request-response. VC pode responder com uma página ou uma lista de objetos JSON e etc.
    next() // com esse cara elel continua o fluxo de sua aplicação indo para o próximo middleware.  
}