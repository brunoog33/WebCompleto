// Sem promisse
const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let result = ''
        res.on('data', dados => {
            result += dados
        })
        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let nomes = []
let turma = 'A'
getTurma(turma, alunos => { // alunos é um função callback
    nomes = nomes.concat(alunos.map(x => `${turma}: ${x.nome}`))
    turma = 'B'
    getTurma(turma, alunos => { // alunos é um função callback
        nomes = nomes.concat(alunos.map(x => `${turma}: ${x.nome}`))
        turma = 'C'
        getTurma(turma, alunos => { // alunos é um função callback
            nomes = nomes.concat(alunos.map(x => `${turma}: ${x.nome}`))
            console.log(nomes)
        })
    })
})