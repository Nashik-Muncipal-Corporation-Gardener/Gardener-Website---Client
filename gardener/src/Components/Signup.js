import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Container,Row, Col, Form, Button } from 'react-bootstrap';
import '../css/signup.css'
function Signup() {

    const [startDate, setStartDate] = useState(new Date());
  
  return (
    <div className='signup'>
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
                    <Form.Group style={{display:'flex', justifyContent:'center'}}>
                        <Button className='btn_signin' variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form.Group>
                    <Form.Group style={{display:'flex', justifyContent:'center'}}>
                        <Button className='btn_signup' variant="outline-primary" type="submit">
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

export default Signup