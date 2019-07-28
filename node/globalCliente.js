require('./global')

console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Sei lá'
console.log(MinhaApp.nome)

MinhaApp2.nome = 'Sei lá' // não altera pq está como freeze
console.log(MinhaApp2.nome)