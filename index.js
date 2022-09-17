const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/', (request, response) => {
//     response.json( db.getSongs )
//   })

  app.get('/api/v1/songs', db.getSongs)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  // Export the Express API
module.exports = app;
