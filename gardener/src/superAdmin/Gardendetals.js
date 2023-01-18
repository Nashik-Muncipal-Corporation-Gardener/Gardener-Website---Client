
import {React, useState} from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Container, Table, Button , Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Addgardens from "./Addgardens";
import Sidebar from "./home/Sidebar/Sidebar";

function Gardendetals() {
    const [verticalActive, setVerticalActive] = useState('tab1');
    const [lgShow, setLgShow] = useState(false);
    function handleVerticalClick(value) {
      if (value === verticalActive) {
        return;
      }
  
      setVerticalActive(value);
    }
  return (
    <div className='grievance'>
            <Sidebar/>

          {/* <Container> */}
          <MDBRow>
          <MDBCol size='3'>
            <MDBTabs className='flex-column text-center'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                View Gardens
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Add Garden
                  
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol size='9'>
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === 'tab1'}>

              <Container style={{padding:'2%'}}>
            <center><h6>All Acheivements</h6></center>
         <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Area</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => setLgShow(true)}>
              <td>G123</td>
              <td>hsbfjdb</td>
              <td><Button size='sm' variant='danger'>Delete</Button></td>      
            </tr> 
          </tbody>
        </Table>
        </Container>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab2'}><Addgardens/></MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>


      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Garden Detailed Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover size="sm">
          
          <tbody>
            <tr>
              <td>Name:</td>
              <td></td>     
            </tr>
            <tr>
              <td>Area:</td>
              <td></td>     
            </tr> 
            <tr>
              <td>Establishment Year:</td>
              <td></td>     
            </tr>
            <tr>
              <td>Description:</td>
              <td></td>     
            </tr>
            <tr>
              <td>Facilities:</td>
              <td></td>     
            </tr>
            <tr>
              <td>Uniqueness:</td>
              <td></td>     
            </tr>
            <tr>
              <td>Opening Time:</td>
              <td></td>     
            </tr>
            <tr>
              <td>Closing Time:</td>
              <td></td>     
            </tr>
            <tr>
              <td>Location:</td>
              <td></td>     
            </tr>
          </tbody>
        </Table>
        </Modal.Body>
      </Modal>
      </div>
  )
}

export default Gardendetals