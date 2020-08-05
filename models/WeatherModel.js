const City = require('./CityModel');
const CurrentWeather = require('./CurrentWeatherModel');
const ForecastWeather = require('./ForecastWeatherModel');
const axios = require('../services/axios');


class Weather{
    constructor(){}
    getData(city, cc){
        return Promise.all(this.getOpenWeatherData(city, cc)).then((res) => {
            let currentWeatherData = res[0].data;
            let forecastWeatherData = res[1].data;
            const weather = {
                city: new City(forecastWeatherData.city),
                current: new CurrentWeather(currentWeatherData),
                forecast: forecastWeatherData.list.map(i => new ForecastWeather(i))
        };
        return weather;
        })
        //dotenv

        // return this.getOpenWeatherData(city, cc).then(
        //     (response) => {
        //         let data = response.data;
        //         return data;
        //     }
        // ) 
    }
    getCurrentData(){
        const weather = this.getData(city, cc);
        delete weather.forecast;
        return weather;

    }
    getForecastData(){
        const weather = this.getData(city, cc);
        delete weather.current;
        return weather;
    }
    
    getOpenWeatherData(city, cc){ 
        const paramStr = `${city}, ${cc}`;
        return [
            axios.get('/weather', {
            params: {
                q: paramStr
            }
         }),
            axios.get('/forecast', {
                params: {
                    q: paramStr
                }
            })]
    };
}

module.exports = new Weather();