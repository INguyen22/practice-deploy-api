const Pool = require('pg').Pool
const pool = new Pool({
  user: 'user1',
  host: 'localhost',
  database: 'onehitwonders',
  password: 'password',
  port: 5432,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

  const getSongs = (request, response) => {
    pool.query('SELECT * FROM songs', (error, results) => {
      if (error) {
        throw error
      }
      // const newObject = results.rows.reduce((obj, currentSong) => {
      //   if(!obj[currentSong.decade]) {
      //     obj[currentSong.decade] = []
      //   }
      //   obj[currentSong.decade].push(currentSong)
      //   return obj
      // }, {})
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getSongs,
  }