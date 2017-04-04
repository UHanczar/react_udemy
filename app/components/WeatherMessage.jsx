import React from 'react';

const WeatherMessage = (props) => {
  const {temp, location} = props;

  return (
    <div>It is {temp} degree in {location}.</div>
  );
};

export default WeatherMessage;
