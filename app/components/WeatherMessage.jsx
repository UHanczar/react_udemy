import React from 'react';

const WeatherMessage = React.createClass({
  render: function() {
    const {temp, location} = this.props;

    return (
      <div>It is {temp} degree in {location}.</div>
    );
  }
});

export default WeatherMessage;
