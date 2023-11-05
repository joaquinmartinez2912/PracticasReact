import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModeProvider } from './contexts/ModeContext';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Listado from './pages/Listado';
import Protected from './pages/Protected';
import Logeo from './pages/Logeo';

import {
  // BrowserRouter,
   RouterProvider,
  createBrowserRouter 
} from 'react-router-dom';

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
    </React.StrictMode> 
  </ModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

