const messageService = require('../services/messageService')

class MessageController {
    async getAll(req, res) {
        try {
            const messages = await messageService.getAllMessages()
            return res.json(messages)
        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}

module.exports = new MessageController()