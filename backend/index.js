const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')

const port = 8000
const app = express()

app.use(usersRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb://mongo:27017/telegram-bot')
        app.listen(port, () => {
            console.log("Server has been started...")
        })
    } catch (error) {
        console.log(error)
    }
}

start()