const { Router } = require('express')
const messageController = require('../controllers/messageController')

// Creating router for "/messages"
const messageRouter = Router()

//List of all messages
messageRouter.get('/', messageController.getAll)

module.exports = messageRouter