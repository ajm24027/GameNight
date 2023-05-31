const express = require('express')
const router = express.Router()
const signUpCtrl = require('../controllers/signups')
const ensureLoggedIn = require('../config/ensureLoggedin.js')

router.post('/gamenights/:id/signups', ensureLoggedIn, signUpCtrl.add)

module.exports = router
