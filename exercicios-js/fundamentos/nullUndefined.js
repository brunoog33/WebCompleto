let valor //não inicializada
console.log(valor)//undefined

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const prod = {}
console.log(prod.preco)
console.log(prod)

prod.preco = 3.50
console.log(prod)

prod.preco = undefined //evite utilizar
delete prod.preco //correto
console.log(!!prod.preco)
console.log(prod)

prod.preco = null
console.log(!!prod.preco)
console.log(prod)
