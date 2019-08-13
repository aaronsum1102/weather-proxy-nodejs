const express = require("express")
const router = express.Router()
const weatherForecaseRepository = require('../repositories/weatherForecastRepository')

router.get('/current/:city', async (req, res) => {
    const currentWeatherData = await weatherForecaseRepository.getCurrentWeatherData(req.params.city)
    res.json(currentWeatherData)
})

module.exports = router
