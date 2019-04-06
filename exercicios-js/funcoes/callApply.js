function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Galaxy Note 9',
    preco: 3500.90,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.des = 0.10

console.log(getPreco())
console.log(produto.getPreco())
console.log(getPreco.call(produto))
console.log(getPreco.apply(produto))

console.log(getPreco.call(produto, 0.05, '$')) // primeiro o contexto
console.log(getPreco.apply(produto, [0.05, '$'])) // tem que passar os parametros como array
