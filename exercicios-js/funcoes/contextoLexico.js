const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao() // Neste caso utiliza a variavel global sempre mantem o contexto
}

exec()