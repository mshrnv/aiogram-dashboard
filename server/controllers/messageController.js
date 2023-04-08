const messageService = require('../services/messageService')

class MessageController {
    async getAll(req, res) {
        try {
            let {page, limit} = req.query

            page = page || 1
            limit = limit || 10

            const messages = await messageService.getAllMessages(page, limit)
            return res.json(messages)
        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}

module.exports = new MessageController()