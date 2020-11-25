import { Router } from 'express'

import { create, getById, index } from './chapter.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.post('/', authenticate, create)
router.get('', index)
router.get('/:id', getById)

export default router


