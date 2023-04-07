const { Router } = require('express')
const Message = require('../models/Message')

// Creating router for "/messages"
const router = Router()

//List of all messages
router.get('/messages', async (req, res) => {
    const messages = await Message.find({})
    res.json(messages)
})

module.exports = router