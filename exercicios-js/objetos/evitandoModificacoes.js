// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 2.50, tag: 'promoção'
})
console.log('Extensions', Object.preventExtensions(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar'
delete produto.tag
console.log(produto)

// Object.seal neste caso não consegue deletar nos atributos do objeto, apenas alterar
const pessoa = { nome: 'Bruno', idade: 27 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Carvalho'
delete pessoa.nome
pessoa.idade = 28
console.log(pessoa)

// Object.freeze = selado mais valores constante, não consegue alterar nada