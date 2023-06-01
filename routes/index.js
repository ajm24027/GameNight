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
    headerImg: '/images/headers/header-home-c.png',
    heroHead: 'GO FROM LFG TO GG!',
    heroSub:
      'Unite gamers, conquer scheduling nightmares. Effortlessly coordinate, connect, and embark on epic gaming adventures. Let the games begin!'
  })
})

module.exports = router
