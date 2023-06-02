const GameNight = require('../models/gamenight')
const User = require('../models/user')

const index = async (req, res) => {
  const profile = await User.findById(res.locals.user._id).populate('myGames')
  console.log(profile)
  res.render('profiles/index', {
    title: `${profile.name}'s - GameNight Profile`,
    profile,
    headerImg: '/images/headers/header-profile.jpg',
    heroHead: 'POWER YOUR PLAYTIME',
    heroSub: 'View, Track, and Manage all your favorite GameNights'
  })
}

module.exports = {
  index
}
