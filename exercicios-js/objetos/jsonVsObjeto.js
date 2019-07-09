const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) - Não funciona
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) - Não funciona
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // Jeito correto de escrever um JSON
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": []}')) // Jeito correto de escrever um JSON
