Array.prototype.filter2 = function(callback) { // como o filter funciona
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad Prod', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 0.49, fragil: false },
]

const filterExpensive = produto => produto.preco > 500
const filterFragil = produto => produto.fragil

console.log(produtos.filter2(filterExpensive).filter2(filterFragil));