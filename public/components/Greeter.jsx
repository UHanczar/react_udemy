import React from 'react';

import GreeterMessage from './GreeterMessage';
import GreeterForm from './GreeterForm';

const Greeter = React.createClass({
  // build-in function, which return object props: this.props ; is used when no variable was passed
  getDefaultProps: function() {
    return {
      // nameInitProps
      name: 'Cary',
      // messageInitProps
      message: 'This is my first default props react function!'
    };
  },

  getInitialState: function() {
    return {
      // nameInitState from nameInitProps
      name: this.props.name,
      //messageInitState from messageInitProps
      message: this.props.message
    };
  },

  handleNewData: function(updates) {
    this.setState(updates)
  },

  render() {
    // const anotherName = 'Taya';
    // const outerMassage = 'FROM OUTER STRING';
    // nameFromState from nameInitState
    const name = this.state.name;
    // messageFromState from messageInitState
    const message = this.state.message;

    return (
      <div className="container">
        {/* nameProps={nameFromState} */}
        {/* messageProps={messageFromState} */}
        <GreeterMessage name={name} message={message} />

        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

export default Greeter;
