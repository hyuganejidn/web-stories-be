const express = require('express')
const chapterApi = require('../components/chapter/chaptersRoute')
const categoryApi = require('../components/category/categoriesRoute')
const userApi = require('../components/user/usersRoute')
const commentApi = require('../components/comment/commentsRoute')
const storyApi = require('../components/story/storiesRoute')

const router = express.Router()

router.use('/chapters', chapterApi)
router.use('/categories', categoryApi)
router.use('/users', userApi)
router.use('/comments', commentApi)
router.use('/stories', storyApi)

module.exports = router

