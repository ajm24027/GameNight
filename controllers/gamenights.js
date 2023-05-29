const GameNight = require('../models/gamenight')

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
  const newGame = new GameNight()
  res.render('gamenights/new', {
    title: 'GameNight - Creation',
    errorMsg: ''
  })
}

// const createGame = async (req, res) => {
//   req.body.owner = {
//     user: res.locals.user._id,
//     userName: res.locals.user.name,
//     userAvatar: res.locals.user.avatar
//   }
//   const newGameNight = new GameNight(req.body)
//   try {
//     await newGameNight.save()
//   } catch (err) {
//     console.log(err)
//   }

//   res.redirect('/gamenights')
// }

const createGame = async (req, res) => {
  req.body.owner = res.locals.user
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
  res.render('gamenights/show', {
    title: `${gamenight.eventName} - GameNights`,
    gamenight
  })
}

module.exports = {
  index,
  new: newGameNight,
  createGame,
  show
}
