var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'GameNight | The Stress-Free Way to Plan and Play',
    headerBack: 'header-home.jpg',
    headerText: 'FROM LFG TO NEW FRIENDS IN NO TIME.',
    headerSubText:
      'No more wasted weeks, last-minute reschedules! Embark on epic hijinks, forge legendary friendships. Say goodbye to tedious texts and calls. Get the tools to make sure your party is ready to roll!',
      headerAction: 'Sign Up'
  })
})

module.exports = router
