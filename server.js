const express = require('express')

const PORT = process.env.PORT || 3000

const server = express()
server.use(express.static('public'))

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})
