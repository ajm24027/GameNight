const GameNight = require('../models/gamenight')
const User = require('../models/user')

const index = async (req, res) => {
  const gamenights = await GameNight.find({})
  res.render('gamenights/index', {
    title: 'GameNights - Explore',
    headerText: 'FIND YOUR NEXT GAMENIGHT',
    headerSubText:
      "From Dungeons and Dragons, to Age of Wonders, to Commander. There's a GameNight for everyone",
    headerAction: '',
    gamenights
  })
}

const newGameNight = (req, res) => {
  res.render('gamenights/new', {
    title: 'GameNight - Creation',
    errorMsg: ''
  })
}

const createGame = async (req, res) => {
  req.body.owner = res.locals.user
  const newGameNight = new GameNight(req.body)

  try {
    await newGameNight.save()
    const user = await User.findById(req.body.owner._id)
    user.myGames = newGameNight._id
    await user.save()
  } catch (err) {
    console.log(err)
  }

  res.redirect('/gamenights')
}

const show = async (req, res) => {
  const gamenight = await GameNight.findById(req.params.id)
  res.render('gamenights/show', {
    title: `${gamenight.eventName} - GameNights`,
    gamenight
  })
}

const deleteGame = async (req, res) => {
  try {
    // Delete game from GameNight collection
    await GameNight.findByIdAndDelete(req.params.id)

    // Find the session user and update their myGames array
    const user = await User.findById(res.locals.user._id)
    user.myGames = user.myGames.filter(
      (gameId) => gameId.toString() !== req.params.id
    )
    await user.save()

    res.redirect('/profiles')
  } catch (error) {
    console.error(error)
    // Handle error appropriately
    res.status(500).send('Error deleting game.')
  }
}

module.exports = {
  index,
  new: newGameNight,
  createGame,
  show,
  deleteGame
}
