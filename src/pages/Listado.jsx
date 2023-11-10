import TodoList from "../components/Api";
import LMain from "../layouts/Lmain";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModeContext } from "../contexts/ModeContext";

export default function Listado() {
    const { user } = useContext(ModeContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (user === "") {
        navigate("/");
      }
    }, [navigate, user]);
  

    return (
        <LMain>
          <TodoList />
        </LMain>
      ) 
}



