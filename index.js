require('dotenv').config()
const server = require('./api/server')

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})