const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to be fetched from the application',
      string: true,
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


geocode.geocodeAddress(argv.a)
  .then((results) => {
    // console.log(JSON.stringify(results, undefined, 3));
    forecast.getWeather(results.latitude, results.longitude)
      .then((weatherResult) => {
          // console.log(JSON.stringify(weatherResult, undefined, 3));
          console.log(`It is currently ${weatherResult.temperature} and it feels like ${weatherResult.apparentTemperature}.`)
      })
      .catch((msg) => {
          console.log(msg)
      });
  })
  .catch((errorMsg) => {
      console.log(errorMsg)
  });
