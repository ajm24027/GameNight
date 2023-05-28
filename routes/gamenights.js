const express = require('express')
const router = express.Router()

const gameCtrl = require('../controllers/gamenights')

router.get('/', gameCtrl.index)

module.exports = router
