const porta = 1556

const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParse = require('body-parser')
const app = express()

app.use(bodyParse.urlencoded({ extended: true })) // Função middler para converter body do post

/* app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...') // Função Middler
    next()
}) */

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos()) // Convert para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // Convert para JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto) // JASON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JASON
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto) // JASON
})

app.listen(porta, () => {
    console.log(`Servidor executando na eita porta: ${porta}.`)
})
