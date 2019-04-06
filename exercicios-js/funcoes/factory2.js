function criarProduto(nome, preco) { // o mesmo nome do parmetro for o retorno não precisa atribuir
    return {
        nome,
        preco,
        desconto: 0.1,
    } 
}

console.log(criarProduto('Notebook', 1000))

console.log(criarProduto('Smartphone', 3000))