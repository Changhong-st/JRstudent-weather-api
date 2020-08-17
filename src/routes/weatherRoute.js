const express = require('express');
const router = express.Router();
const {getCityWeatherData, getCityWeatherDataByLocation} = require('../controllers/weatherControllers');

//router.get('/:cc/:city/:type, getCityWeatherData);
//router.get('/:cc/:city/current', getCityWeatherData);
router.get('/location/:lat/:lon', getCityWeatherDataByLocation);
// router.get('/:cc/:city/:type/:cnt', getCityWeatherData); //小瑕疵
router.get('/:cc/:city/:type', getCityWeatherData); 
//http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&appid=864eadc0aaaab505b46c26f231ae8840
module.exports = router;
