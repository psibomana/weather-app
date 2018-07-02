const yargs = require('yargs');
const axios = require('axios');

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

const key = 'AIzaSyC-MfG_CHxOxQeC7mEAPIdLm9MxUWzv6LY';

let encodedAddress = encodeURIComponent(argv.address);

let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
      throw new Error('Unable to find the address.');
    } else {
      let lat = response.data.results[0].geometry.location.lat;
      let lng = response.data.results[0].geometry.location.lng;

      console.log(response.data.results[0].formatted_address);

      // Forecase API key
      let fkey = '8ea5c62ca062d21aaf2ef3df65f70b2d';
      let furl =`https://api.darksky.net/forecast/${fkey}/${lat},${lng}`;

      return axios.get(furl);
    }
  })
  .then((response) => {
        console.log(`It is currently ${response.data.currently.temperature} and it feels like ${response.data.currently.apparentTemperature}.`)
  })
  .catch((e) => {
    if(e.code === 'ENOTFOUND'){
      console.log('Unable to connect to the server');
    } else {
      console.log(e.message);
    }
});
