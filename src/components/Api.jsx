import React, { Component } from "react";

class FetchExample extends Component {
  state = { todos: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ todos: data });
      });
  }

  _renderTodos() {
    const { todos } = this.state;
    return todos.map((todo) => (
      <div key={todo.id}>
        <h4>Title: {todo.title}</h4>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h4>TODO List</h4>
        {this._renderTodos()}
      </div>
    );
  }
}

export default FetchExample;
