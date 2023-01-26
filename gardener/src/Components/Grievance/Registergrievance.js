import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { MDBSelect, MDBInput, MDBCol, MDBRow, MDBFile, MDBBtn } from 'mdb-react-ui-kit';
import { Row, Dropdown, DropdownButton, Col, Container, Button, Card, ListGroup } from 'react-bootstrap'
import '../../css/grievances.css'
import axios from 'axios';
import url from '../../Uri';
function Registergrievance() {

    const [value_type,setValuetype]=useState('Grievance Type')
    // const grievance_types=['Abc','Xyz']

    const [grievance, setGrievance] = useState([]);
    const [isGrievanceFetched, setIsGrievanceFetched] = useState(false);


    const handleSelect = (e) => {
        console.log(e);
        setValuetype(e)
    }

    function fetchGrievances(){
        axios.get(url+"/grievance").then(function(response){
            if(response.status==200){
                console.log(response.data);
                setGrievance(response.data);
                setIsGrievanceFetched(true);
            }else{
                console.log(response);
            }
        }).catch(function(error){
            console.log(error);
        })
    }

    useEffect(()=>{
        if(!isGrievanceFetched){
            fetchGrievances();
        }
    })

    return (
        <div className='registergrievance'>
            <Container>

                <Card style={{ width: '100%' }}>
                    <ListGroup variant="flush">

                        <ListGroup.Item style={{ backgroundColor: '#207fb0', color: 'aliceblue' }}>Grievance Form</ListGroup.Item>
                        <ListGroup.Item>
                            <MDBRow>
                                {
                                    grievance.map(g => {
                                        return (
                                            <Card style={{ width: '10rem', marginLeft: '10px' }}>
                                                <Card.Img variant="top" style={{ height: '100%', width: '100%' }} src={"data:image/gif;base64,"+g.icon.data} />
                                                <Card.Body>
                                                    <Card.Text>
                                                        {g.name}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </MDBRow>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ padding: '5%' }} >
                            <MDBRow>
                                <MDBCol>
                                <DropdownButton
                                    alignRight
                                    title={value_type}
                                    id="grievance-dropdown-menu-align-right"
                                    onSelect={handleSelect}>
                                    {
                                        grievance.map(g => {
                                            return (
                                                <Dropdown.Item eventKey={g.name}>{g.name}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </DropdownButton>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Garden Department' id='form1' type='text' disabled/>
                                </MDBCol>
                            </MDBRow>
                            <br/>
                            <MDBRow>
                                <MDBInput wrapperClass='mb-4' placeholder='Grievance Description' id='form1' type='textarea' />
                            </MDBRow>
                            <br/>
                            <MDBRow>
                                <MDBInput wrapperClass='mb-4' placeholder='Street Address' id='form1' type='text' />
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Landmark' id='form1' type='text' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Area' id='form1' type='text' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Pincode' id='form1' type='number' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBFile id='customFile' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <center><MDBBtn className='registergrievancebtn'>Submit</MDBBtn></center>
                            </MDBRow>

                        </ListGroup.Item>
                        {/* <ListGroup.Item style={{ padding: '5%' }} >
                            <MDBRow>
                                <MDBCol>
                                    <DropdownButton
                                        alignRight
                                        title={value_type}
                                        id="dropdown-menu-align-right"
                                        onSelect={handleSelect}
                                    >
                                        {
                                            grievance_types.map(g => {
                                                return (
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
                                            grievance_types.map(g => {
                                                return (
                                                    <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </DropdownButton>
                                </MDBCol>
                            </MDBRow>
                            <br></br>
                            <MDBRow>
                                <MDBInput wrapperClass='mb-4' placeholder='Street Address' id='form1' type='text' />
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Landmark' id='form1' type='text' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Area' id='form1' type='text' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Pincode' id='form1' type='number' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBFile id='customFile' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <center><MDBBtn className='registergrievancebtn'>Submit</MDBBtn></center>
                            </MDBRow>
                        </ListGroup.Item> */}
                    </ListGroup>
                </Card>

            </Container>
        </div>
    )
}

export default Registergrievance