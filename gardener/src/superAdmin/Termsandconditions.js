import { Icon } from "@iconify/react";
import axios from "axios";
import { MDBTextArea , MDBRow} from 'mdb-react-ui-kit';
import React, { useState } from "react";
import { Button, Card, Container, DropdownButton, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "./home/Sidebar/Sidebar";
function Termsandconditions() {
  return (
    <div>
<div className='permissionsform'>
            <Sidebar/>
                <Container>
                <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>Add Terms and Conditions</ListGroup.Item>
                    <ListGroup.Item >
                    <MDBRow>
                    <MDBTextArea placeholder='Add Terms and Conditions' id='textAreaExample' rows={4} />                   
                    </MDBRow>
                    <br></br>
                    <Button style={{width:'10%',color:'aliceblue', backgroundColor:'#207FB0'}}>Submit</Button>
                </ListGroup.Item>
                </ListGroup>
                </Card>
                
                </Container>
                </div>

            </div>
  )
}

export default Termsandconditions