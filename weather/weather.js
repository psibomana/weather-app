const request = require('request');

// Forecase API key
let key = '8ea5c62ca062d21aaf2ef3df65f70b2d';

let getWeather = (lat, lng) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      // Address: Andela Kenya
      request({
        // Forecast API (https://api.darksky.net/forecast/key/lat,lng)
        url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
        json: true
      }, (error, response, body) => {
        if(error){
          reject('Unable to process the request');
        } else if (response.statusCode === 400){
          reject(body.error);
        } else if (response.statusCode === 200){
          resolve({
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          });
        } else {
          reject('Unable to fetch weather')
        }
      });
    });
  }, 2500);
};

module.exports = {
  getWeather
}
