const userService = require('../services/userService')

class UserController {
    async getAll(req, res) {
        try {
            const users = await userService.getAllUsers()
            return res.json(users)
        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}

module.exports = new UserController()