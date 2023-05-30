const GameNight = require('../models/gamenight')
const User = require('../models/user')

const add = async (req, res) => {
  const gamenight = await GameNight.findById(req.params.id)

  try {
    await gamenight.save()
  } catch (err) {
    console.log(err)
  }

  res.redirect(`/gamenights/${gamenight._id}`)
}

module.exports = {
  add
}
