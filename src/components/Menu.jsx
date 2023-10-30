import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <button>
                <Link to="/"> Home </Link>
            </button>
            <button>
                <Link to="/compras"> Compras </Link>
            </button>
            <button>
                <Link to="/productos"> Productos </Link>
            </button>
            <button>
                <Link to="/listado"> ListaAPI </Link>
            </button>
            <button>
                <Link to="/protegido"> Protegido </Link>
            </button>
        </div>
    )
}