import React from 'react'
import { Container,ListGroup,Card,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from '@iconify/react';
import '../css/permissions.css'
import Navbar from './NavigationBar'
import { useNavigate } from "react-router-dom";

function Permissions() {

    const navigate = useNavigate()

    const permissionform=()=>{
        navigate('/permissionform')
    }

  return (
    <div className='permissions'>
        <Navbar/>
    
        <br></br><br></br>
        <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>Permissions</h1>
        <Container>
        <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>
            <Icon icon="mdi:pine-tree" style={{color: "#51907b", width:"100", height:"100"}} />
            <a>Tree Cutting</a>
                
            </ListGroup.Item>
            <ListGroup.Item style={{padding:'0'}}><Button onClick={permissionform} >Apply Now <Icon icon="ri:external-link-line"  style={{color:'aliceblue'}} /></Button></ListGroup.Item>
        </ListGroup>
        </Card>

        <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>
            <Icon icon="mdi:pine-tree" style={{color: "#51907b", width:"100", height:"100"}} />
            <a>Trimming of Branches</a>   
            </ListGroup.Item>
            <ListGroup.Item style={{padding:'0'}}><Button onClick={permissionform} >Apply Now <Icon icon="ri:external-link-line"  style={{color:'aliceblue'}} /></Button></ListGroup.Item>
        </ListGroup>
        </Card>
        </Container>
    </div>
  )
}

export default Permissions