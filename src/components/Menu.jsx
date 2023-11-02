import { Link } from "react-router-dom";
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";

export default function Menu() {
    const {Modo, handleTema, user} = useContext(ModeContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/Home" className="navbar-brand"> Home </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/compras" className="navbar-brand" aria-current="page"> Compras </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="navbar-brand" > Productos </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/listado" className="navbar-brand"> ListaAPI </Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch" style={{marginRight:"10px"}}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleTema} />
                        <label className="form-check-label" for="flexSwitchCheckDefault">{Modo ? "Modo Oscuro: Desactivado" : "Modo Oscuro: Activado"} </label>
                    </div> 
                    <p>{user}</p>
                    <button type="button" className="btn btn-danger"><Link to="/protegido" style={{color:"white"}}> Cerrar Sesion </Link></button>

                </div>
            </div>
        </nav>
    )
}