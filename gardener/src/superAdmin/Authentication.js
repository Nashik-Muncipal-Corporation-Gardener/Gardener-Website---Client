import React, { useState } from 'react';
import url from '../Uri';
import axios from 'axios';



import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
    MDBRow, MDBCol
}
    from 'mdb-react-ui-kit';

import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Components/NavigationBar';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import '../css/signin.css'
import { useNavigate } from "react-router-dom";
import '../css/signin.css'
// import {toast,ToastContainer} from "react-toastify"

function Authentication() {



    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const handleEmailInput = (event) => {
        // console.log("Event"+event.target.value)
        setEmail(event.target.value)
        // email = event.target.value
    }


    const handlePassword = (event) => {
        setPassword(event.target.value)
    }


   

    function handleLogin(e) {

        e.preventDefault();

        if (email === "") {
            alert("Email is empty")
        } else if (password === "") {
            alert("Password is empty")
        } else {
            // alert("Login successfull")

            var form_data_body = {
                "email": email,
                "password": password
            };

            axios.post(url + "/super-admin/login", form_data_body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then(function (response) {
                console.log("Response", response.data);
                if (response.status == 200) {
                    console.log("Response:", response);
                    localStorage.setItem("jwtTokenSuperAdmin", response.data.message);
                    alert("Super Admin Login successfully!!");
                    navigate("/super-admin/home");
                } else {
                    alert(response.data.message);
                }
            }).catch(function (error) {
                console.log("Error", error);
                alert(error.response.data.message);
            })

            // navigate("/super-admin/home")
        }

    }

    return (
        <div className='signin'>

            <Container className="justify-content-center" style={{marginTop:"10%"}}>
                <h4 style={{textAlign:"center"}}>Super Admin Login</h4>
                <br/>
                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' onChange={handleEmailInput} />
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password' onChange={handlePassword} />

                

                <Button className="mb-4 w-100" onClick={handleLogin}>Sign in</Button>
                {/* <p className="text-center">Not a member? <a onClick={() => handleJustifyClick('tab2')} >Register</a></p> */}
                <div className="d-flex justify-content-between mx-4 mb-4">
                     <a href="!#">Forgot password?</a>
                </div>
            </Container>

        </div>

    )
}

export default Authentication;