const GameNight = require('../models/gamenight')
const Comment = require('../models/comment')


const createComment = async (req, res) => {
  console.log(req.params.id)
  req.body.game = req.params.id
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  const comment = await Comment.create(req.body)
  console.log(comment)
  const gameNight = await GameNight.findById(req.params.id)

  console.log(gameNight)
  gameNight.comments.push(comment._id)
  try {
    await comment.save()
    await gameNight.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/gamenights/${gameNight._id}`)
}

module.exports = {
  createComment
}
