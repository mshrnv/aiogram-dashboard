const { Schema, model } = require('mongoose')

const schema = new Schema({
    message_id: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = model('Message', schema)