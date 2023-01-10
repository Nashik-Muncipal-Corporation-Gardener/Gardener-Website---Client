
import React ,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {Container, Tab, Tabs} from 'react-bootstrap';
import Navbar from './NavigationBar';
import Footer from './footer';
import Mygrievance from './Grievance/Mygrievance';
import Registergrievance from './Grievance/Registergrievance';
import Trackgrievance from './Grievance/Trackgrievance';
function Grievance() {
  return (
    <div className='grievance'>
        <Navbar/>
        <Container>
        <Tabs
      defaultActiveKey="MyGrievances"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="MyGrievances" title="My Grievances">
        <Mygrievance/>
      </Tab>
      <Tab eventKey="RegisterGrievance" title="Register Grievance">
        <Registergrievance/>
      </Tab>
      <Tab eventKey="TrackGrievance" title="Track Grievance">
        <Trackgrievance/>
      </Tab>
      <Tab eventKey="FeedbackGrievance" title="FeedbackGrievance" >
        
      </Tab>
      <Tab eventKey="Maps" title="View on Maps" >
        
      </Tab>
    </Tabs>
        </Container>
        {/* <Footer/> */}
    </div>
  )
}

export default Grievance