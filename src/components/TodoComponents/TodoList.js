// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='todo-list'>
        {this.props.todos.map( (todo, index) => (
          <Todo key={index} todo={todo} toggleComplete={this.props.toggleComplete}/>
        ))}
      </div>
    );
  }
}

export default TodoList;
