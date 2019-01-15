const valores = [7,7,8.9,6.3,9.2]

console.log(valores[0], valores[3])
console.log(valores[5])
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//remove o último elemento do array
delete valores[0]//remove uma determinada posição do array
console.log(valores)

console.log(typeof valores)//Array é do tipo object