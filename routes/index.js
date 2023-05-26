var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'GameNight | The Stress-Free Way to Plan and Play',
    headerText: 'Picture this:',
    headerSubText:
      'chilling with pals, planning a Dungeons and Dragons session. Excitement builds as the date approaches, but scheduling conflicts arise. Fear not, for GameNight is here to save the day! Bid farewell to rescheduling madness with our event management brilliance. Say goodbye to chaos and hello to uninterrupted gaming bliss. Let the games begin!'
  })
})

module.exports = router
