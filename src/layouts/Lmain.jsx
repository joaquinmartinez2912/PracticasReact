// import Menu from "../components/Menu";
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";
import ResponsiveAppBar from "../components/MenuM";

export default function LMain({ children }) {
    const {Tema} = useContext(ModeContext)
    return (
        <div>
            <ResponsiveAppBar />
            <div className={Tema} style={{
           height: "15000px",
         }} >
                {children}
            </div>

        </div>
    )
}