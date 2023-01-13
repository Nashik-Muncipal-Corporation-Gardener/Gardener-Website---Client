
import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {Container, Tab, Tabs} from 'react-bootstrap';
import Navbar from './NavigationBar';
import Footer from './footer';
import Mygrievance from './Grievance/Mygrievance';
import Registergrievance from './Grievance/Registergrievance';
import Trackgrievance from './Grievance/Trackgrievance';
function Grievance() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  function handleVerticalClick(value) {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  }

  return (
    <div className='grievance'>
        <Navbar/>
        {/* <Container> */}
        <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
              My Grievance
                
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
              Register Grievance
                
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Track Grievance
                
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}><Mygrievance/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}><Registergrievance/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}><Trackgrievance/></MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
        {/* </Container> */}
        {/* <Footer/> */}
    </div>
  )
}

export default Grievance