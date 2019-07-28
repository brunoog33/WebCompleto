// Uma factory retorna um objeto novo
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}