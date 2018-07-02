const request = require('request');
const key = 'AIzaSyC-MfG_CHxOxQeC7mEAPIdLm9MxUWzv6LY';

let geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {

    let encodedAddress = encodeURIComponent(address);

    // Address: Andela Kenya
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
      json: true
    }, (error, response, body) => {
        if(error){
          reject('Unable to connect to Google Servers');
        } else if(body.status ==='ZERO_RESULTS') {
          reject('Unable to find the address.');
        } else if(body.status === 'OK') {
          // console.log(JSON.stringify(body, undefined, 3));
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        } else {
          reject('An error occured, please try again later.');
        }
    });
  });
};

module.exports = {
  geocodeAddress
}
