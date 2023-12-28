import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import authslice from './slices/authslice';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import articleslice from './slices/articleslice';

const store = configureStore({
  reducer: {
    auth: authslice,
    articles: articleslice
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);