import React, { useState, useEffect } from "react";
import BasicCard from "./Card";
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";
import BasicSelect from "./Selector";

function TodoList() {
  const {Modo, TotalPorPagina} = useContext(ModeContext)
  const [todos, setTodos] = useState([])
  const [PaginaActual, setPaginaActual] = useState(1)

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

  const handleChange = (event, value) => {
    setPaginaActual(value);
  };

  const BotonPaginas = [];
  for (let i = 1; i <= Math.ceil(todos.length / TotalPorPagina); i++) {
    BotonPaginas.push(i);
  }

  return (
    <div style={{display:"flex",flexDirection: "column", alignItems: "center", alignContent:"center" ,justifyContent: "center"}}>
      <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between", paddingTop:"10px", width:"100%" }}>
        <h4>Lista de Tareas</h4>
        <BasicSelect />
      </div>
      
        <div style={{
          display: "flex", 
          flexDirection:"row", flexWrap:"wrap", 
          justifyContent: "start",
          }} >
          
          {TareasAMostrar.map((todo) => (
              <div key={todo.id}>
                <BasicCard data={todo}>
                </BasicCard>
              </div>
          
          ))}
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          
          <Stack style={{marginLeft: "15px"}}>
            <Typography>Pagina: {PaginaActual}</Typography>
            
            <div >
              <Pagination style={{filter: Modo ? "none" : "invert(1)"}} count={BotonPaginas.length} page={PaginaActual} onChange={handleChange} />
            </div>
          </Stack>
        </div>
    </div>
  );
}

export default TodoList;
