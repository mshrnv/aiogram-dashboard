const { Router } = require('express')
const User = require('../models/User')
const Message = require('../models/Message')

// Creating router for "/users"
const router = Router()

// List of all users
router.get('/users', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

//List of all messages
router.get('/messages', async (req, res) => {
    const messages = await Message.find({})
    res.json(messages)
})

module.exports = router