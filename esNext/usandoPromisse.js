// Com promisse
const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => { // resolve = atendida e reject rejeitada
        http.get(url, res => {
            let result = ''
            res.on('data', dados => {
                result += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch (error) {
                    reject(error)
                }
            })
        })
    }) 
}

/* Neste caso dispara um promisse e aguarda o resulta para disparar a próxima 
let nomes = []
let turma = 'A'
getTurma(turma)
 .then(alunos => { // alunos é um função callback
    nomes = nomes.concat(alunos.map(x => `${turma}: ${x.nome}`))
    turma = 'B'
    getTurma(turma).then(alunos => { // alunos é um função callback
        nomes = nomes.concat(alunos.map(x => `${turma}: ${x.nome}`))
        turma = 'C'
        getTurma(turma).then(alunos => { // alunos é um função callback
            nomes = nomes.concat(alunos.map(x => `${turma}: ${x.nome}`))
            console.log(nomes)
        })
    })
}) */

// Desta forma dispara assincrona e vai para o then quando todas responderem
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // realize um expred e concatena tudo em um único array
    .then(alunos => alunos.map(x => x.nome))
    .then(nomes => console.log(nomes))
    .catch(e => e.Message)

