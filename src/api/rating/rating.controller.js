const Rating = require('./rating.model')

const create = async (req, res) => {
  console.log(req.user)
  const { body, user } = req
  Rating.create({ ...body, ratingBy: user.id })
    .then(newRating => res.status(200).json(newRating))
    .catch(err => res.status(400).json(err))
}

module.exports = { create }