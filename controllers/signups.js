const GameNight = require('../models/gamenight')
const User = require('../models/user')

const add = async (req, res) => {
  const gamenight = await GameNight.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  gamenight.players.push(req.body)
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
