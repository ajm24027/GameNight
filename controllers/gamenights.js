const GameNight = require('../models/gamenight')

const index = async (req, res) => {
  const gamenights = await GameNight.find({})
  res.render('gamenights/index', {
    title: 'GameNights - Explore',
    gamenights
  })
}

const newGameNight = (req, res) => {
  const newGame = new GameNight()
  res.render('gamenights/new', {
    title: 'GameNight - Create a new GameNight',
    errorMsg: ''
  })
}

const createGame = async (req, res) => {
  let gameOwner = req.body.owner
  gameOwner = {
    user: res.locals.user.googleId, // Assign the googleId to owner.user
    userName: res.locals.user.name, // Assign the user's name to owner.userName
    userAvatar: res.locals.user.avatar // Assign the user's avatar to owner.userAvatar
  }
  const newGameNight = new GameNight(req.body)
  try {
    await newGameNight.save()
  } catch (err) {
    console.log(err)
  }

  res.redirect('/gamenights')
}

const show = async (req, res) => {
  const gamenight = await GameNight.findById(req.params.id)
  res.render('gamenights/show', { title: 'Test', gamenight })
}

module.exports = {
  index,
  new: newGameNight,
  createGame,
  show
}
