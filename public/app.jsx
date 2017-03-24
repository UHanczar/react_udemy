// import 'babel-polyfill';
// import React from 'react';
// import ReactDOM from 'react-dom';

let anotherName = 'Taya';
let outerMassage = 'FROM OUTER STRING';

const Greeter = React.createClass({
  // build-in function, which return object props: this.props ; is used when no variable was passed
  getDefaultProps: function() {
    return {
      name: 'Mary',
      message: 'This is my first default props react function!'
    };
  },

  onButtonClick: function(e) {
    e.preventDefault();
    const name = this.refs.name.value;

    alert(name);
  },

  render() {
    const name = this.props.name;
    const message = this.props.message;

    return (
      <div className="container">
        <h1>Hello, {name}</h1>
        {/*we can use variable or props */}
        <p>{`${this.props.message}!!`}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Name</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<Greeter name={anotherName} message={outerMassage} />, document.getElementById('root'));
