const axios = require('../utils/axios')


class Weather {
  constructor() {}

  getData(city, cc) {
    const dataPromise = new Promise((resolve, reject) => {
      resolve( getCurrentData(city, cc));
    })
      // .then(result => {
      //   console.log(result);
      //   this.dataPromie = result;
      //   }
      // )
      // .catch(err => console.log(err));
    return dataPromise;
  }

}

module.exports = new Weather();

function getCurrentData(city, cc) {
  // console.log({cc, city});
  const query = `${city},${cc}`;
  console.log(`From getCurrentData: ${query}`);
  // const result = axios.get('/weather', {params: {q: query, APPID: process.env.APPKey}})
  const result = axios.get('/weather', {params: {q: query}})
    // .then(function (response) {
    //   console.log(response);
    // });
  // console.log(`axios result: ${result}`)
  return result
};

function getForecastData() {
  const query = `${city},${cc}`;
  const result = axios.get('/weather', {params: {q: query}});
  return result;
}
