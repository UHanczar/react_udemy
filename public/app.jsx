// import 'babel-polyfill';
// import React from 'react';
// import ReactDOM from 'react-dom';

let anotherName = 'Taya';
let outerMassage = 'FROM OUTER STRING';

const GreeterMessage = React.createClass({
  render: function() {
    const name = this.props.name;
    const message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

const GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    const name = this.refs.name.value;
    const message = this.refs.message.value;

    const updates = {};

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
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
      name: 'Mary',
      message: 'This is my first default props react function!'
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewData: function(updates) {
    this.setState(updates)
  },

  render() {
    const name = this.state.name;
    const message = this.state.message;

    return (
      <div className="container">
        <GreeterMessage name={name} message={message} />

        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

ReactDOM.render(<Greeter />, document.getElementById('root'));
