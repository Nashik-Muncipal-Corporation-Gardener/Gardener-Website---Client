import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { MDBSelect,MDBInput, MDBCol,MDBRow,MDBFile, MDBBtn} from 'mdb-react-ui-kit';
import {Row,Dropdown,DropdownButton, Col,Container , Button,Card,ListGroup} from 'react-bootstrap'
import '../../css/grievances.css'
function Registergrievance() {

    const [value_type,setValuetype]=useState('Grievance Type')
    const grievance_types=['Abc','Xyz']

    const handleSelect=(e)=>{
        console.log(e);
        setValuetype(e)
      }
  return (
    <div className='registergrievance'>
        <Container>
            
        <Card style={{width:'100%'}}>
        <ListGroup variant="flush">
            <ListGroup.Item style={{backgroundColor:'#207fb0',color:'aliceblue'}}>Grievance Form</ListGroup.Item>
            <ListGroup.Item style={{padding:'5%'}} >
            <MDBRow>
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
          </MDBRow>
          <br></br>
          <MDBRow>
          <MDBInput wrapperClass='mb-4' placeholder='Grievance Description' id='form1' type='textarea'/>
          </MDBRow>
          <MDBRow>
            <MDBCol>
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
            <MDBCol>
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
          </MDBRow>
          <br></br>
          <MDBRow>
          <MDBInput wrapperClass='mb-4' placeholder='Street Address' id='form1' type='text'/>
          </MDBRow>
          <MDBRow>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Landmark' id='form1' type='text'/>
            </MDBCol>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Area' id='form1' type='text'/>
        </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Pincode' id='form1' type='number'/>
            </MDBCol>
            <MDBCol>
            <MDBFile id='customFile' />
        </MDBCol>
          </MDBRow>
          <MDBRow>
        <center><MDBBtn className='registergrievancebtn'>Submit</MDBBtn></center>
          </MDBRow>
        </ListGroup.Item>
        </ListGroup>
        </Card>
        
      </Container>
    </div>
  )
}

export default Registergrievance