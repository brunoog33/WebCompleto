const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Imperativo
let total = 0
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}
console.log(total / alunos.length)

// Declarativo
let total2 = 0
const getNota = aluno => aluno.nota
const soma = (valor1, valor2) => valor1 + valor2
total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)