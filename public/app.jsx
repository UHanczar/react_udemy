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

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <button>Name</button>
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
      name: this.props.name
    };
  },

  handleNewName: function(name) {
    this.setState({
      name: name
    })
  },

  render() {
    const name = this.state.name;
    const message = this.props.message;

    return (
      <div className="container">
        <GreeterMessage name={name} message={message} />

        <GreeterForm onNewName={this.handleNewName} />
      </div>
    );
  }
});

ReactDOM.render(<Greeter name={anotherName} message={outerMassage} />, document.getElementById('root'));
