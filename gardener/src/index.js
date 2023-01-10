import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Gardens from './Components/Gardens';
import Userprofile from './Components/Userprofile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< App />}></Route>
        <Route exact path='/signin' element={< Signin />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/gardens' element={< Gardens />}></Route>
        <Route exact path='/userprofile' element={< Userprofile />}></Route>


    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
