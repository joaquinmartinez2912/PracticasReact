import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LMain from "../layouts/Lmain";

export default function Protected(){
    const navigate = useNavigate()
    

    useEffect(()=>{
        navigate("/")
    },[navigate])

    return(
     <LMain>
        <h1>Pagina protegida</h1>
     </LMain>

    )

}