const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = 5000
const dbconnection = require('./config/DBconnection.js')
const cookieparser = require('cookie-parser')
const cors = require('cors')

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: true, credentials: true}))

app.get('/', (req, res) => {
  res.send('Praesidium')
})

dbconnection()

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is listening on Port: ${PORT}`)
})