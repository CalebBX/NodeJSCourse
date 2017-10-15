const request = require('request');

var getWeather = function(lat, lng, callback){
    request({
        url: `https://api.darksky.net/forecast/1028ddecc5b06cad874786cc30cf1c8a/${lat},${lng}`,
        json: true
    }, function (error, response, body){
        if (error) {
            callback('Unable to reach Darksky servers');
        } else if(response.statusCode === 400){
            callback('Unable to fetch weather');
        } else if(response.statusCode === 200){
            callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
            })
        }
    });
};
module.exports = {
    getWeather
}