import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {Container,Row, Col, Form, Button } from 'react-bootstrap';
import '../css/grievanceform.css'
import Navbar from './NavigationBar'
const GrievanceForm = () => {
  return (
    <div className='grievanceform'>
        <Navbar/>
        <Container style={{margin:0}}>
            <Row >
                <Col md={4}></Col>
                <Col className='right-form' md={8}>
            <Row><Col><h4>Grievance Form</h4></Col></Row>
            <Row>
                <Col>
                <Form>
                    <Form.Group>
                        
                        <Form.Control type="text" placeholder="Name" />
                        <Form.Control type="email" placeholder="Email" />
                        <Row>
                            <Col><Form.Control type="number" placeholder="Contact No." /></Col>
                            <Col><Form.Control type="text" placeholder="Occupation" /></Col>
                        </Row>
                        <Form.Control type="text" placeholder="Street Address" />
                        <Row>
                            <Col><Form.Control type="text" placeholder="City" /></Col>
                            <Col><Form.Control type="text" placeholder="Area" /></Col>
                        </Row>
                        <Row>
                            <Col><Form.Control type="number" placeholder="Pincode" /></Col>
                            <Col><Button className='btn_attach' variant="primary" type="submit">
                            Attach File
                        </Button></Col>
                        </Row>

                    </Form.Group>
                    <Form.Group style={{display:'flex', justifyContent:'center'}}>
                        <Button className='submitform' variant="outline-primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                    
                </Form>
                </Col>
            </Row>
            </Col></Row>
        
        </Container>
    </div>
  );
}

export default GrievanceForm;