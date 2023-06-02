const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameNightSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true
    },
    eventDescription: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    gameType: {
      type: String,
      default: ''
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
      type: Array,
      default: []
    },
    coordinates: {
      type: Array,
      default: []
    },
    players: {
      type: Array,
      default: []
    },
    comments: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('GameNight', gameNightSchema)
