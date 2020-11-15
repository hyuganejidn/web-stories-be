const User = require('./usersModel')

const create = async ({ body }, res) => {
  User.create({ ...body })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err))
}

const index = async (req, res) => {

  User.find({})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err))
}

module.exports = { create, index }