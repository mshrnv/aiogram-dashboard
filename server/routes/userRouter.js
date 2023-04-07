const { Router } = require('express')
const userController = require('../controllers/userController')

// Creating router for "/users"
const userRouter = Router()

// List of all users
userRouter.get('/', userController.getAll)

module.exports = userRouter