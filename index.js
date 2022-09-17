const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const db = require('./queries')
const product = require("./api/product")
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ extended: false}))
// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

app.use("/api/product", product)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/songs', db.getSongs)

app.listen(process.env.PORT || 3001)

  module.exports = app