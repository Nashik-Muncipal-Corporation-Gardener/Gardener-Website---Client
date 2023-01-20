import React, { useState, useEffect} from 'react'
import { Container, Table, Button, Modal, Col, Row, Card, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import '../../css/userpermissions.css'
import { MDBCol, MDBInput, MDBRow, MDBTextArea } from 'mdb-react-ui-kit';
import { BsFilePdf } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';
import SuperAdminHome from '../home/SuperAdminHome';

function AppliedPermissionForm() {

    const navigate=useNavigate()

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
                
            }
        })
    }


    function viewPDF(pdf){
        
        navigate('/pdfreader', {state:{pdf}})
    }
    return (
        <div className='permissionsform'>
        <SuperAdminHome/>

            <Container>
                {/* <Button>Click</Button> */}
                <Card>
                    <Table  bordered hover>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>{permission.title}</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{permission.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{permission.email}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{permission.address}</td>
                        </tr>
                        <tr>
                            <td>Contact:</td>
                            <td>{permission.phone}</td>
                        </tr>
                        <tr>
                            <td>Applied On:</td>
                            <td>{permission.createdAt}</td>
                        </tr>
                        <tr>
                            <td>Parisar:</td>
                            <td>{permission.parisar}</td>
                        </tr>
                        <tr>
                            <td>Prajati:</td>
                            <td>{permission.prajati}</td>
                        </tr>
                        <tr>
                            <td>No. of Trees:</td>
                            <td>{permission.total}</td>
                        </tr>
                        <tr>
                            <td>Reason:</td>
                            <td>{permission.reason}</td>
                        </tr>
                        <tr>
                            <td>Documents:</td>
                            <td>
                            {
                                
                                permission.documents.map((d,i) => {
                                    
                                    return (
                                        <>
                                            
                                                <Button style={{width:'20%', backgroundColor:'#207fb !important'}} size='sm'  onClick={() => viewPDF(d)}>View File: {i+1}</Button>
                                        
                                            
                                        </>
                                    )

                                })

                               
                            }
                            </td>
                        </tr>
                        </tbody>
                    </Table>
   
                </Card>
               

                
                {/* <LoadCanvasTemplate /> */}
            </Container>
        </div>
    );
}

export default AppliedPermissionForm;