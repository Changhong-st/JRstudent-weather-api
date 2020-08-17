const Weather = require('../models/WeatherModel');
const { response } = require('express');

//route handler
function getCityWeatherData (req, res){
    const { city, cc, type} = req.params;
    Weather
        .getWeatherData(city, cc, type)
        .then( response=> {
            //data process
            return res.json(response);
        })
        .catch(err => {
            console.log(err);
        });
}

function getCityWeatherDataByLocation (req, res){
    const {lat, lon} = req.params;
    const latitude = Number(lat);
    const longitude = Number(lon);
    Weather
        .getWeatherDataByLocation(latitude, longitude)
        .then( response => {
            return res.json(response);
        })
        .catch(err => {
            console.log(err);
        })
}
module.exports = {getCityWeatherData, getCityWeatherDataByLocation}