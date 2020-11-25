import { Router } from 'express'

import { create, index } from './category.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()


router.post('/', authenticate, create)
router.get('/', authenticate, index)
// router.get('/:id', categoryController.index)

export default router
