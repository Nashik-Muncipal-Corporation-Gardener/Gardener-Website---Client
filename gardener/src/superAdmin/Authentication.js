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
import {Container,Row, Col, Form, Button,Toast } from 'react-bootstrap';
import '../css/signin.css'
import { useNavigate } from "react-router-dom";
import '../css/signin.css'
// import {toast,ToastContainer} from "react-toastify"

function Authentication(){

    const [justifyActive, setJustifyActive] = useState('tab1');;


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


    const [signIn, setSignIn] = React.useState(true);

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [confirmPassword,setConfirmPassword] = React.useState('');
    const [name,setName] = React.useState('');
    const [contact,setContact] = React.useState('');
    const [state,setState] = React.useState('');
    const [checkBox,setCheckBox] = React.useState(false);

    const navigate = useNavigate();

    const handleEmailInput=(event)=>{
        // console.log("Event"+event.target.value)
        setEmail(event.target.value)
        // email = event.target.value
    }

    const handlePasswordInput = (event)=>{
        setPassword(event.target.value)
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }

    const handleConfirmmPassword = (event)=>{
        setConfirmPassword(event.target.value);
    }

    const handleName = (event)=>{
        setName(event.target.value);
    }

    const handleContact = (event)=>{
        setContact(event.target.value);
    }

    const handleState = (event)=>{
        setState(event.target.value);
    }


    function openSignUp(){
        setSignIn(false)
    }

    function openSignIn(){
        setSignIn(true)
    }


    function checkboxStatus(){
        // e.preventDefault();
        if(checkBox==true){
            setCheckBox(false)
        }else{
            setCheckBox(true)
        }
    }

    async function registerSuperAdmin(e){
        e.preventDefault();

        // alert('Registering S
        if (email === "") {
            alert("Email is empty");
            // console.log("Email is empty");
            // toast.error(<b>Please enter email</b>)
            return;
            }else if(password.length<6){
                alert("Password must be atleast of 6 characters")
            }else if(password!==confirmPassword){
                alert("Password and confirm password must be same")
            }else if(name===""){
                alert("Name is empty")
            }else if(contact.length!=10 ){
                alert("Please enter 10 digit mobile number")
            }else if(checkBox==false){
                alert("Please agree to checkbox!!")
            }else{
                console.log("Checkbox",""+document.getElementById("flexCheckDefaultSuperAdmin"));
                var form_data_body = {
                    "email":email,
                    "name":name,
                    "dateOfBirth":"null",
                    "phoneNos":contact,
                    "address":"null",
                    "city":"Nashik",
                    "state":"Maharashtra",
                    "password":password,
                }
            axios.post(url+"/super-admin/register",form_data_body,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },
            }).then(function(response){
                if(response.status==201){
                    console.log("Inside successfull response")
                    localStorage.setItem("jwtTokenSuperAdmin",response.data.token);
                    alert("Super Admin registered successfully!!");
                    navigate("/super-admin/home");
                }else{
                    alert("Inside else")
                }
            }).catch(function(error){
                console.log("Error",error);
            })

        }
    }

    function handleLogin(e){
        
        e.preventDefault();

        if(email===""){
            alert("Email is empty")
        }else if(password===""){
            alert("Password is empty")
        }else{
            // alert("Login successfull")

            var form_data_body = {
                "email" : email,
                "password": password
            };

            axios.post(url+"/super-admin/login",form_data_body,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },
            }).then(function(response){
                console.log("Response",response.data);
                if(response.status==200){
                    console.log("Response:",response);
                    localStorage.setItem("jwtTokenSuperAdmin",response.data.message);
                    alert("Super Admin Login successfully!!");
                    navigate("/super-admin/home");
                }else{
                    alert(response.data.message);
                }
            }).catch(function(error){
                console.log("Error",error);
            })

            // navigate("/super-admin/home")
        }

    }

    return(
        <div className='signin'>
            {/* <Navbar/> */}
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                Login
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Register
                </MDBTabsLink>
            </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

            <MDBTabsPane show={justifyActive === 'tab1'}>


                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' onChange={handleEmailInput}/>
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password' onChange={handlePassword}/>

                <div className="d-flex justify-content-between mx-4 mb-4">
                <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>
                <p className="text-center">Not a member? <a onClick={() => handleJustifyClick('tab2')} >Register</a></p>

            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>
                <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email' onChange={handleEmailInput}/>
                <MDBRow>
                <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password' onChange={handlePassword}/>
                </MDBCol>
                <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form1' type='password' onChange={handleConfirmmPassword}/>

                </MDBCol>
                
                </MDBRow>

            
                <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text' onChange={handleName}/>

                <MDBInput wrapperClass='mb-4' placeholder='Contact' id='form1' type='number' onChange={handleContact}/>
                <MDBInput wrapperClass='mb-4' placeholder='City' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' placeholder='State' id='form1' type='text'/>


                <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefaultSuperAdmin' label='I have read and agree to the terms' onChange={checkboxStatus}/>
                </div>

                <MDBBtn className="mb-4 w-100" onClick={registerSuperAdmin} >Sign up</MDBBtn>

            </MDBTabsPane>

            </MDBTabsContent>

            </MDBContainer>
            {/* {
            (signIn==true)?(
                    <div className='signin'> */}
                        {/* <ToastContainer position="top-center"/> */}
                        {/* <Navbar/>
                        <Container>
                            <Row><Col><h4>Sign In</h4></Col></Row>
                            <Row>
                                <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control id="email" type="email" placeholder="Enter email" onChange={handleEmailInput} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control id="password"  type="password" placeholder="Password" onChange={handlePassword}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <h7>Forgot password ?</h7>
                                    </Form.Group>

                                    <Form.Group style={{display:'flex', justifyContent:'center'}}>
                                        <Button className='btn_signup' variant="outline-primary" type="submit" onClick={handleLogin}>
                                            Login
                                        </Button>
                                    </Form.Group>
                                    
                                    <Form.Group style={{display:'flex', justifyContent:'center'}}>
                                        <Button className='btn_signup' variant="outline-primary" type="submit" onClick={openSignUp}>
                                            Sign Up
                                        </Button>
                                    </Form.Group>
                                    
                                </Form>
                                </Col>
                            </Row>
                        
                        </Container>
                        
                    </div>
            ):(
                <div className='signup'>
                
                <Navbar/>
                <Container>
                    <Row><Col><h4>Sign Up</h4></Col></Row>
                    <Row>
                        <Col>
                        <Form>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Email" onChange={handleEmailInput} />
                                <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
                                <Form.Control type="password" placeholder="Confirm Password" onChange={handleConfirmmPassword}/>
                                <Form.Control type="text" placeholder="Name" onChange={handleName}/>
                                <Form.Control type="text" placeholder="Contact No." onChange={handleContact}/>
                                <Form.Control type="text" placeholder="City"  value="Nashik"/>
                                <Form.Control type="text" placeholder="State"  value="Maharashtra"/>

                            </Form.Group>
                            <br/>
                            <Form.Group style={{display:'flex', justifyContent:'center'}}>
                                <Button className='btn_signup' variant="outline-primary" type="submit" onClick={registerSuperAdmin}>
                                    Register
                                </Button>
                            </Form.Group>
                            <Form.Group style={{display:'flex', justifyContent:'center'}}>
                                <Button className='btn_signup' variant="outline-primary" type="submit" onClick={openSignIn}>
                                    Sign In
                                </Button>
                            </Form.Group>
                            
                        </Form>
                        </Col>
                    </Row>
                
                </Container>
            </div>
            )
            } */}
        </div>
        
    )
}

export default Authentication;