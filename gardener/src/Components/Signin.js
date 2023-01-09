import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './NavigationBar';
import {Container,Row, Col, Form, Button } from 'react-bootstrap';
import '../css/signin.css'
function Signin() {
  return (
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
                        <Button className='btn_signin' variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form.Group>
                    <Form.Group style={{display:'flex', justifyContent:'center'}}>
                        <Button className='btn_signup' variant="outline-primary" type="submit">
                            Sign Up
                        </Button>
                    </Form.Group>
                    
                </Form>
                </Col>
            </Row>
        
        </Container>
        
    </div>
  )
}

export default Signin