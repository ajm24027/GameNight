const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/gamenights',
    failureRedirect: '/'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'GameNight | The Stress-Free Way to Plan and Play',
    headerBack: 'header-home.jpg',
    headerText: 'FROM LFG TO GG IN NO TIME.',
    headerSubText:
      'No more wasted weeks, last-minute reschedules! Embark on epic hijinks, forge legendary friendships. Say goodbye to tedious texts and calls. Get the tools to make sure your party is ready to roll!',
    headerAction: 'Sign Up'
  })
})

module.exports = router
