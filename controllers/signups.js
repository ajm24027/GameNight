const GameNight = require('../models/gamenight')

const add = async (req, res) => {
  const gamenight = await GameNight.findById(req.params.id)
  gamenight.players.push(res.locals.user)
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
