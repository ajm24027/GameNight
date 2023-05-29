const express = require('express')
const router = express.Router()

const signUpCtrl = require('../controllers/signups')

router.post('/gamenights/:id/signups', signUpCtrl.add)

module.exports = router
