import React from 'react';

class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>{this.props.todo.task}</p>
    );
  }
}

export default Todo;
