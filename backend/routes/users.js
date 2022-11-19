const { Router } = require('express')
const User = require('../models/User')

// Creating router for "/users"
const router = Router()

// List of all users
router.get('/users', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

module.exports = router