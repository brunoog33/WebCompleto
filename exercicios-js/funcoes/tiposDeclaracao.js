// function declaration
console.log(soma(3,4)) // pode chamar antes, pois o javascript instacia primeiro todas as functions declaretions
function soma(x, y) {
    return x + y
}

// function expression

const sub = function (x, y) {
    return x - y 
}

// named function declaration
const mult = function mult(x, y) {
    return x * y
}