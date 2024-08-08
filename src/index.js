import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 這個除錯模式會造成品項加兩次
    <HashRouter>
      <App />
    </HashRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
