// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const db = require('./queries')
// // const product = require("./api/product")
// const port = process.env.PORT || 3001
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'user1',
//   host: 'practice-deploy-api.vercel.app',
//   database: 'onehitwonders',
//   password: 'password',
//   port: 5432,
// })

// app.get('/', (request, response) => {
//   pool.query('SELECT * FROM songs ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     const newObject = results.rows.reduce((obj, currentSong) => {
//       if(!obj[currentSong.decade]) {
//         obj[currentSong.decade] = []
//       }
//       obj[currentSong.decade].push(currentSong)
//       return obj
//     }, {})
//     response.status(200).json(newObject)
//   })
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })
  // const getSongs = (request, response) => {
  //   pool.query('SELECT * FROM songs ORDER BY id ASC', (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     const newObject = results.rows.reduce((obj, currentSong) => {
  //       if(!obj[currentSong.decade]) {
  //         obj[currentSong.decade] = []
  //       }
  //       obj[currentSong.decade].push(currentSong)
  //       return obj
  //     }, {})
  //     response.status(200).json(newObject)
  //   })
  // }

  // module.exports = {
  //   getSongs,
  //   app
  // }

//   const getSongs = (request, response) => {
//     pool.query('SELECT * FROM songs ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       const newObject = results.rows.reduce((obj, currentSong) => {
//         if(!obj[currentSong.decade]) {
//           obj[currentSong.decade] = []
//         }
//         obj[currentSong.decade].push(currentSong)
//         return obj
//       }, {})
//       response.status(200).json(newObject)
//     })
//   }