import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    };
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
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
