const express = require('express');
const router = express.Router();
const getCityWeatherData = require('../controllers/weatherControllers');

//router.get('/:cc/:city/:type, getCityWeatherData);
//router.get('/:cc/:city/current', getCityWeatherData);
router.get('/:cc/:city/:type/:cnt', getCityWeatherData); //小瑕疵
router.get('/:cc/:city/:type', getCityWeatherData); 

module.exports = router;
