const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const fullFree = (acumulador, atual) => acumulador && atual
console.log(alunos.map(x => x.bolsista).reduce(fullFree))

const anyFree = (acumulador, atual) => acumulador || atual
console.log(alunos.map(x => x.bolsista).reduce(anyFree))

const todosBolsista = alunos.map(x => x.bolsista)
    .reduce(function(acumulador, atual) {
        if (!acumulador)
            return false;
        
        if (!atual)
            return false
            
        return true;    
    });

console.log(todosBolsista)

const existeBolsista = alunos.map(x => x.bolsista)
    .reduce(function(acumulador, atual) {
        if (acumulador)
            return true;
        
        if (atual)
            return true
            
        return false;    
    });

console.log(existeBolsista)