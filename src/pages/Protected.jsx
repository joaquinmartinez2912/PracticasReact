import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LMain from "../layouts/Lmain";

export default function Protected(){
    const navigate = useNavigate()
    var Token = null

    useEffect(()=>{
        if (Token)
        navigate("/")
    },[navigate,Token])

    return(
     <LMain>
        <h1>Pagina protegida</h1>
     </LMain>

    )

}