
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
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Addgardens from "./Addgardens";
import Sidebar from "./home/Sidebar/Sidebar";

function Gardendetals() {
    const [verticalActive, setVerticalActive] = useState('tab1');

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
            <center><h6>All Gardens</h6></center>
         <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Garden ID</th>
              <th>Garden Name</th>
              <th>Area</th>
              <th>Year</th>
              <th>Division</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>G123</td>
              <td>hsbfjdb</td>
              <td>Nashik East</td>
              <td>2001</td>
              <td>Panchagani</td>
              
            </tr> 
          </tbody>
        </Table>
        </Container>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab2'}><Addgardens/></MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
          {/* </Container> */}
          {/* <Footer/> */}
      </div>
  )
}

export default Gardendetals