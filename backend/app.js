const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Praesidium')
})

app.listen(PORT, () => {
  console.log(`Servers is listening on Port: ${PORT}`)
})