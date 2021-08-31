import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

//contextprovider
import MovieProvider from "./context/movie.context";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
    <App />
    </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

