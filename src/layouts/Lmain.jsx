import Menu from "../components/Menu";
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";

export default function LMain({ children }) {
    const {Tema,handleTema} = useContext(ModeContext)
    return (
        <div
         className={Tema} 
         style={{
            width: '100%',
            maxWidth: "100%",
            height: "20000px",
            // maxHeight: "100%",
            margin: '0 auto',
            backgroundColor: '#ccc',
            padding: 10,
            borderRadius: 5,
        }}>

            <nav style={{
                marginBottom: 20,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <input
                    type="radio"
                    name="theme"
                    id="light-context"
                    onClick={handleTema}
                    value="light"
                />
                <label htmlFor="light-context">Claro</label>
                <input
                    type="radio"
                    name="theme"
                    id="dark-context"
                    onClick={handleTema}
                    value="dark"
                />
                <label htmlFor="dark-context">Oscuro</label>
                <Menu />
            </nav>

            <div>
                {children}
            </div>

        </div>
    )
}