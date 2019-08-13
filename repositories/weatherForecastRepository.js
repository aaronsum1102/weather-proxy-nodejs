const axios = require('axios')

module.exports = {
    getCurrentWeatherData: async function (cityName) {
        const url = `${process.env.BASE_URL}/weather?appid=${process.env.API_KEY}&q=${cityName}&units=${process.env.UNITS}`
        const response = await axios.get(url)
        return response.data
    }
}