const Message = require('../models/Message')

class MessageService {
    async getAllMessages(page, limit) {
        const messages = await Message.find({}).sort([['date', -1]]).limit(limit).skip(page * limit - limit)
        const allCount = await Message.count({})

        return {data: messages, allCount}
    }
}

module.exports = new MessageService()