import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Foundation from 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
import $ from 'jquery';

import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

// See from here
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About} />
      <Route path='examples' component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>
  , document.getElementById('root'));
