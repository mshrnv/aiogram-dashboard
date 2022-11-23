const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const messagesRouter = require('./routes/messages')
const cors = require('cors');


// Setup
const port = 8000
const app = express()
app.use(cors())

// Including routers
app.use(usersRouter)
app.use(messagesRouter)

// Connects to MongoDB and starts ther server
const start = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/telegram-bot')
        app.listen(port, () => {
            console.log("Server has been started...")
        })
    } catch (error) {
        console.log(error)
    }
}

start()