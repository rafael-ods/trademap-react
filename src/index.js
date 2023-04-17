import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterApp from './router';
import './style/styleglobais.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp/>
  </React.StrictMode>
);


