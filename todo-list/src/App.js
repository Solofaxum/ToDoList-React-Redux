import React, { Component } from 'react';
import Todos from './todos';
import AddList from './myForm';


class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Solomon'},
      {id: 2, name: 'Teshome'},
      {id: 3, name : 'Paulos'}
    ]
  }
  deleteTodo = (id) => {
   // console.log(id)
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos:todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
     <AddList addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;