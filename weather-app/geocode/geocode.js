const request = require('request');

var geocodeAddress = function(address, callback){
        var encodedAddress = encodeURIComponent(address);        
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },function(error, response, body){
        if(error){
            callback('Unable to connect to Google servers');
        }else if(body.status === 'ZERO_RESULTS'){
            console.log('Unable to find that address');
        }else if(body.status === 'OK'){
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);  
        }
    });
};
module.exports = {
    geocodeAddress
}