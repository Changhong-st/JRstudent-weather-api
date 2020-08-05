const Weather = require('../models/WeatherModel');
const { response } = require('express');

//route handler
function getCurrentData(req, res){
    const { city, cc } = req.params;
    Weather
        //.getData(city, cc)
        .getCurrentData(city, cc)
        .then( response=> {
            //data process
            return res.json(response); //return all, should divided two route
        })
        .catch(err => {
            console.log(err);
        });
}
function getForecastData(req, res){
    const { city, cc } = req.params;
    Weather
        .getForecastData(city, cc)
        .then( response=> {
            //data process
            return res.json(response); //how to limit in 7 days
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports = { getCurrentData, getForecastData};
//getCityWeatherData