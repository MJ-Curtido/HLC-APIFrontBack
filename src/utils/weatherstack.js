const axios = require("axios");
const fs = require("fs");
const apisList = fs.readFileSync("./APIsKeys.json");
const keyWS = JSON.parse(apisList).WeatherStack;

const weatherstack = (locality, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${keyWS}&query=${locality}`;

  axios
    .get(url)
    .then(function (response) {
      if (!response.data.hasOwnProperty("success")) {
        callback(undefined, {
          observation_time: response.data.current.observation_time,
          temperature: response.data.current.temperature,
          weather_descriptions: response.data.current.weather_descriptions,
          humidity: response.data.current.humidity,
          cloudcover: response.data.current.cloudcover,
        });
      }
      else {
        callback("Your enter locality doesn't exist.", undefined)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = weatherstack;
