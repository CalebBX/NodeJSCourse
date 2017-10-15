const yargs = require('yargs');

const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
    .options({
        address:{
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    
geocode.geocodeAddress(argv.address, function(errorMessage, results){
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.lat, results.lng, function(errorMessage, weatherResults){
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${weatherResults.temperature} it feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});

