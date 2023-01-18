import React,{useState} from 'react'
import { Container,Table,Button, Modal,Col,Row,Card, ListGroup} from 'react-bootstrap';

function Viewgrievancetypes() {
    const [alert, setAlert] = useState(false);
    const handleClose = () => setAlert(false);
    const handleAlert = () => setAlert(true);
  return (
    
    <div>
        <Container style={{padding:'2%'}}>
            <center><h6>All Permissions</h6></center>
         <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Type</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td ><Button style={{backgroundColor:'success',width:'20%'}} variant="danger" size="sm" onClick={handleAlert}>Decline</Button></td>

            </tr> 
          </tbody>
        </Table>

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

export default Viewgrievancetypes