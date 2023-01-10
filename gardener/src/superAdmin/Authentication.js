import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Components/NavigationBar';
import {Container,Row, Col, Form, Button,Toast } from 'react-bootstrap';
import '../css/signin.css'
import { useNavigate } from "react-router-dom";
// import {toast,ToastContainer} from "react-toastify"

function Authentication(){

    const [signIn, setSignIn] = React.useState(true);

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [confirmPassword,setConfirmPassword] = React.useState('');
    const [name,setName] = React.useState('');
    const [contact,setContact] = React.useState('');
    const [state,setState] = React.useState('');

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

    function registerSuperAdmin(e){
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
        }else{
            // alert("Registration successfull")
            navigate("/super-admin/home")
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
            navigate("/super-admin/home")
        }

    }

    return(
        <div>
            {
            (signIn==true)?(
                    <div className='signin'>
                        {/* <ToastContainer position="top-center"/> */}
                        <Navbar/>
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
            }
        </div>
        
    )
}

export default Authentication;