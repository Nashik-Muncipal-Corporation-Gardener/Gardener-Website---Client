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
import { Container,Card, Row, Col, Button } from "react-bootstrap";
import './GrievanceDashboard.css'
import SuperAdminHome from '../home/SuperAdminHome'
import Addgrievancetype from "./Addgrievancetype";
import Viewgrievancetypes from "./Viewgrievancetypes";
function GrievanceDashboard(){
    const [verticalActive, setVerticalActive] = useState('tab1');

    function handleVerticalClick(value) {
      if (value === verticalActive) {
        return;
      }
  
      setVerticalActive(value);
    }
    return(
        <div>
            <SuperAdminHome/>
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
            </MDBTabs>
          </MDBCol>
          <MDBCol size='9'>
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === 'tab1'}>

              <Container>
            <h1>Grievance Dashboard</h1>
            <Row>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#337AB7"}}>All Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#F0AD4E"}}>Pending Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#5CB85C"}}>Resolved Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#337AB7"}}>Maximum Grievances Resolve Category</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
                <br/>
                <Row>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#5CB85C"}}>% Grievance Resolved</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">60%</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#D9534F"}}>Escalated Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#D9534F"}}>Reopen Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#D9534F"}}>Grievances Pending greater than 7 days and less than 30 days</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            <br/>
            <Row>
            <Col >
                    <Card
                    
                    // style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#3399FF"}}>Citizen Satisfaction</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">58.23%</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    // style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#3399FF"}}>Average Rating</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">3.55</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    // style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader fontstyle" style={{backgroundColor:"#3399FF"}}>%feedback recieved</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title className="fontstyle">47.35%</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab2'}><Addgrievancetype/></MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab3'}><Viewgrievancetypes/></MDBTabsPane>
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