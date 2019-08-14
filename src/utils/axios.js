const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  // method: 'get', // default
  // timeout: 1000,
  params: {
    APPID: process.env.APPID,
  }
});

module.exports = instance;
