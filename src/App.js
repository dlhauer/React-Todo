import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: 'Call wife',
    id: 555,
    completed: false,
  },
  {
    task: 'Call girlfriend',
    id: 556,
    completed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }

  addTodo = newTodoText => {
    const newTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todos: [...todos, newTodo]
    });
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
