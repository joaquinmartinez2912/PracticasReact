
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

export default function Protegido(){
    const navigate = useNavigate()

    useEffect

    return(
        <>
        <button>
            <h1> Pagina protegida </h1>
            <Menu></Menu>

        </button>
        </>
    )
}