// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa
const avo = { attr1: 'a' }
const pai = { __proto__: avo, attr2: 'b', attr3 = 3}
const filho = { __proto__: pai, attr3: 'c'}
console.log(filho.attr1, filho.attr0, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'f50',
    velMax: 324, // shadowing
}

const volvo = {
    modelo = 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())

