import { createContext, useState } from "react";

export const ModeContext = createContext()

export const ModeProvider = ({children})=>{
    const [Tema, setTema] = useState("light");
    const [Modo, setModo] = useState(true)
    const [user, setUser] = useState("")
    const [TotalPorPagina, setTotalPorPagina] = useState(10)

    const handleTema = (e) => {
      setModo(!Modo)
      if (Modo === false) {
        setTema("light");
      } else {
        setTema("dark");
      }
    };
  
    const data = { Tema, Modo,handleTema,user,setUser,TotalPorPagina,setTotalPorPagina };
    return(
        <ModeContext.Provider value={data}>
            {children}
        </ModeContext.Provider>
    )
}





