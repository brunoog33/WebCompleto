//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {//Função anônima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow (2015) em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3)) 

// Retorno implicíto
const subtracao = (a, b) => a - b

console.log(subtracao(3,2))