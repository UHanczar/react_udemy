import React from 'react';

const GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    console.log(e);
    e.preventDefault();

    const name = this.refs.name.value;
    const message = this.refs.message.value;

    const updates = {};

    if (name.length > 0) {
      this.refs.name.value = '';
      // updates nameInitState
      updates.name = name;
    }

    if(message.length > 0) {
      this.refs.message.value = '';
      // updates messageInitState
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
          <textarea ref='message' placeholder='Enter message' />
        </div>

        <div>
          <button>Name</button>
        </div>

      </form>
    );
  }
});

export default GreeterForm;
