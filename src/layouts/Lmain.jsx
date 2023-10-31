import Menu from "../components/Menu";
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";

export default function LMain({ children }) {
    const {Tema} = useContext(ModeContext)
    return (
        <div
         className={Tema} 
        style={{
           height: "20000px",
         }}
        >

            {/* <nav style={{
                marginBottom: 20,
                display: 'flex',
                justifyContent: 'space-between'
            }}> */}
                 <Menu />
          
                 
                {/* <input
                    type="radio"
                    name="theme"
                    id="light-context"
                    onClick={handleTema}
                    value="light"
                />
                <label htmlFor="light-context">Claro</label> */}
{/* 
                <input
                    type="radio"
                    name="theme"
                    id="dark-context"
                    onClick={handleTema}
                    value="dark"
                />
                <label htmlFor="dark-context">Oscuro</label> */}

               
            {/* </nav> */}

            <div>
                {children}
            </div>

        </div>
    )
}