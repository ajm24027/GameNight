const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User.name',
      required: true
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

const gameNightSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDescription: {
    type: String,
    required: true
  },
  owner: {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  },
  gameType: {
    type: String,
    default: 'Hangout'
  },
  active: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
    required: true
  },
  players: {
    type: Array,
    default: []
  },
  comments: [commentSchema]
})

module.exports = mongoose.model('GameNight', gameNightSchema)
