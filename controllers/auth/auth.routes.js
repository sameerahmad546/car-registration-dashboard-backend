const express = require('express')

const authController = require('./auth.controller')

const apiKey = require('../../middleware/apiKey')

const router = express.Router()



router.post('/login', apiKey, authController.login,)
router.post('/register', apiKey, authController.register)

module.exports = router