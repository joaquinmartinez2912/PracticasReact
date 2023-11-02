import { createContext, useState } from "react";
import useTimer from "../hooks/useTimer";

export const ModeContext = createContext()
const TIME_EXPIRE_BUY = 10;


export const ModeProvider = ({children})=>{
    const [Tema, setTema] = useState("");
    const [Modo, setModo] = useState(true)
    const {finished, seconds,start,stop} = useTimer(TIME_EXPIRE_BUY)
    const [user, setUser] = useState("")

    const handleTema = (e) => {
      setModo(!Modo)
      if (Modo === false) {
        setTema("light");
      } else {
        setTema("dark");
      }
    };
  
    const data = { Tema,finished, Modo, seconds,start,stop, handleTema,user,setUser };
    return(
        <ModeContext.Provider value={data}>
            {children}
        </ModeContext.Provider>
    )
}





