const GameNight = require('../models/gamenight')

const index = async (req, res) => {
  const gamenight = await GameNight.find({})
  res.render('gamenights/index', {
    title: 'GameNights - Home',
    headerText: 'FIND YOUR NEXT GAMENIGHT',
    headerSubText:
      "From Dungeons and Dragons, to Age of Wonders, to Commander. There's a GameNight for everyone",
    headerAction: '',
    gamenight
  })
}

const newGameNight = (req, res) => {
  const newGame = new GameNight()
  res.render('gamenights/new', {
    title: 'GameNight | Create a new GameNight',
    errorMsg: ''
  })
}

module.exports = {
  index,
  new: newGameNight
}
