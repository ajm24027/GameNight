const express = require('express')
const router = express.Router()

const gameCtrl = require('../controllers/gamenights')

router.get('/', gameCtrl.index)

router.get('/new', gameCtrl.new)

router.get('/:id', gameCtrl.show)

router.post('/', gameCtrl.createGame)

module.exports = router
