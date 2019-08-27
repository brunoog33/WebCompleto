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

// Recurso ESB 2015
// Objetivo de simplificar o uso de promisses...
ObterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorno um objeto AsyncFunction

ObterAlunos()
    .then(alunos => alunos.map(x => x.nome))
    .then(nomes => console.log(nomes))