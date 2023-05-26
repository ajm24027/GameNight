const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    player: {
      type: Schema.Types.ObjectId,
      ref: 'Player',
      required: true
    },
    displayName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Gamenight', gameNightSchema)
