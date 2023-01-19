import React, { useState, useEffect } from 'react'
import { Container, Table, Button, Modal, Col, Row, Card, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import '../../css/userpermissions.css'
import { MDBCol, MDBInput, MDBRow, MDBTextArea } from 'mdb-react-ui-kit';

function AppliedPermissionForm() {

    const permission = JSON.parse(localStorage.getItem("permission"));

    console.log("Permission", permission)

    function handleFileClick(pos) {
        permission.documents.map((d, p) => {
            if (p == pos) {
                console.log("Position matched",p)
                return (
                    <div className="modal">
                        <div className="modalContent">
                            <img src={d.data} style="width:600px; height:500px;" frameborder="0"></img>
                        </div>
                    </div>
                );
                // const fileURL = URL.createObjectURL(d.data);
                // let newWin = window.open(fileURL, "pdf show", "width=800,height=600");
                // newWin.focus();

                // console.log("Data",d.data)

                const file = new Blob([new Uint8Array(d.data)], { type: 'application/pdf' });
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL,"pdf show","width=800,height=600");
            }
        })
    }

    return (
        <div className='permissionsform'>
            <Container>
                {/* <Button>Click</Button> */}
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Personal Information</ListGroup.Item>
                        <ListGroup.Item >
                            <MDBRow>
                                <MDBCol >
                                    <MDBTextArea wrapperClass='mb-4' placeholder='Name' id='form1' type='text' value={permission.title} disabled />
                                </MDBCol>
                                <MDBCol>
                                    <MDBTextArea wrapperClass='mb-4' placeholder='Email' id='form1' type='email' value={permission.email} disabled />
                                </MDBCol>

                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBTextArea wrapperClass='mb-4' placeholder='Contact' id='form1' type='number' value={permission.phone} disabled />
                                </MDBCol>
                                <MDBCol >
                                    <MDBTextArea wrapperClass='mb-4' placeholder='Address Line 1' id='form1' type='text' value={permission.address} disabled />
                                </MDBCol>

                            </MDBRow>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{permission.title}</ListGroup.Item>
                        <ListGroup.Item >
                            <MDBRow>
                                <MDBCol md='4'>
                                    <MDBInput wrapperClass='mb-4' placeholder='Prajati' id='form1' type='text' value={permission.prajati} disabled />
                                </MDBCol>
                                <MDBCol md='4'>
                                    <MDBInput wrapperClass='mb-4' placeholder='Total' id='form1' type='Number' value={permission.total} disabled />
                                </MDBCol>
                                <MDBCol md='4'>
                                    <MDBInput wrapperClass='mb-4' placeholder='Reason' id='form1' type='text' value={permission.reason} disabled />
                                </MDBCol>



                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='4'>
                                    {/* <DropdownButton
                                        alignRight
                                        title={value_type}
                                        id="dropdown-menu-align-right"
                                        onSelect={handleSelect}
                                    >
                                        {
                                            grievance_types.map(g => {
                                                return (
                                                    <Dropdown.Item eventKey={g} >{g}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </DropdownButton> */}
                                    <MDBInput wrapperClass='mb-4' placeholder={permission.parisar} id='form1' type='text' disabled />
                                </MDBCol>
                                <MDBCol md='4'>
                                    <MDBInput wrapperClass='mb-4' placeholder='Garden Department' id='form1' type='text' disabled />
                                </MDBCol>
                                <MDBCol md='4'>
                                </MDBCol>
                            </MDBRow>
                        </ListGroup.Item>
                    </ListGroup>

                </Card>

                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Documents Uploaded</ListGroup.Item>
                        <ListGroup.Item >
                            {
                                permission.documents.map((d, pos) => {
                                    return (
                                        <MDBRow>
                                            <MDBCol md='6'>
                                                <Button onClick={() => handleFileClick(pos)}>{"View File " + (pos + 1)}</Button>
                                                <br />
                                            </MDBCol>
                                        </MDBRow>
                                    )

                                })

                                // permission.questions.map((d, pos) => {
                                //     return (
                                //         <MDBRow>
                                //             <MDBCol md='6'>
                                //                 <input type="file" label={d} id={pos} />
                                //             </MDBCol>
                                //         </MDBRow>
                                //     );
                                // })
                            }

                        </ListGroup.Item>
                    </ListGroup>

                </Card>
                <br />
                {/* <LoadCanvasTemplate /> */}
            </Container>
        </div>
    );
}

export default AppliedPermissionForm;