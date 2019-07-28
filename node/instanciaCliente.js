const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')
const contadorC = require('./instanciaNova')() // Chamando a função da instância
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // o Node guarda cache dos objetos

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // com o factory chamando a função cria-se uma nova instÂncia