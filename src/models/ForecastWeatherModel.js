const CurrentWeather = require('./CurrentWeatherModel');

class ForecastWeather extends CurrentWeather {
    constructor(init_data) {
        super(init_data);
        this.time = init_data.dt_txt;
    }
}

module.exports = ForecastWeather;