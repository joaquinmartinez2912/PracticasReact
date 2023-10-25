import './App.css';
import { useContext, useState } from 'react';
import BuyTicket from './components/BuyTicket';
import { BuyContext } from './contexts/BuyContext';

function App() {
  const [buy, setBuy] = useState(false)
  const {finished, seconds} = useContext(BuyContext)

  return (
    <>
      <h1> Aerolineas Internacional</h1><br />
      <p> {!finished && <span> La Compra se cancela en {seconds} segundos...</span>} </p>
      <h2> Compra de ticket</h2><br />
      {buy && <BuyTicket />}
      <button onClick={() => setBuy(!buy)} > {buy ? "Cancelar" : "Comprar"} </button>
    </>
  );
}

export default App;
