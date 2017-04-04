import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Navigation component</h2>
        <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>GetWeather</IndexLink>
        <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

export default Nav;