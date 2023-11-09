import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextFunction from './context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextFunction>
      <App />
    </ContextFunction>
  </React.StrictMode>
);