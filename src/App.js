import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  addTodo = newTodoText => {
    const newTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  toggleComplete = id => {
   this.setState( {
     todos: this.state.todos.map( todo => {
       if (todo.id === id) {
         return ({
          ...todo,
           completed: !todo.completed
         });
       }
       else {
        return todo;
       }
     })
   })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter( todo => {
        return todo.completed === false;
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        </div>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} /> 
      </div>
    );
  }
}

export default App;
