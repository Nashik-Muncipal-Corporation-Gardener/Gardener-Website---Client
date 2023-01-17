import { Icon } from "@iconify/react";
import axios from "axios";
import { MDBCardText, MDBCardTitle, MDBCol, MDBFile, MDBInput, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Button, Card, Container, DropdownButton, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Addgardens() {
  return (
    <div>
        <div className='permissionsform'>
                <Container>
                <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>Add Garden</ListGroup.Item>
                    <ListGroup.Item >
                    <MDBRow>
                            <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text'/>                       
                    </MDBRow>
                    <MDBRow>
                            <MDBInput wrapperClass='mb-4' placeholder='Area' id='form1' type='text'/>                       
                    </MDBRow>
                    <MDBRow>
                            <MDBInput wrapperClass='mb-4' placeholder='Division' id='form1' type='text'/>                       
                    </MDBRow>
                    <MDBRow>
                            <MDBInput wrapperClass='mb-4' placeholder='Year' id='form1' type='number'/>                       
                    </MDBRow>
                    <Button style={{width:'10%',color:'aliceblue', backgroundColor:'#207FB0'}}>Submit</Button>
                </ListGroup.Item>
                </ListGroup>
                </Card>
                
                </Container>
                </div>

            </div>
  )
}

export default Addgardens