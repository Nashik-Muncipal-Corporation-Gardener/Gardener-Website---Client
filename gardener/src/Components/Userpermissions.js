import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Modal, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from '@iconify/react';
import Navbar from './NavigationBar'
import '../css/userpermissions.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import url from '../Uri';
function Userpermissions() {
  const [alert, setAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleClose = () => setAlert(false);
  const handleAlert = () => setAlert(true);

  const[permissions,setPermissions] = useState([]);
  const[isPermissionsFetched,setIsPermissionsFetched] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    if(!isPermissionsFetched){
      axios.get(url+"/permission-form/citizen",{
        "headers":{
          "Authorization": "Bearer "+localStorage.getItem("jwtTokenUser")
        }
      }).then(function(response){
        if(response.status==200){
          console.log(response.data)
          setPermissions(response.data)
          setIsPermissionsFetched(true);
        }else{
          alert("Something went wrong")
        }
      }).catch(function(error){
        console.log(error)
      })
    }   
  })
  // if(isPermissionsFetched){
  //   console.log(permissions);
  // }
  return (
    <div className='userpermissions'>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Permission ID</th>
              <th>Permission Type</th>
              <th>Applied On</th>
              <th>Status</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {
              permissions.map((permission)=>{
                return(
                  <tr>
                    <td>{permission.id}</td>
                    <td>{permission.title}</td>
                    <td>{permission.createdAt}</td>
                    <td><Button style={{ backgroundColor: 'success' }} onClick={() => handleShow(true)} variant="success" size="sm">{permission.status}</Button></td>
                    <td ><Button onClick={() => handleAlert(true)} style={{ marginLeft: '10px' }} variant="danger" size="sm">Withdraw</Button></td>

                  </tr>
                )
              })
            }
           
          </tbody>
        </Table>

        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Step</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Review</th>

                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td>1</td>
                    <td>Panchanama</td>
                    <td><Button variant="success  " size="sm" disabled>Scheduled</Button>
                    </td>
                    <td>Scheduled on: 01/01/2022</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Modal.Body>

        </Modal>

        <Modal show={alert} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to withdraw your application ?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" >
              Yes Confirm
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </div>
  )
}

export default Userpermissions