import {React, useState} from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBFile
} from 'mdb-react-ui-kit';

import { Container, Table , Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Addgardens from "./Addgardens";
import Sidebar from "./home/Sidebar/Sidebar";
function Acheivements() {
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
        View Acheivements
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
        Add Acheivements
          
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
    <th>Title</th>
    <th>Description</th>
    <th>Image</th>
    <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ABc</td>
      <td>hsbfjdb</td>
      <td></td>
      <td><Button variant='danger'> Delete</Button></td>
      
    </tr> 
  </tbody>
</Table>
</Container>
      </MDBTabsPane>
      <MDBTabsPane show={verticalActive === 'tab2'}>

      <div className='signin' style={{padding:'2%'}}>
        <div className='addgarden_container'>
        <h1 style={{fontSize:30}}>Add Garden</h1>
        <form >
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Title' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Description' />
          <MDBFile style={{marginBottom:20}} label='Add Image' id='customFile' />
          <MDBBtn type='submit' className='mb-4' block>
            Submit
          </MDBBtn> 
        </form>
        </div>
        </div>
      </MDBTabsPane>
    </MDBTabsContent>
  </MDBCol>
</MDBRow>
  {/* </Container> */}
  {/* <Footer/> */}
</div>
  )
}

export default Acheivements