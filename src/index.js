import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdz2YKpgIKShC-juBLsVLL3b2CYuAhF_U",
  authDomain: "urlshortner-c5c83.firebaseapp.com",
  databaseURL: "https://urlshortner-c5c83-default-rtdb.firebaseio.com",
  projectId: "urlshortner-c5c83",
  storageBucket: "urlshortner-c5c83.appspot.com",
  messagingSenderId: "322306988340",
  appId: "1:322306988340:web:30c8226a3d918c2dd7ad61",
  measurementId: "G-Z0RV68X846"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
