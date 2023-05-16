import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'use-http';
import App from './App'
import ShoppingContextProvider from './contexts/ShoppingContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider url='https://fakestoreapi.com'>
        <ShoppingContextProvider>
          <App />
        </ShoppingContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
