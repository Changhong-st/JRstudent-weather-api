const City = require('./CityModel');
const CurrentWeather = require('./CurrentWeatherModel');
const ForecastWeather = require('./ForecastWeatherModel');
const LocationWeather = require('./LocationModel');
const axios = require('../services/axios');
//const { delete } = require('../routes/weatherRoute');


class Weather{
    constructor(){}

    getWeatherData(city, cc, type){
        return Promise.all(this.getOpenWeatherData(city, cc)).then((res) => {
            let currentWeatherData = res[0].data;
            let forecastWeatherData = res[1].data;
            const weather = {
                city: new City(forecastWeatherData.city),
                // current: new CurrentWeather(currentWeatherData),
                // forecast: forecastWeatherData.list.map(i => new ForecastWeather(i))
        };
        if (type === 'current'){  
            Object.assign(weather, {current: new CurrentWeather(currentWeatherData)});
            return weather;
        }
        if (type === 'forecast'){
            const rawForecast = forecastWeatherData.list.map(i => new ForecastWeather(i));
            const filteredForecast = this.filterForecast(rawForecast);
            Object.assign(weather, {forecast: filteredForecast});
            // Object.assign(weather, {forecast: forecastWeatherData.list.map(i => new ForecastWeather(i))});
            return weather;
        } 
        return weather;
        })
    }

    filterForecast(rawForecast){
        let filteredForecast = [];
            rawForecast.forEach((item, index) => {
                if ((index+1) % 8 === 0) {
                    filteredForecast.push(item);
                }
            });
            return filteredForecast;
    };

    getWeatherDataByLocation(latitude, longitude){
        return axios.get('/weather', { 
            //http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=864eadc0aaaab505b46c26f231ae8840
                    params: {
                        lat: latitude,
                        lon: longitude,
                    }
                }).then((res) => {
                    let locationWeatherData = res.data;
                    const weather = {position: new LocationWeather(locationWeatherData)}
                    return weather;
                })
    };

    getOpenWeatherData(city, cc){  
        const paramStr = `${city}, ${cc}`;
        return [
            axios.get('/weather', { 
        //'/data/2.5/weather?appid=38005f91a8e6a3ddb61bdc5df3090b2c&units=metric&q=brisbane, au'
                params: {
                    q: paramStr,
                }
         }),
            axios.get('/forecast', {
            //'/data/2.5/forecast?appid=38005f91a8e6a3ddb61bdc5df3090b2c&units=metric&q=brisbane, au'
                params: {
                    q: paramStr,
                }
            }),
        ]
    };
}

module.exports = new Weather();
