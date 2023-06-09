const express = require('express')
const router = express.Router()
const profilesCtrl = require('../controllers/profiles.js')
const ensureLoggedIn = require('../config/ensureLoggedin.js')

router.get('/', ensureLoggedIn, profilesCtrl.index)

module.exports = router
