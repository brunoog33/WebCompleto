const url = 'http://files.cod3r.com.br/curso-js/funcionario.json'
const axios = require('axios')

const chineses = funcionario => funcionario.pais === 'China'
const filtroPais = (pais, funcionario) => pais === funcionario.pais
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    if (funcionario.salario < funcionarioAtual.salario)
       return funcionario;
    return funcionarioAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    // mulher chinesa com menor salario
    const funcionarioMulherChinesa = funcionarios
        .filter(filtroPais('China'))
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(funcionarioMulherChinesa)
})



