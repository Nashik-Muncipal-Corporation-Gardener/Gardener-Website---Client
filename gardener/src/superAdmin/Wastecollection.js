import React,{useState} from 'react'
import { Container,Table,Button, Modal,Col,Row,Card, ListGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
// import '../../css/userpermissions.css'
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import Sidebar from "./home/Sidebar/Sidebar";

function Wastecollection() {
  return (
<div className='userpermissions'>
<Sidebar/>

            <Container style={{display:'flex'}}>
            <Card style={{ width: '12rem', marginLeft:'10px' }}>
            <Card.Body>
            <ListGroup  variant="flush">
               <ListGroup.Item><center> <h6>Total Waste Collections</h6></center></ListGroup.Item>
                <ListGroup.Item><center><h7>12</h7></center></ListGroup.Item>
            </ListGroup>    
            </Card.Body>
            </Card>

            <Card style={{ width: '12rem',marginLeft:'10px' }}>
            <Card.Body>
            <ListGroup  variant="flush">
               <ListGroup.Item><center> <h6>Pending Waste Collections</h6></center></ListGroup.Item>
                <ListGroup.Item><center><h7>12</h7></center></ListGroup.Item>
            </ListGroup>    
            </Card.Body>
            </Card>
           
        </Container>
        </div>
   
  )
}

export default Wastecollection