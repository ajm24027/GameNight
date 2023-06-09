const GameNight = require('../models/gamenight')
const User = require('../models/user')
const Comment = require('../models/comment')

const index = async (req, res) => {
  const gamenights = await GameNight.find({})
  res.render('gamenights/index', {
    title: 'GameNights - Explore',
    heroHead: 'EMBARK ON AN ADVENTURE',
    heroSub: 'to find the perfect GameNight for you.',
    headerImg: '/images/headers/header-explore.jpg',
    gamenights
  })
}

const newGameNight = (req, res) => {
  res.render('gamenights/new', {
    title: 'GameNight - Creation',
    errorMsg: '',
    headerImg: '/images/headers/header-create.jpg',
    heroHead: 'CREATE. HOST. CONQUER.',
    heroSub: 'Orchestrate an unforgettable GameNight.'
  })
}

const createGame = async (req, res) => {
  req.body.owner = res.locals.user
  const newGameNight = new GameNight(req.body)
  newGameNight.gametype = req.body.gametype

  try {
    await newGameNight.save()
    const user = await User.findById(req.body.owner._id)
    user.myGames.push(newGameNight._id)
    await user.save()
  } catch (err) {
    console.log(err)
  }

  res.redirect('/gamenights')
}

const show = async (req, res) => {
  const gamenight = await GameNight.findById(req.params.id)
  const comments = await Comment.find({ game: req.params.id })
  console.log(comments)
  await res.render('gamenights/show', {
    geoApi: process.env.GEOCODE_KEY,
    title: `${gamenight.eventName} - GameNights`,
    headerImg: `/images/card/${gamenight.gameType}.jpg`,
    heroHead: `${gamenight.eventName} - GameNights`,
    heroSub: `${gamenight.eventName} - GameNights`,
    gamenight,
    comments
  })
}

// Take a note of this puppy VV

const deleteGame = async (req, res) => {
  try {
    // Delete Comments that have the game: req.params.id from our show page.
    await Comment.deleteMany({ game: req.params.id })
    // Delete game from GameNight collection
    await GameNight.findByIdAndDelete(req.params.id)
    // Find the user that matches with the session user._id
    const user = await User.findById(res.locals.user._id)
    // Target user.myGames and make a shallow copy with .filter()
    user.myGames = user.myGames.filter(
      // The filter here, takes the objectIds in the myGames array, and turns them into
      // strings that are compared to req.params.id (the id passed when we press the delete
      // button). Those strings that DO NOT match the req.params.id are kept.
      (gameId) => gameId.toString() !== req.params.id
    )
    // Once the filter is complete, we save the user in its current state (with one less
    // game inside of it)
    await user.save()
    // Redirect to profiles page for user to confirm that the change occured.

    res.redirect('/profiles')
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  index,
  new: newGameNight,
  createGame,
  show,
  deleteGame
}
