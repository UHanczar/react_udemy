import React from 'react';

const WeatherMessage = ({temp, location}) => {
  {/* instead of defining variables here we can define then right in an object like in this module: instead of props we write vars names
  const {temp, location} = props;
  */}

  return (
    <h3 className='text-center'>It is {temp} degree in {location}.</h3>
  );
};

export default WeatherMessage;
