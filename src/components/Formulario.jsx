import { useState, useContext} from "react";
import { useNavigate} from "react-router-dom"; 
import { ModeContext } from "../contexts/ModeContext";
import Alert from '@mui/material/Alert';

export default function Formulario() {
    const [nombre, setNombre] = useState("");
    const [contrase, setContrase] = useState("");
    const [error, setError] = useState(false);
    const {setUser} = useContext(ModeContext)

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "usuario" || contrase === "demo") {
            setError(false);
            navigate("/home");
            setUser(nombre)
        } else {
            setError(true);
        }
    }

    return (
        <section className="container mt-5"> 
        <h1 className="mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrase" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contrase"
              value={contrase}
              onChange={(e) => setContrase(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{justifyContent:"center"}}>Iniciar Sesión</button> 
        </form>
        {error && <Alert severity="error">Usuario y/o Contraseña incorrectos</Alert>} 
      </section>
    );
}
