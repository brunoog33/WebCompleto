function falarDepoisDe(segundos, frase) { // criando a promisse
    return new Promise((resolve, reject) => { // dois parametros
        setTimeout(() => {
            resolve(frase) // resolvendo a promisse
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('!!!!!')) // depois da promisse, só aceita um parametro
    .then(outraFrase => console.log(outraFrase)) // quantos then precisar
    .catch(e => console.log(e)) // tratar erro
