console.log(typeof console)

const objeto = {}
objeto.nome = 'Bruno'

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec..')
    }
}

const obj2 = new Obj('Cadeira')
const obj2 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
