// import 'babel-polyfill';
// import React from 'react';
// import ReactDOM from 'react-dom';

let anotherName = 'Taya';
let outerMassage = 'FROM OUTER STRING';

const GreeterMessage = React.createClass({
  render: function() {
    const name = this.props.nameProps;
    const message = this.props.messageProps;
    const gettingHello = this.props.greet;

    return (
      <div>
        <h1>{gettingHello} {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

const GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    console.log(e);
    e.preventDefault();

    const name = this.refs.name.value;
    const message = this.refs.message.value;

    const updates = {};

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.nameInitState = name;
    }

    if(message.length > 0) {
      this.refs.message.value = '';
      updates.messageInitState = message;
    }

    this.props.onNewData(updates);
  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type='text' ref='name' placeholder='Enter name' />
        </div>

        <div>
          <textarea ref='message' placeholder='Enter message'/>
        </div>

        <div>
          <button>Name</button>
        </div>

      </form>
    );
  }
});

const Greeter = React.createClass({
  // build-in function, which return object props: this.props ; is used when no variable was passed
  getDefaultProps: function() {
    return {
      nameInitProps: 'Cary',
      messageInitProps: 'This is my first default props react function!'
    };
  },

  getInitialState: function() {
    return {
      nameInitState: this.props.nameInitProps,
      messageInitState: this.props.messageInitProps
    };
  },

  handleNewData: function(updates) {
    this.setState(updates)
  },

  render() {
    let anotherName = 'Taya';
    let outerMassage = 'FROM OUTER STRING';
    const nameFromState = this.state.nameInitState;
    const messageFromState = this.state.messageInitState;

    return (
      <div className="container">
        <GreeterMessage greet='Hello!' nameProps={nameFromState} messageProps={messageFromState} />

        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});
/// See from here
ReactDOM.render(<Greeter />, document.getElementById('root'));
