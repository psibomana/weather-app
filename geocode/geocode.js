const request = require('request');
const key = 'AIzaSyC-MfG_CHxOxQeC7mEAPIdLm9MxUWzv6LY';

let geocodeAddress = (address, callback) => {

  let encodedAddress = encodeURIComponent(address);

  // Address: Andela Kenya
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
    json: true
  }, (error, response, body) => {
      if(error){
        callback('Unable to connect to Google Servers');
      } else if(body.status ==='ZERO_RESULTS') {
        callback('Unable to find the address.');
      } else if(body.status === 'OK') {
        // console.log(JSON.stringify(body, undefined, 3));
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      } else {
        callback('An error occured, please try again later.');
      }
  });
};

module.exports = {
  geocodeAddress
}
