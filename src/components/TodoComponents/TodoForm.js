import React from 'react';

class TodoForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      todo: '',
    }
  }

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      // <h1>No!</h1>
      <form onSubmit={this.handleSubmit} className='todo-form'>
        <input onChange={this.handleChange} value={this.state.todo} placeholder='add a todo'/>
        <button>Add</button>
        <button className='clear-btn' onClick={this.props.clearCompleted}>Clear completed</button>
      </form>
    );
  }
}

export default TodoForm;
