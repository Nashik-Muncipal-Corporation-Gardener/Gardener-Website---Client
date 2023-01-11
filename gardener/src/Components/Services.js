import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';
import '../css/services.css'
function Services() {

    const navigate=useNavigate()

    const grievance=()=>{
        navigate('/usergrievance')
    }
  return (
    <div className='Services'>
        <Container>
            <Row>
                <Col><h3>Our Services</h3></Col>   
            </Row>
            <Row>
                <Col>
                    <Row><img onClick={grievance} src = {require ('../images/Grievance.png')}/></Row>
                    <Row><a onClick={grievance} >Grievance</a></Row>   
                </Col>
                <Col>
                    <Row><img src = {require ('../images/Permission.png')}/></Row>
                    <Row><a>Permission</a></Row>   
                </Col>
                <Col>
                    <Row><img src = {require ('../images/Volunteer.png')}/></Row>
                    <Row><a>Volunteer</a></Row>   
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Services