const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    params: {
        appid: '38005f91a8e6a3ddb61bdc5df3090b2c',
        units: 'metric' //公制单位
    }
  });

module.exports = instance;

