import React from 'react';

const WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' placeholder='Enter city name' ref='location'/>
        <button className='button expanded hollow'>Get weather</button>
      </form>
    );
  }
});

export default WeatherForm;
