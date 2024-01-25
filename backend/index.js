const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')


// app.get('/', (req, res) => {
//   res.send('<h1>Hello Book Reader !!! <h1>')
// })
app.use(express.static('../frontend/build'))
app.get("*", (req, res) => {
    res.sendFile(path.resolve('../frontend/build', 'index.html'))
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})