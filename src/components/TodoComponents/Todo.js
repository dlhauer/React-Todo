import React from 'react';
import './Todo.css';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {...this.props.todo}
    }
  }
  toggleCompleted = () => {
    this.setState({
      todo: {
        task: this.state.todo.task,
        id: this.state.todo.id,
        completed: !this.state.todo.completed
      }
    })
  }

  render() {
    return (
      <div onClick={this.toggleCompleted} className={`todo${this.state.todo.completed ? ' completed' : ''}`}>
        <p>{this.props.todo.task}</p>
      </div>
    );
  }
}

export default Todo;
