import React from 'react';

{/* we can do ctateless (presentational) components like this too*/}
const About = (props) => (
  <div>
    <h1 className='text-center page-title'>About</h1>
    <p>This is weather application built on React. I have built it for complete react web developers course. Here is some of the tools I have used:</p>
    <ul>
      <li>
        <a href='https://facebook.github.io/react/' target='_blank'>
          React
        </a> - this was the JavaScript framework used
      </li>
      <li>
        <a href='http://openweathermap.org/' target='_blank'>
          Open Weather Map
        </a> - Open Weather Map I used to search for weather data by city name.
      </li>
    </ul>
  </div>
);

export default About;
