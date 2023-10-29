import LMain from "../layouts/Lmain";
import BuyTicket from "../components/BuyTicket";
import { useContext, useState } from 'react';
import { ModeContext } from "../contexts/ModeContext";

export default function Compras() {
    const [buy, setBuy] = useState(false)
    const {finished, seconds} = useContext(ModeContext)
    return (
        <LMain>
            <h1> Aerolineas Internacional</h1><br />
            <p> {!finished && <span> La Compra se cancela en {seconds} segundos...</span>} </p>
            <h2> Compra de ticket</h2><br />

            {buy && <BuyTicket />}
            <button onClick={() => setBuy(!buy)} > {buy ? "Cancelar" : "Comprar"} </button> 
        </LMain>
    )
}
