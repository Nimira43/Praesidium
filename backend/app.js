const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('Praesidium')
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is listening on Port: ${PORT}`)
})