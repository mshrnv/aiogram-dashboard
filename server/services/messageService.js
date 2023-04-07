const Message = require('../models/Message')

class MessageService {
    async getAllMessages() {
        const messages = await Message.find({})
        return messages
    }
}

module.exports = new MessageService()