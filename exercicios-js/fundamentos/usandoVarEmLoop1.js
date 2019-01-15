for(var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)

//Usando let
for(let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)//Usando o let a variável não fica disponível

//Usando func com var
const funcs = []
for(var i = 0; i < 10; i++) {
    funcs.push(function() {// Adiciona a função anônima dentro do Array funcs (push)
        console.log(i)
    })
}

funcs[2]()// Sempre retorna 10, pq é o último valor que foi atribuido ao i var
funcs[8]()

//Usando func com let
const funcs = []
for(let i = 0; i < 10; i++) {
    funcs.push(function() {// Adiciona a função anônima dentro do Array funcs (push)
        console.log(i)
    })
}

funcs[2]()// Mostra os valores esperados, pois o let utiliza o valor local que doi definida
funcs[8]()