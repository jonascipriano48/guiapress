const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const bodyparser = require('body-parser')
const connection = require('./database/database')
const port = 8080

//View engune
app.set('view engine', 'ejs')

//Static
app.use(express.static('public'))

//Body parser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//Database connection
try {
    connection.authenticate()
    console.log('Conexão Ok!')
} catch (error) {
    console.log('Erro na conexão', error)
}

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
})


