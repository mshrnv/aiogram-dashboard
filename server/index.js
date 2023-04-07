require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const router = require('./routes/index')


// Setup
const PORT = process.env.PORT || 5000
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Including routers
app.use("/api", router)

// Connects to MongoDB and starts the server
const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`🚀 Server started on port = ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()