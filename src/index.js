import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/tweets-cards-project'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
