import React, { Component } from "react";

class TodoList extends Component {
  state = {
    todos: [],
    currentPage: 1,
    todosPerPage: 5,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ todos: data });
      });
  }

  _renderTodos() {
    const { todos, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    return currentTodos.map((todo) => (
      <div key={todo.id}>
        <h4>Title: {todo.title}</h4>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      </div>
    ));
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <h4>TODO List</h4>
        {this._renderTodos()}
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  onClick={() => this.handlePageChange(number)}
                  className={`page-link ${
                    number === currentPage ? "active" : ""
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default TodoList;

import Menu from "../components/Menu";
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";

export default function LMain({ children }) {
    const {Tema} = useContext(ModeContext)
    return (
        <div
         className={Tema} 
        style={{
           height: "20000px",
         }}
        >

            {/* <nav style={{
                marginBottom: 20,
                display: 'flex',
                justifyContent: 'space-between'
            }}> */}
                 <Menu />
          
                 
                {/* <input
                    type="radio"
                    name="theme"
                    id="light-context"
                    onClick={handleTema}
                    value="light"
                />
                <label htmlFor="light-context">Claro</label> */}
{/* 
                <input
                    type="radio"
                    name="theme"
                    id="dark-context"
                    onClick={handleTema}
                    value="dark"
                />
                <label htmlFor="dark-context">Oscuro</label> */}

               
            {/* </nav> */}

            <div>
                {children}
            </div>

        </div>
    )
}