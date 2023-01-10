import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from './App';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Gardens from './Components/Gardens';
import Userprofile from './Components/Userprofile';
import Authentication from './superAdmin/Authentication';
import SuperAdminHome from './superAdmin/home/SuperAdminHome';
import GrievanceDashboard from './superAdmin/Grievances/GrievanceDashboard';
import Editprofile from './Components/Editprofile';
import GrievanceForm from './Components/GrievanceForm';
import Grievance from './Components/Grievance';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      <Routes>
        <Route exact path='/' element={< App />}></Route>
        <Route exact path='/signin' element={< Signin />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/gardens' element={< Gardens />}></Route>
        <Route exact path='/userprofile' element={< Userprofile />}></Route>
        <Route exact path='/edituserprofile' element={< Editprofile />}></Route>
        <Route exact path='/edituserprofile' element={< Editprofile />}></Route>

        <Route exact path='/usergrievance' element={< Grievance />}></Route>


        <Route exact path='/super-admin' element={<Authentication/>}></Route>
        <Route exact path='/super-admin/home' element={<SuperAdminHome/>}></Route>
        <Route exact path='/super-admin/grievances' element={<GrievanceDashboard/>}></Route>

    </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
