const express = require('express')

const userController = require('./usersController')
const router = express.Router()

router.post('/', userController.create)
router.get('/', userController.index)

module.exports = router