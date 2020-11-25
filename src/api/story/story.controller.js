import Story from './story.model'
import { populate } from './story.constants'

const create = async ({ body, file }, res) => {
  const { name, description, status, categories, author, chapters, image } = { ...body }
  const data = { name, description, status, categories, author, chapters, image }
  Story.create({ ...data })
    .then(story => story.populateStory())
    .then(story => res.status(201).json(story))
    .catch(err => res.status(400).json(err))
}

const index = async ({ params }, res) => {
  Story.find({}).populate(populate)
    .then(stories => res.status(200).json(stories))
    .catch(err => res.status(400).json(err))
}

const getById = async ({ params }, res) => {
  Story.findById(params.id).populate(populate)
    .then(stories => res.status(200).json(stories))
    .catch(err => res.status(400).json(err))
}

export { create, index, getById }