import React, { Component } from 'react';
import Todos from './todos'


class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Solomon'},
      {id: 2, name: 'Teshome'},
      {id: 3, name : 'Paulos'}
    ]
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;