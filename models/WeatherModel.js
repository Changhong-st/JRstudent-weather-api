const City = require('./CityModel');
const CurrentWeather = require('./CurrentWeatherModel');
const ForecastWeather = require('./ForecastWeatherModel');
const axios = require('../services/axios');
//const { delete } = require('../routes/weatherRoute');


class Weather{
    constructor(){}
    getWeatherData(city, cc, type, cnt = 7){
        return Promise.all(this.getOpenWeatherData(city, cc, type, cnt)).then((res) => {
            let currentWeatherData = res[0].data;
            let forecastWeatherData = res[1].data;
            const weather = {
                city: new City(forecastWeatherData.city),
                // current: new CurrentWeather(currentWeatherData),
                // forecast: forecastWeatherData.list.map(i => new ForecastWeather(i))
        };
        if (type === 'current'){  //model不做判断?
            Object.assign(weather, {current: new CurrentWeather(currentWeatherData)});
            return weather;
        }
        if (type === 'forecast'){
            Object.assign(weather, {forecast: forecastWeatherData.list.map(i => new ForecastWeather(i))});
            return weather;
        }
        return weather;
        })
        //dotenv
    }

    getOpenWeatherData(city, cc, type, cnt){  
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
                    cnt: cnt
                }
            })]
    };
}

module.exports = new Weather();
