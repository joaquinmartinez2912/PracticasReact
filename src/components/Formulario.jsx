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
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input
                    type="password"
                    value={contrase}
                    onChange={e => setContrase(e.target.value)}
                />
                <button>Iniciar Sesión</button>
            </form>
            {error && <p>Usuario y/o contraseña incorrectos</p>}
        </section>
    );
}
