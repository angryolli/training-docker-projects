const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! Modified version3.0 for render & NIPPSU</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})