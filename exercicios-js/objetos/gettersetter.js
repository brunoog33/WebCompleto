const sequencia = {
    _valor: 1, // convenção javascript para definir que o atributo é private
    get valor() { return _valor++ },
    set valor(valor) { // javascript não aceita sobrecarga de metodos apenas neste caso
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)