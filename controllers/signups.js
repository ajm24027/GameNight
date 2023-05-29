const GameNight = require('../models/gamenight')

const add = async (req, res) => {
  const gamenight = await GameNight.findById(req.params.id)

  // Check if res.locals.user.googleId already exists in players array
  // for (let i = 0; i < gamenight.players.length; i++) {
  //   if (gamenight.players[i].googleId === res.locals.user.googleId) {
  //     break // Exit the function without pushing the user to the array
  //   } else {
  gamenight.players.push(res.locals.user)
  //   }
  // }

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
