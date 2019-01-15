const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.4 //Evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
    }
}

//Exemplo de Json

'{"nome": "Camisa Polo", "preco": 79.90}'