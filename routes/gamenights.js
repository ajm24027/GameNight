const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/gamenights')
const ensureLoggedIn = require('../config/ensureLoggedin.js')

router.get('/', gameCtrl.index)

router.get('/new', ensureLoggedIn, gameCtrl.new)

router.get('/:id', gameCtrl.show)

router.post('/', ensureLoggedIn, gameCtrl.createGame)

router.delete('/:id', ensureLoggedIn, gameCtrl.deleteGame)



module.exports = router
