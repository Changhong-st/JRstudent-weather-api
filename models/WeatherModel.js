const City = require('./CityModel');
const CurrentWeather = require('./CurrentWeatherModel');
const ForecastWeather = require('./ForecastWeatherModel');
const axios = require('../services/axios');
//const { delete } = require('../routes/weatherRoute');


class Weather{
    constructor(){}
    getCurrentData(city, cc, type){
        return Promise.all(this.getOpenWeatherData(city, cc)).then((res) => {
            let currentWeatherData = res[0].data;
            let forecastWeatherData = res[1].data;
            const weather = {
                city: new City(forecastWeatherData.city),  //方法一： if else 传入type判断 ，remove相应的type
                current: new CurrentWeather(currentWeatherData), //方法二： 只保留City，根据type注入
                forecast: forecastWeatherData.list.map(i => new ForecastWeather(i))
        };
        delete weather.forecast
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

    getForecastData(city, cc, cnt = 7){
        return Promise.all(this.getOpenWeatherData(city, cc, cnt)).then((res) => {
            let currentWeatherData = res[0].data;
            let forecastWeatherData = res[1].data;
            const weather = {
                city: new City(forecastWeatherData.city),
                //current: new CurrentWeather(currentWeatherData),
                forecast: forecastWeatherData.list.map(i => new ForecastWeather(i))
        };
        //weather.remove(current);
        return weather;
        })
        //dotenv
    }

    // getCurrentData(city, cc){
    //     const weather = this.getData(city, cc);
    //     delete
    //     weather.remove(forecast);
    //     return weather;
    // }
    // getForecastData(city, cc){
    //     const weather = this.getData(city, cc);
    //     weather.remove(forecast);
    //     return weather;
    // }
    getOpenWeatherData(city, cc, cnt){  
        const paramStr = `${city}, ${cc}`;
        return [
            axios.get('/weather', {
            params: {
                q: paramStr
            }
         }),
            axios.get('/forecast', {
                params: {
                    q: paramStr,
                    cnt: cnt
                }
            })]
    };
}

module.exports = new Weather();

//第一步想到要传一个cnt给route，首先想要怎么拿？
//从params拿，先去route改 -> /:con
//去controlller， 传值给model
//model里handle这个数值