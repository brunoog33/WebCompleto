const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(x => x.nota))
const result = alunos.map(x => x.nota)
    .reduce(function(acumulador, atual) {
        console.log(acumulador, atual)
        return acumulador + atual
    }, 0) // Este último parâmetro é o início do acumulador se não passar ele utiliza o primeiro index do array

console.log(result)