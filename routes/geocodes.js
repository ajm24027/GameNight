const express = require('express')
const router = express.Router()
const geoCodeCtrl = require('../controllers/geocodes')
const ensureLoggedIn = require('../config/ensureLoggedin.js')

router.post('/gamenights/:id/geocode', geoCodeCtrl.newGeoCode)

module.exports = router
