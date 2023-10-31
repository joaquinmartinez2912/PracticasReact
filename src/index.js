import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
//import { BuyProvider } from './contexts/BuyContext';
import { ModeProvider } from './contexts/ModeContext';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Compras from './pages/Compras';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import Listado from './pages/Listado';
import Protected from './pages/Protected';
import Logeo from './pages/Logeo';

import {
  // BrowserRouter,
   RouterProvider,
  createBrowserRouter 
} from 'react-router-dom';

//import Protegido from './pages/Protegido';

// function Contact (){
//   return(
//     <h1> Contacttos </h1>
//   )
// }

// function ProductsItem (props){
  
//   return(
//     <h1> Mostrando el producto ...</h1>
//   )
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logeo/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/compras",
    element: <Compras/>
  },
  {
    path: "/productos",
    element: <Productos />,
  },  
  {
    path: "/productos/:productId",
    element: <Producto />,
  },
  {
    path: "/listado",
    element: <Listado />,
  },
  {
    path: "/protegido",
    element: <Protected />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModeProvider>
    <React.StrictMode> 
      <RouterProvider router={router} />
       {/* <App /> */}
    </React.StrictMode> 
  </ModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

