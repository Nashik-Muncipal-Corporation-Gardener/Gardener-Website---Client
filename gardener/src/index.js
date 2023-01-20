import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from './App';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Gardens from './Components/Gardens';
import Garden from './Components/garden/Garden';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer.js';
import Userprofile from './Components/Userprofile';
import Authentication from './superAdmin/Authentication';
import SuperAdminHome from './superAdmin/home/SuperAdminHome';
import GrievanceDashboard from './superAdmin/Grievances/GrievanceDashboard';
import Editprofile from './Components/Editprofile';
import NavigationBar from './Components/NavigationBar';
import GrievanceForm from './Components/GrievanceForm';
import Grievance from './Components/Grievance';
import News from './Components/News';
import Permissions from './Components/Permissions';
import Permissionform from './Components/Permissionform';
import Userpermissions from './Components/Userpermissions';
import Pdfreader from './Components/Pdfreader';
import Posters from './superAdmin/Posters';
import Gallery from './Components/Gallery';
import Announcements from './superAdmin/Announcements';
import AddNews from './superAdmin/news/AddNews';
import AdminHome from './admin/home/AdminHome';
import GrievanceDashboardAdmin from './admin/Grievances/GrievanceDashboard';
import SuperAdminPermissions from './superAdmin/Permissions/SuperAdminPermissions';
import AdminAuthentication from './admin/Authentication';
import Panchanamaform from './superAdmin/Permissions/Panchanamaform';
import Allpermissions from './superAdmin/Permissions/Allpermissions';
import Pendingpermissions from './superAdmin/Permissions/Pendingpermissions';
import Gardendetails from './superAdmin/Gardendetals'
import Services from './superAdmin/Services';
import Acheivements from './superAdmin/Acheivements';
import Termsandconditions from './superAdmin/Termsandconditions';
import Wastecollection from './superAdmin/Wastecollection';
import ScrollToTop from './Components/scrollToTop';
import AppliedPermissionForm from './superAdmin/Permissions/AppliedPermissionForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    
    <Routes>
      <Route exact path='/' element={< App />}></Route>
      <Route exact path='/signin' element={< Signin />}></Route>
      <Route exact path='/signup' element={< Signup />}></Route>
      <Route exact path='/gardens' element={< Gardens />}></Route>
      <Route exact path='/aboutus' element={< About />}></Route>
      <Route exact path='/contact' element={< Contact />}></Route>
      <Route exact path='/garden' element={< Garden />}></Route>
      <Route exact path='/gallery' element={< Gallery />}></Route>

      <Route exact path='/userprofile' element={< Userprofile />}></Route>
      <Route exact path='/edituserprofile' element={< Editprofile />}></Route>
      <Route exact path='/edituserprofile' element={< Editprofile />}></Route>
      <Route exact path='/news' element={< News />}></Route>
      <Route exact path='/usergrievance' element={< Grievance />}></Route>
      <Route exact path='/permissions' element={< Permissions />}></Route>
      <Route exact path='/permissionform/:title' element={< Permissionform />}></Route>
      <Route exact path='/userpermissions' element={< Userpermissions />}></Route>
      <Route exact path='/pdfreader' element={< Pdfreader />}></Route>

        <Route exact path='/super-admin' element={<Authentication/>}></Route>
        <Route exact path='/super-admin/home' element={<SuperAdminHome/>}></Route>
        <Route exact path='/super-admin/grievances' element={<GrievanceDashboard/>}></Route>
        <Route exact path='/super-admin/posters' element={<Posters/>}></Route>
        <Route exact path='/super-admin/announcements' element={<Announcements/>}></Route>
        <Route exact path='/super-admin/addnews' element={<AddNews/>}></Route>
        <Route exact path='/super-admin/permissions' element={<SuperAdminPermissions/>}></Route>
        <Route exact path='/super-admin/panchanamaform' element={<Panchanamaform/>}></Route>
        <Route exact path='/super-admin/citizenservices' element={<Services/>}></Route>
        <Route exact path='/super-admin/allpermissions' element={<Allpermissions/>}></Route>
        <Route exact path='/super-admin/appliedpermission' element={<AppliedPermissionForm/>}></Route>
        <Route exact path='/super-admin/pendingpermissions' element={<Pendingpermissions/>}></Route>
        <Route exact path='/super-admin/gardendetails' element={<Gardendetails/>}></Route>
        <Route exact path='/super-admin/acheivements' element={<Acheivements/>}></Route>
        <Route exact path='/super-admin/termsandconditions' element={<Termsandconditions/>}></Route>
        <Route exact path='/super-admin/wastecollection' element={<Wastecollection/>}></Route>


        <Route exact path='/admin/home' element={<AdminHome/>}></Route>
        <Route exact path='/admin/grievances' element={<GrievanceDashboardAdmin/>}></Route>
        <Route exact path='/admin' element={<AdminAuthentication/>}></Route>



    </Routes>
  
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
