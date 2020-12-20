const express = require('express')
const carsRouter = require('./cars/carsRouter')

const server = express()

server.use(express.json())

server.use(carsRouter)

server.use((err, req, res, next) =>{
    console.log(err)

    res.status(500).json({
        message: "Something went wrong, please try again later."
    })
    next()
})

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is up and running."
    })
})

module.exports = server