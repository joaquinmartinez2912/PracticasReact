import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export default function Formulario() {
    const [nombre, setNombre] = useState("");
    const [contrase, setContrase] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate(); // Crea la función de navegación

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "usuario" || contrase === "demo") {
            setError(false);
            navigate("/home"); 
        } else {
            setError(true);
        }
    }

    return (
        <section className="container mt-5"> {/* Aplica un margen en la parte superior */}
        <h1 className="mb-4">Login</h1> {/* Aplica un margen inferior */}
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
          <button type="submit" className="btn btn-primary" style={{justifyContent:"center"}}>Iniciar Sesión</button> {/* Usa una clase de Bootstrap para estilizar el botón */}
        </form>
        {error && <p className="mt-3 text-danger">Usuario y/o contraseña incorrectos</p>} {/* Aplica un margen superior y un estilo de texto de error */}
      </section>
    );
}
