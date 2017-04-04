import React from 'react';

const About = React.createClass({
  render: function() {
    return (
      <h3>About component</h3>
    );
  }
});

{/* we can do ctateless (presentational) components like this too
const About = (props) => {
  return (
    <h3>About component</h3>
  );
};
*/}

export default About;
