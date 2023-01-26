import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Grievancedetails from './Grievancedetails';
import { MDBSelect, MDBInput, MDBCol, MDBRow, MDBFile, MDBBtn } from 'mdb-react-ui-kit';
import { Row, Dropdown, DropdownButton, Col, Container, Button, Card, ListGroup, Modal, Table } from 'react-bootstrap'
import '../../css/grievances.css'
function Trackgrievance() {

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const [grievanceId, setGrievanceId] = useState('');


  function handleShow(breakpoint) {
    if(grievanceId===""|| grievanceId===null){
      alert("Please enter Grievance ID")
      return;
    }
    setFullscreen(breakpoint);
    setShow(true);
  }


  function handleGrievanceId(e) {
    setGrievanceId(e.target.value)
  }

  return (
    <div className='registergrievance'>
      <Card style={{ width: '80%' }}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ backgroundColor: '#207fb0', color: 'aliceblue' }}>Track Grievance</ListGroup.Item>
          <ListGroup.Item style={{ padding: '5%' }} >
            <MDBRow><MDBInput wrapperClass='mb-4' placeholder='Grievance ID' id='form1' type='number' onChange={handleGrievanceId} /></MDBRow>
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
            <Grievancedetails id={grievanceId} />
          </Container>
        </Modal.Body>

      </Modal>



    </div>
  )
}

export default Trackgrievance