import { React, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Container, Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import './GrievanceDashboard.css'
import SuperAdminHome from '../home/SuperAdminHome'
import Addgrievancetype from "./Addgrievancetype";
import Viewgrievancetypes from "./Viewgrievancetypes";
import AllGrievances from "./AllGrievances";
function GrievanceDashboard() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  function handleVerticalClick(value) {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  }
  return (
    <div>
      <SuperAdminHome />
      {/* <Button>Marathi</Button> */}
      <div className='grievance'>
        {/* <Container> */}
        <MDBRow>
          <MDBCol size='3'>
            <MDBTabs className='flex-column text-center'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                  Grievance Dashboard
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                  Add Grievance Type
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                  View Grievance Types
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
                  Grievance Forms
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol size='9'>
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === 'tab1'}>

                <Container>
                  <h1>Grievance Dashboard</h1>
                  <Card style={{ width: "100%" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Card style={{width: '10rem', margin: '10px'}}>
                            <Card.Header style={{backgroundColor:"#ABCDEF"}}>All Grievances</Card.Header>
                            <Card.Body>
                              <Card.Title>1234</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card style={{width: '10rem', margin: '10px'}}>
                            <Card.Header style={{backgroundColor:"#ABCDEF"}}>Pending Grievances</Card.Header>
                            <Card.Body>
                              <Card.Title>1234</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card style={{width: '10rem', margin: '10px'}}>
                            <Card.Header style={{backgroundColor:"#ABCDEF"}}>% Grievance Resolved</Card.Header>
                            <Card.Body>
                              <Card.Title>1234</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card style={{width: '10rem', margin: '10px'}}>
                            <Card.Header style={{backgroundColor:"#ABCDEF"}}>Closed Grievances</Card.Header>
                            <Card.Body>
                              <Card.Title>1234</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card style={{width: '10rem', margin: '10px'}}>
                            <Card.Header style={{backgroundColor:"#ABCDEF"}}>Feedback</Card.Header>
                            <Card.Body>
                              <Card.Title>1234</Card.Title>
                            </Card.Body>
                          </Card>
                        </Row>

                      </ListGroup.Item>

                    </ListGroup>
                  </Card>

                </Container>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab2'}><Addgrievancetype /></MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab3'}><Viewgrievancetypes /></MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab4'}><AllGrievances/></MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
        {/* </Container> */}
        {/* <Footer/> */}
      </div>

    </div>
  );
}

export default GrievanceDashboard;