class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor= valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes
        this.ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(x => this.lancamentos.push(x))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(x => {
            valorConsolidado += x.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 8000)
const contaDeLuz = new Lancamento('Luz', -90)

const contas = new CicloFinanceiro(7, 2019)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())