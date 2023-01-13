import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";

import { MDBSelect,MDBInput, MDBCol,MDBRow,MDBFile, MDBBtn} from 'mdb-react-ui-kit';
import {Row,Dropdown,DropdownButton, Col,Container , Button,Card,ListGroup,Modal,Table} from 'react-bootstrap'
import '../../css/grievances.css'
function Trackgrievance() {
  const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
  return (
    <div className='registergrievance'>
    <Card style={{width:'80%'}}>
        <ListGroup variant="flush">
            <ListGroup.Item style={{backgroundColor:'#207fb0',color:'aliceblue'}}>Track Grievance</ListGroup.Item>
            <ListGroup.Item style={{padding:'5%'}} >
              <MDBRow><MDBInput wrapperClass='mb-4' placeholder='Grievance ID' id='form1' type='number'/></MDBRow>
             <MDBRow> <center><Button className='registergrievancebtn' onClick={() => handleShow(true)}>Track</Button>
              </center></MDBRow>
            </ListGroup.Item>
        </ListGroup>
        </Card>

        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Container>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Grievance ID</th>
          <th>Status</th>
          <th>Review</th>
          
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>1</td>
          <td>In Review</td>
          <td>abc</td>
        </tr> 
      </tbody>
    </Table>
    </Container>
        </Modal.Body>
       
      </Modal>

      
    </div>
  )
}

export default Trackgrievance