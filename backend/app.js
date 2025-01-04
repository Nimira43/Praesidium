const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = 5000
const dbconnection = require('./config/DBconnection.js')

dotenv.config()

app.get('/', (req, res) => {
  res.send('Praesidium')
})

dbconnection()

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is listening on Port: ${PORT}`)
})