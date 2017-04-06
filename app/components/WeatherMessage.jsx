import React from 'react';

const WeatherMessage = ({temp, location}) => {
  {/* instead of defining variables here we can define then right in an object like in this module: instead of props we write vars names
  const {temp, location} = props;
  */}

  return (
    <div>It is {temp} degree in {location}.</div>
  );
};

export default WeatherMessage;
