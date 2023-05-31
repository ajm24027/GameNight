const GameNight = require('../models/gamenight')
const axios = require('axios')

const newGeoCode = async (req, res) => {
  const address = req.body.address
  const apiKey = process.env.GEOCODE_KEY

  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${apiKey}`
    )

    if (response.status === 200) {
      const data = response.data
      const coordinates = data.features[0].center
      console.log(address)
      console.log(coordinates)
      const gamenight = await GameNight.findById(req.params.id)
      gamenight.address.push(coordinates)
      console.log(gamenight)

      try {
        await gamenight.save()
      } catch (err) {
        console.log(err)
      }

      res.redirect(`/gamenights/${gamenight._id}`)
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Geocoding request failed')
  }
}

module.exports = {
  newGeoCode
}
