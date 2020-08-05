const express = require('express');
const router = express.Router();
const {getCurrentData, getForecastData} = require('../controllers/weatherControllers');

//router.get('/:cc/:city/:type', getCityWeatherData);
router.get('/:cc/:city/current', getCurrentData);
router.get('/:cc/:city/forecast', getForecastData);

module.exports = router;
