import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Components/NavigationBar';
import {Container,Row, Col, Form, Button } from 'react-bootstrap';
import '../css/signin.css'

function Authentication(){

    const [signIn, setSignIn] = React.useState(true);


    function openSignUp(){
        setSignIn(false)
    }

    function openSignIn(){
        setSignIn(true)
    }

    return(
        <div>
            {
            (signIn==true)?(
                    <div className='signin'>
                        <Navbar/>
                        <Container>
                            <Row><Col><h4>Sign In</h4></Col></Row>
                            <Row>
                                <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <h7>Forgot password ?</h7>
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
                                <Form.Control type="email" placeholder="Email" />
                                <Form.Control type="text" placeholder="Name" />
                                <Row>
                                    <Col md={2}><Button className='DOB'style={{marginBottom:'0 !important'}}>DOB</Button></Col>
                                    <Col md={10}><Form.Control className='date_input' type="date" placeholder=" Date of Birth" /></Col>
                                </Row>
                                <Form.Control type="number" placeholder="Contact No.    " />
                                <Form.Control type="text" placeholder="Street Address" />
                                <Form.Control type="text" placeholder="City" />
                                <Form.Control type="text" placeholder="State" />
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Control type="password" placeholder="Confirm Password" />

                            </Form.Group>
                            <br/>
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