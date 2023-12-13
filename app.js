const express = require('express')
const app = express()
const config = require('./config')
const db = require('./db')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    methods: 'GET,POST'
}))

db.connect()

app.use('/api/auth', require('./controllers/auth/auth.routes'))

app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`)
  })