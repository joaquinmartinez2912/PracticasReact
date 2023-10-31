import { Link } from "react-router-dom";
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";

export default function Menu() {
    const {Modo, handleTema, user} = useContext(ModeContext)

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/Home" class="navbar-brand"> Home </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/compras" class="navbar-brand" aria-current="page"> Compras </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/productos" class="navbar-brand" > Productos </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/listado" class="navbar-brand"> ListaAPI </Link>
                        </li>
                    </ul>
                    <div class="form-check form-switch" style={{marginRight:"10px"}}>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleTema} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">{Modo ? "Modo Oscuro: Desactivado" : "Modo Oscuro: Activado"} </label>
                    </div> 
                    <p>{user}</p>
                    <button type="button" class="btn btn-danger"><Link to="/protegido" style={{color:"white"}}> Cerrar Sesion </Link></button>

                </div>
            </div>
        </nav>
    )
}