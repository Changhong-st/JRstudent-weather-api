const CurrentWeather = require('./CurrentWeatherModel');

class LocationWeather extends CurrentWeather {
    constructor(init_data) {
        super(init_data);
        this.name = init_data.name;
        this.country = init_data.sys.country;
    }
}

module.exports = LocationWeather;