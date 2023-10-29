import { createContext, useState } from "react";
import useTimer from "../hooks/useTimer";

// Contexto para claro/oscuro
export const ModeContext = createContext()


const ModoIncial = "light";
const TIME_EXPIRE_BUY = 10;


export const ModeProvider = ({children})=>{
    const [Tema, setTema] = useState(ModoIncial);
    const {finished, seconds,start,stop} = useTimer(TIME_EXPIRE_BUY)

    const handleTema = (e) => {
      if (e.target.value === "light") {
        setTema("light");
      } else {
        setTema("dark");
      }
    };
  
    const data = { Tema,finished, seconds,start,stop, handleTema };
    return(
        <ModeContext.Provider value={data}>
            {children}
        </ModeContext.Provider>
    )
}





