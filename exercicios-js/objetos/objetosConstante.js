// pessoa -> 123 -> {...}
let pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Neste caso não consegue mais alterar o objeto nada nem atributos
// não retorna exception

pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante)
