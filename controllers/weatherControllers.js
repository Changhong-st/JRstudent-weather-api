const Weather = require('../models/WeatherModel');
const { response } = require('express');

//route handler
module.exports = function (req, res){
    const { city, cc, type, cnt } = req.params;
    Weather
        .getWeatherData(city, cc, type, cnt)
        .then( response=> {
            //data process
            return res.json(response);
        })
        .catch(err => {
            console.log(err);
        });
}
//getCityWeatherData