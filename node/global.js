// console.log(global)

global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome:  'Sistema Legal'
}

global.MinhaApp2 = Object.freeze({ // Neste caso nada pode ser alterado do objeto
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome:  'Sistema Legal'
})