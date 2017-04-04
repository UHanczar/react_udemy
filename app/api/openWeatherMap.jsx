import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=10398681c88c43794ad6ed5b9366ca29&units=metric';

// b1a4a8642f0925eafc06d6227f95c727

const getTemp = (location) => {
  const encodedLocation = encodeURIComponent(location);
  const requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestURL).then((response) => {
    if (response.data.cod && response.data.message) {
      throw new Error(response.data.message);
    } else {
      return response.data.main.temp;
    }

  }, (response) => {
    throw new Error(response.data.message);
  });
};

export default getTemp;
