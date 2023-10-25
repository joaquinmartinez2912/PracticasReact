import { useContext, useEffect } from "react";
import { BuyContext } from "../contexts/BuyContext";

const BuyTicket = (props) => {
    const buyContext = useContext(BuyContext);
    const {finished, seconds, start, stop} = buyContext; //Destructura aca porque es el contexte que recibe el objeto creado por el hook que es pasado como value en context.proveider

    useEffect(()=>{
        start() // Esta parte se ejecuta cuando se monta el componente.
        return ()=> stop() //El return se ejecuta cuando el componente se desmonta por logica de react.
    }, [])

    if (finished) {
        return(<p> El Tiempo caduco </p>)
    }

    return(
        <div style={ {border:'solid 1px #333', padding:10, margin:10}}>
            <h3> Proceso de compra </h3>
            <small> Finaliza la compra antes de {seconds} segundos </small>
            <br/>
            <button onClick={()=>stop()} >Pagar</button>
        </div>
    )
};

export default BuyTicket
