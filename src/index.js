import React from 'react';
import ReactDOM from 'react-dom/client';

//import css
import './assets/css/font-opensans.css';
import './assets/css/font-montserrat.css';
import './assets/css/main.css';
import './assets/css/index.css';
import './assets/css/layout.css';
import 'bootstrap/dist/css/bootstrap.css';

import '@coreui/coreui/dist/css/coreui.min.css'

import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import { AppProvider } from './context/appContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
