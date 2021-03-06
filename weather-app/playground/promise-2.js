const request = require('request');


var geocodeAddress = function(address){
    return new Promise(function(resolve, reject){
        var encodedAddress = encodeURIComponent(address);        
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        },function(error, response, body){
            if(error){
                reject('Unable to connect to Google servers');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address');
            }else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('99328').then(function(location){
    console.log(JSON.stringify(location, undefined, 2));
}, function(errorMessage){
    console.log(errorMessage);
});