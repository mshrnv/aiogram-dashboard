const { Schema, model } = require('mongoose')

const schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    is_bot: {
        type: Boolean,
        default: false
    },
    first_name: {
        type: String,
        default: ""
    },
    last_name: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        default: ""
    },
    language_code: {
        type: String,
        default: ""
    }
})

module.exports = model('User', schema)