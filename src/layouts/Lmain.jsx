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
                 <Menu />
            <div>
                {children}
            </div>

        </div>
    )
}