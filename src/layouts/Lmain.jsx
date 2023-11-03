// import Menu from "../components/Menu";
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";
import ResponsiveAppBar from "../components/MenuM";

export default function LMain({ children }) {
    const {Tema} = useContext(ModeContext)
    return (
        <div
         className={Tema} 
        style={{
           height: "20000px",
         }}
        >
                 {/* <Menu /> */}
                 <ResponsiveAppBar />
            <div>
                {children}
            </div>

        </div>
    )
}