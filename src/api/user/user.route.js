import { Router } from 'express'

const userController = require('./user.controller')
const router = new Router()

router.get('/', userController.index)
router.put('/:id', userController.updateInfo)

module.exports = router