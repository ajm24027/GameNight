const GameNight = require('../models/gamenight')
const axios = require('axios')

const newGeoCode = async (req, res) => {
  const address = req.body.address
  const apiKey = process.env.GEOCODE_KEY

  try {
    const response = await axios.get(
      // https://docs.mapbox.com/api/search/geocoding/ "The search text should be expressed as a URL-encoded UTF-8 string, and must not contain the semicolon character (either raw or URL-encoded). Your search text, once decoded, must consist of at most 20 words and numbers separated by spacing and punctuation, and at most 256 characters."
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
