import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/main';
import Header from './components/header';
import Footer from './components/footer';

import {
  BrowserRouter,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode >
      <div className='index'>
        <Header />
        <App />
        <Footer />
      </div>
    </React.StrictMode>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
