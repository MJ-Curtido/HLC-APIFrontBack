const request = require("request");
const fs = require("fs");
const apisList = fs.readFileSync("./APIsKeys.json");
const keyWS = JSON.parse(apisList).WeatherStack;

const weatherstack = (locality, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    keyWS +
    "&query=" +
    locality;

  axios
    .get(url)
    .then(function (response) {
      callback(undefined, {
        observation_time: response.current.observation_time,
        temperature: response.current.temperature,
        weather_descriptions: response.current.weather_descriptions,
        humidity: response.current.humidity,
        cloudcover: response.current.cloudcover,
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      callback("Unabled to find location. Try another search.", undefined);
    });
};

module.exports = weatherstack;
