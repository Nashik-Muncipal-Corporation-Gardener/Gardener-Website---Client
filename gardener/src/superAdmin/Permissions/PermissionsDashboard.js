import React,{useState} from 'react'
import { Container,Table,Button, Modal,Col,Row,Card, ListGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import '../../css/userpermissions.css'
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

import {
    
    MDBFile
  }
  from 'mdb-react-ui-kit';
function PermissionsDashboard(){

    const navigate = useNavigate();

    const allpermissions=()=>{
        navigate('/super-admin/allpermissions')
    } 
    
    const pendingpermissions=()=>{
        navigate('/super-admin/pendingpermissions')
    } 

      return (
        <div className='userpermissions'>
            <Container style={{display:'flex'}}>
            <Card style={{ width: '12rem', marginLeft:'10px' }}>
            <Card.Body>
            <ListGroup onClick={allpermissions} variant="flush">
               <ListGroup.Item><center> <h6>Total Permissions</h6></center></ListGroup.Item>
                <ListGroup.Item><center><h7>12</h7></center></ListGroup.Item>
            </ListGroup>    
            </Card.Body>
            </Card>

            <Card style={{ width: '12rem',marginLeft:'10px' }}>
            <Card.Body>
            <ListGroup onClick={pendingpermissions} variant="flush">
               <ListGroup.Item><center> <h6>Pending Permissions</h6></center></ListGroup.Item>
                <ListGroup.Item><center><h7>12</h7></center></ListGroup.Item>
            </ListGroup>    
            </Card.Body>
            </Card>
           
        </Container>
        </div>
      )
}

export default PermissionsDashboard;