import Category from './category.model'

const create = async (req, res) => {
  Category.create({ ...req.body })
    .then(newCategory => res.status(200).json(newCategory))
    .catch(err => res.status(400).json(err))
}

const index = async (req, res) => {
  Category.find({}).then(categories => res.status(200).json(categories))
}

const update = async ({ params, body }, res) => {
  const { id } = params
  const { title } = body
  Category.findByIdAndUpdate(id, { title }, { new: true, useFindAndModify: false })
    .then(category => res.status(200).json(category))
    .catch(err => res.status(400).json(err))
}

export { create, index, update }