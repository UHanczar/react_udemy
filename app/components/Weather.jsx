import 'style-loader!css-loader!sass-loader!../styles/app.scss';

import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
import getTemp from './../api/openWeatherMap';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  componentDidMount() {
    const location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps(newProps) {
    const location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  handleSearch: function (location) {

    this.setState({
      isLoading: true,
      erroMessage: undefined,
      location: undefined,
      temp: undefined
    });

    getTemp(location).then((temp) => {
      this.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, (e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    const {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        { renderMessage() }
        { renderError() }
      </div>

    );
  }
});

export default Weather;
