import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { BuyProvider } from './contexts/BuyContext';
import { ModeProvider } from './contexts/ModeContext';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter,
   RouterProvider,
  createBrowserRouter 
} from 'react-router-dom';
import Protegido from './pages/Protegido';

function Contact (){
  return(
    <h1> Contacttos </h1>
  )
}

function ProductsItem (props){
  
  return(
    <h1> Mostrando el producto ...</h1>
  )
}

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/protegido",
    element: <Protegido/>,
  },
  {
    path: "/p",
    element: <ProductsItem/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModeProvider>
    <App />
  </ModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
