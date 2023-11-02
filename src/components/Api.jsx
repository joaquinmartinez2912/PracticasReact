import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [PaginaActual, setPaginaActual] = useState(1);
  const TotalPorPagina = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const IndiceCierreDePagina = PaginaActual * TotalPorPagina;
  const IndiciInicioDePagina = IndiceCierreDePagina - TotalPorPagina;
  const TareasAMostrar = todos.slice(IndiciInicioDePagina, IndiceCierreDePagina);

  const handlePagina = (BotonPagina) => {
    setPaginaActual(BotonPagina);
  };

  const BotonPaginas = [];
  for (let i = 1; i <= Math.ceil(todos.length / TotalPorPagina); i++) {
    BotonPaginas.push(i);
  }

  return (
    <div>
      <h4>TODO List</h4>
      {TareasAMostrar.map((todo) => (
        <div key={todo.id}>
          <h4>Titulo: {todo.title}</h4>
          <p>Compelta: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ))}
      <nav>
        <ul className="pagination">
          {BotonPaginas.map((numero) => (
            <li key={numero} className="page-item">
              <button
                onClick={() => handlePagina(numero)}
                className={`page-link ${numero === PaginaActual ? "active" : ""}`}
              >
                {numero}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default TodoList;
