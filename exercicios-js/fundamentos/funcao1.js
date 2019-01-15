//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)//Define b como 
imprimirSoma(2,3,4,5,6,7)//Define os dois primeiros, o resto ignora

//Função com retorno
function soma(a, b=0) {//Define um valor padrão do parâmetro
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())//Retorna NaN, pq o primeiro parâmetro é undefined