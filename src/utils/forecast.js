const request = require('request')

const forecast = (latitude, longitude, callback) => {    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4f230c703a6ac3a618e621e898898462`
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, body.weather[0].description + ' It is currently ' + body.main.temp + ' out. There is a ' + body.main.humidity + ' humidity.')
        }
    })
}

module.exports = forecast