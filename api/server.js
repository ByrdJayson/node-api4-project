const express = require('express')
const Users  = require('./users/users-modal.js')

const server = express()
server.use(express.json())


server.get('/', (req, res) => {
    res.send('<h2>Jaysons API Landing Page</h2>')
})

server.get('/api/users', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(() => {
        res.status(500).json({message: "Internal Server Error!"})
    })
})

server.post('/api/users', async (req, res) => {
    Users.create(req.body)
    
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({message: "Internal Server Error!"})
    })
})


module.exports = server