import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lorem1 from './components/lorem1'
import Lorem2 from './components/lorem2'
import Lorem3 from './components/lorem3'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Lorem1 />}></Route>
          <Route path="lorem2" element={<Lorem2 />}></Route>
          <Route path="lorem3" element={<Lorem3 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
