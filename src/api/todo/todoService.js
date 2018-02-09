const Todo = require('./todo')

 Todo.methods(['get','post','put','delete']) // habilito os métodos que minha api vai usar
 Todo.updateOptions({new: true, runValidators: true}) 
 // [new: true] ao atualizar um registro no mongo por o padrão nodeRestful 
 // te devolve o objeto antigo e não o que acabara de ser atualizado, com o true ele vai retornar o atualizado

 //[runValidators: true]
 // por default, ele não efetua as validações do schema no update

 module.exports = Todo

 // o node restful não só encapsula a parte relativa ao express, que é criar os ws, 
 // como também ele encapsula as chamadas para a Api do mongo. Assim ele faz as operações de crud de boa mano!!!