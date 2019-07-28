const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... nunca fazer desta forma pq vai travar o eventloop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono.. jeito correto
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// ler conteudo do diretorio __dirname = diretório atual disponbível em todos arquivos
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})