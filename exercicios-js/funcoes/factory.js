// Jeito burro de fazer
const prod1 = {
    nome: 'Produto 1',
    preco: 45
}

const prod2 = {
    nome: 'Produto 2',
    preco: 450
}

// Factory

function criarProduto() {
    return {
        nome: 'Produto Factory',
        preco: 45
    }
}

console.log(criarProduto())