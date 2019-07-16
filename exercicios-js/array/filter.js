const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad Prod', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 0.49, fragil: false },
]

//const filterExpensive = produto => produto.preco > 500
//const filterFragil = produto => produto.fragil
    
const filterExpensive = function(produto) {
    return produto.preco > 500;   
}

const filterFragil = function(produto) {
    return produto.fragil
}

console.log(produtos.filter(filterExpensive).filter(filterFragil));