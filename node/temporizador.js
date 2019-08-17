const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 6', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando a Tarefa 1!')
}, 15000)

//setTimeout setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ schedule.Range[1,6] ]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})