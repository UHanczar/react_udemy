import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import getTemp from './../api/openWeatherMap';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 35
    };
  },
  handleSearch: function (location) {
    getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp
      });
    }, (errorMessage) => {
      console.info(errorMessage);
    });
  },
  render: function() {
    const {temp, location} = this.state;

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage temp={temp} location={location} />
      </div>

    );
  }
});

export default Weather;
