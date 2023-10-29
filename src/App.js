import './App.css';
import { useContext, useState } from 'react';
import BuyTicket from './components/BuyTicket';
// import { BuyContext } from './contexts/BuyContext';
import { ModeContext } from './contexts/ModeContext';

function App() {
  const [buy, setBuy] = useState(false)
  // const {finished, seconds} = useContext(BuyContext)
    const {Tema,finished, seconds,start,stop, handleTema} = useContext(ModeContext)

  return (
    <div className={Tema} >
        <input
        type="radio"
        name="theme"
        id="light-context"
        onClick={handleTema}
        value="light"
      />
      <label htmlFor="light-context">Claro</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        onClick={handleTema}
        value="dark"
      />
      <label htmlFor="dark-context">Oscuro</label>


      <h1> Aerolineas Internacional</h1><br />
      <p> {!finished && <span> La Compra se cancela en {seconds} segundos...</span>} </p>
      <h2> Compra de ticket</h2><br />
      {buy && <BuyTicket />}
      <button onClick={() => setBuy(!buy)} > {buy ? "Cancelar" : "Comprar"} </button> 
      
    </div>
  );
}

export default App;
