const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    params: {
        appid: process.env.APPID,
        units: "metric" //公制单位
    }
  });

module.exports = instance;

