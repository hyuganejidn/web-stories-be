import Chapter from './chapter.model'

const create = async (req, res) => {
  Chapter.create({ ...req.body })
    .then(newChapter => res.status(200).json(newChapter))
    .catch(err => res.status(400).json(err))
}

const getById = async ({ params }, res) => {
  Chapter.findById(params.id)
    .then(chapter => res.status(200).json(chapter))
    .catch(err => res.status(400).json(err))
}

const index = async ({ params }, res) => {
  Chapter.find({})
    .then(chapters => res.status(200).json(chapters))
    .catch(err => res.status(400).json(err))
}
export { create, getById, index }