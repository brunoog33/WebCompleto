const escola = [{
    classe: 'Turma M1',
    alunos: [{
        nome: 'Bruno',
        nota: 10,
    },
    {
        nome: 'Amanda',
        nota: 9
    }]
},
{
    classe: 'Turma M2',
    alunos: [{
        nome: 'Matheus',
        nota: 7
    },
    {
        nome: 'Daniela',
        nota: 9
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = classe => classe.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasTurma)
console.log(nota1)
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)
// mesma coisa que o concat
console.log([].concat([10, 9],[7, 9]))