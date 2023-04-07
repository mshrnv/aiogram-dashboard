const User = require('../models/User')

class UserService {
    async getAllUsers() {
        const users = await User.find({})
        return users
    }
}

module.exports = new UserService()