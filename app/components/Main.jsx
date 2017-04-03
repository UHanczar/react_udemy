import React from 'react';

import Nav from './Nav';

const Main = React. createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <h2>Main component</h2>
        {this.props.children}
      </div>
    );
  }
});

export default Main;
