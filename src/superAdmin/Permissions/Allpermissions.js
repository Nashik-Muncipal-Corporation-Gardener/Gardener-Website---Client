import React,{useState} from 'react'
import { Container,Table,Button, Modal,Col,Row,Card, ListGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import '../../css/userpermissions.css'
import { Icon } from '@iconify/react';
import {
    
    MDBFile
  }
  from 'mdb-react-ui-kit';

function Allpermissions() {
    const [alert, setAlert] = useState(false);
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }

    const handleClose = () => setAlert(false);
    const handleAlert = () => setAlert(true);

  return (
    <div>
        <Container style={{padding:'2%'}}>
            <center><h6>All Permissions</h6></center>
         <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Permission ID</th>
              <th>Permission Type</th>
              <th>Applied On</th>
              <th>Permission Form</th>
              <th>Panchanama Form</th>
              <th>Advertisement</th>
              <th>Status</th>
              <th></th>
    
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PER65489</td>
              <td>Trimming of Trees</td>
              <td>12/12/2022</td>
              <td><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm">View</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
              <td><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm">View</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
              <td ><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm">View</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
              <td ><Button style={{backgroundColor:'success',width:'100%'}} variant="success" size="sm" onClick={handleShow}>Update Status</Button></td>
              <td ><Button style={{backgroundColor:'success',width:'100%'}} variant="danger" size="sm" onClick={handleAlert}>Decline</Button></td>

            </tr> 
          </tbody>
        </Table>
       
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Container>
            <Row>
                <MDBFile style={{marginBottom:20}} label='Add panchanama pdf' accept="application/pdf" id='customFile' />    
            </Row>
            <Row>
            <Button style={{width:'10%'}}>Submit</Button>
            </Row>
                <hr></hr>
            <Row>
                <MDBFile style={{marginBottom:20}} label='Add advertisement pdf' accept="application/pdf" id='customFile' />    
            </Row>
            <Row>
            <Button style={{width:'10%'}}>Submit</Button>
            </Row>


        </Container>
            </Modal.Body>
           
          </Modal>
    
          <Modal show={alert} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to decline the permission</Modal.Title>
            </Modal.Header> 
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" >
                Yes Confirm
              </Button>
            </Modal.Footer>
          </Modal>
          </Container>
    </div>
  )
}

export default Allpermissions