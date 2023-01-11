import React,{useState} from 'react'
import Navbar from './NavigationBar'
import { Container,ListGroup,Card,Button, Dropdown,DropdownButton} from 'react-bootstrap';
import '../css/permissions.css'
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import {
    MDBFile,
    MDBInput,
    MDBCheckbox,
    MDBRow, MDBCol
  }
  from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.css";
function Permissionform() {

    const [value_type,setValuetype]=useState('Parisar')
    const grievance_types=['Abc','Xyz']

    const handleSelect=(e)=>{
        console.log(e);
        setValuetype(e)
      }

  

  return (
    <div className='permissionsform'>
        <Navbar/>
        <Container>
        <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>Personal Information</ListGroup.Item>
            <ListGroup.Item >
            <MDBRow>
          <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text'/>
            </MDBCol>
            <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text'/>
            </MDBCol>
            <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Contact' id='form1' type='number'/>
            </MDBCol>
            
          </MDBRow>
          <MDBRow>
          <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email'/>
            </MDBCol>
            <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Address Line 1' id='form1' type='text'/>
            </MDBCol>
            <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Address Line 2' id='form1' type='number'/>
            </MDBCol>
          </MDBRow>
        </ListGroup.Item>
        </ListGroup>
        </Card>
        <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>Tree Cutting Information</ListGroup.Item>
            <ListGroup.Item >
            <MDBRow>
          <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Prajati' id='form1' type='text'/>
            </MDBCol>
            <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Total' id='form1' type='Number'/>
            </MDBCol>
            <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Reason' id='form1' type='text'/>
            </MDBCol>
            
            
            
          </MDBRow>
          <MDBRow>
          <MDBCol md='4'>
          <DropdownButton
                    alignRight
                    title={value_type}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                        >
                            {
                                grievance_types.map(g=>{
                                    return(
                                        <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                    )
                                })
                            }
                    </DropdownButton>
            </MDBCol>
            <MDBCol md='4'>
            <MDBInput wrapperClass='mb-4' placeholder='Garden Department' id='form1' type='text' disabled/>
            </MDBCol>
            <MDBCol md='4'>
            </MDBCol>
          </MDBRow>
        </ListGroup.Item>
        </ListGroup>

        </Card>

        <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>Documents Needed</ListGroup.Item>
            <ListGroup.Item >
            <MDBRow>
                <MDBCol md='6'>
                <MDBFile label='Document related to ownership of property (7/12 extract, Property Card, etc.) (upload only pdf format)' id='customFile' />
                </MDBCol>
                <MDBCol md='6'>
                <MDBFile label='Document Related of Location of Tree (upload only pdf format)' id='customFile' />
                </MDBCol>
                
            </MDBRow>
            <MDBRow>
                <MDBCol md='6'>
                <MDBFile label='Photographs of tree (upload only png, jpg, jpej, gif format)' id='customFile' />
                </MDBCol>
                <MDBCol md='6'>
                <MDBFile label='Any permission related to construction at site in case tree cutting is required for some construction work (upload only pdf format)' id='customFile' />
                </MDBCol>  
            </MDBRow>
            <MDBRow>
                <MDBCol md='6'>
                <MDBFile label='NOC in case of joint ownership of property (upload only pdf format) ' id='customFile' />
                </MDBCol>  
            </MDBRow>
        </ListGroup.Item>
        </ListGroup>

        </Card>
        {/* <LoadCanvasTemplate /> */}
        </Container>
    </div>
  )
}

export default Permissionform