const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema(
  {
    displayName: {
      type: String,
      required: true
    },
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,
    Address: String,
    gameNights: [{ type: Schema.Types.ObjectId, ref: 'Gamenight' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Player', playerSchema)
