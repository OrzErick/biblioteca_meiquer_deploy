import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Rutas from './routes/Rutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Rutas></Rutas>
    
  </React.StrictMode>
);


