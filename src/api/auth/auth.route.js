import { Router } from 'express'

import authController from './auth.controller'
const router = new Router()


router.post('/login', authController.login);
router.post('/register', authController.register)
// router.get('/', userController.index)
// router.put('/:id', userController.updateInfo)

export default router