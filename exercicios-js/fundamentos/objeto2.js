console.log(typeof Object)
console.log(typeof new Object())// Pode omitir os parenteses

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015, na verdade é uma função
console.log(typeof Produto)
console.log(typeof new Produto())