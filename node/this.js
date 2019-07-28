// CUIDADE o this dentro de uma função no node aponta para o 
// contexto global e fora aponta para o module.exports;

console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro da função')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)
}

logThis()