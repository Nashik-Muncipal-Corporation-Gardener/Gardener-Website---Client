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

import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import AddPermissions from "./AddPermissions";
import ViewUpdatePermissions from "./ViewUpdatePermissions";
import PermissionsDashboard from "./PermissionsDashboard";


function SuperAdminPermissions(){

    // const navigate = useNavigate();

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
                Permissions Dashboard
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Update Permissions
                  
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Add Permission
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol size='9'>
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === 'tab1'}><PermissionsDashboard/></MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab2'}><ViewUpdatePermissions/></MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab3'}><AddPermissions/></MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
          {/* </Container> */}
          {/* <Footer/> */}
      </div>
    )

    // return(
    //     <div>
    //         {/* <SuperAdminHome/> */}
    //         <h1>Permissions</h1>

    //     </div>
    // );

}

export default SuperAdminPermissions;