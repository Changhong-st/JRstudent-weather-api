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
        this.windDirection = this.convertWindDirection(wind.deg);
    }

    convertedFahrenheit(celsius) {
        const fahrenheit = (celsius * 9) / 5 + 32;
        return Number.parseFloat(fahrenheit.toFixed(1));
    }
    convertWindDirection(deg) {
        //formula needed
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const value = Math.floor((degree + 22.5) / 45);
        return directions[value % 8];
    }
}

module.exports = CurrentWeather;