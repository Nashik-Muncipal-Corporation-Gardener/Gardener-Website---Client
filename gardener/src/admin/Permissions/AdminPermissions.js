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
import url from "../../Uri";
import AdminHome from "../home/AdminHome";

function AdminPermissions(){

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
          <AdminHome/>
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
                Add Permissions
                  
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                View Permission
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol size='9'>
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === 'tab1'}><PermissionsDashboard/></MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab2'}><AddPermissions/></MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab3'}><ViewUpdatePermissions/></MDBTabsPane>
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

export default AdminPermissions;