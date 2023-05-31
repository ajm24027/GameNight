const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedin.js')

router.post(
  '/gamenights/:id/comments',
  ensureLoggedIn,
  commentsCtrl.createComment
)

module.exports = router
