import React, { Component } from 'react';

class moreTodos extends Component {

    state = {
        name: ""
    }

    handleAdd = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state)
        this.props.addTodo(this.state)
        this.setState({name:""})//this make empty the input feild
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Todos</label>
                    <input type="text" onChange={this.handleAdd} value = {this.state.name}/>
                </form>
            </div>
        )
    }
}

export default moreTodos;