import { Router } from 'express'

import { create, index, getById, getChaptersOfStory } from './story.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.post('/',  authenticate(['admin']), create)
router.get('/', index)
router.get('/:id', getById)
router.get('/:id/chapters', getChaptersOfStory)

export default router
