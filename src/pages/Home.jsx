import LMain from "../layouts/Lmain";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModeContext } from "../contexts/ModeContext";

export default function Home() {
    const { user } = useContext(ModeContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user === "") {
          navigate("/");
        }
      }, [navigate, user]);
    
      return  (
        <LMain>
          <h1> Bienvenido a la pagina de inicio </h1>
          <p>Prueba de commit</p>
        </LMain>
      ) 
}




