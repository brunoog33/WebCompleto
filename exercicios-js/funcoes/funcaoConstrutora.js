function Carro(velocidadeMax = 200, delta = 5) {
    // atributo privado apenas nesta função
    let velocidadeAtual = 0

    // método publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    // metodo public 

    this.getVelocidadeAtual = function () { // this mesma coisa que public em JAVA
        return velocidadeAtual // sem this é privado
    }
}

const uno = new Carro // parenteses são opcoinais se não passar parametros
uno.acelerar()
console.log(uno.getVelocidadeAtual)

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual)

console.log(typeof Carro)
console.log(typeof ferrari)