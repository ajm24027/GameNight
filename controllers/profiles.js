const GameNight = require('../models/gamenight')
const User = require('../models/user')

const index = async (req, res) => {
  const profile = await User.findById(res.locals.user._id).populate('myGames')
  console.log(profile)
  res.render('profiles/index', {
    title: `${profile.name}'s - GameNight Profile`,
    profile
  })
}

module.exports = {
  index
}
