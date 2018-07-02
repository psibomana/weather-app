const request = require('request');

// Forecase API key
let key = '8ea5c62ca062d21aaf2ef3df65f70b2d';

let getWeather = (lat, lng, callback) => {

  // Address: Andela Kenya
  request({
    // Forecast API (https://api.darksky.net/forecast/key/lat,lng)
    url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to process the request');
    } else if (response.statusCode === 400){
      callback(body.error);
    } else if (response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather')
    }
  });
};

module.exports = {
  getWeather
}
