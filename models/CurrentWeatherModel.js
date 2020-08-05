class CurrentWeather{
    constructor(init_data) {
        const { main, weather, wind } = init_data;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.temp_max;
        this.minFahrenheit = this.convertedFahrenheit(main.temp_min);
        this.maxFahrenheit = this.convertedFahrenheit(main.temp_max);
        this.weather = weather.main;
        this.weatherDesc = weather.description;
        this.humidity = main.humidity;
        this.windSpeed = wind.speed;
        this.windDirection = wind.deg;
    }

    convertedFahrenheit(celsius) {
        const fahrenheit = (celsius * 9) / 5 + 32;
        return Number.parseFloat(fahrenheit.toFixed(1));
    }
    convertWindDirection(deg) {
        //formula needed
    }
}

module.exports = CurrentWeather;