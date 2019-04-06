class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`) // use o this para acessar a variável do escopo
    }
}

const p1 = new Pessoa('Bruno')
p1.falar()

const pessoa = nome => { 
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // Usa o que foi declarado dentro da função
    }
}

const p2 = pessoa('Bruno')
p2.falar()
