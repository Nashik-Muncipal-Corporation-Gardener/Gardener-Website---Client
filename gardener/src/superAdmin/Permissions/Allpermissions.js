import React,{useState,useEffect} from 'react'
import { Container,Table,Button, Modal,Col,Row,Card, ListGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import '../../css/userpermissions.css'
import { Icon } from '@iconify/react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import url from "../../Uri";
import {
    
    MDBFile
  }
  from 'mdb-react-ui-kit';

function Allpermissions() {
    const [alert, setAlert] = useState(false);
    const [show, setShow] = useState(false);
    const [showform,setShowForm] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [permissiondata,setPermissionData] = useState();
    const [isPermissionsFetched,setIsPermissionsFetched] = useState();


    const navigate = useNavigate();

    useEffect(() => {
     if(!isPermissionsFetched) {
      axios.get(url+"/permission-form",{headers:{
        "Content-Type":"multipart/form-data",
        "Authorization":"Bearer "+localStorage.getItem("jwtTokenSuperAdmin")
        // "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW12ZXJtYXN2M…DYwfQ.NlezN48dWVuEaIaCQtxMuJVXunqhUT-hK5WxZmIW1Zo"
    }}).then((res)=>{
        setPermissionData(res.data);
        setIsPermissionsFetched(true);
        
    }).catch(err=>{
        console.log(err);
    })
     }
    });
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
      function handleShowForm(permission){
        // console.log(breakpoint);
        // setFullscreen(breakpoint);
        // setShowForm(true);
        localStorage.setItem("permission",JSON.stringify(permission));
        navigate("/super-admin/appliedpermission");
      }
    const handleClose = () => setAlert(false);
    const handleAlert = () => setAlert(true);
      if(isPermissionsFetched){
        console.log(permissiondata);
      }
  return (
    <div>
        <Container style={{padding:'2%'}}>
            <center><h6>All Permissions</h6></center>
         <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Permission ID</th>
              <th>Permission Type</th>
              <th>Applied On</th>
              <th>Permission Form</th>
              <th>Panchanama Form</th>
              <th>Advertisement</th>
              <th>Status</th>
              <th></th>
    
            </tr>
          </thead>
          {isPermissionsFetched &&
          <tbody>
            
            {permissiondata.map((permission)=>{return<tr>
              <td>{permission.id}</td>
              <td>{permission.title}</td>
              <td>{permission.createdAt}</td>
              <td><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm" onClick={()=>handleShowForm(permission)}>View</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
              
              {
                (permission.status=="In Review")?(
                  
                    <>
                    <td><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm">Upload Panchanama</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
                    </>
                  
                ):(
                  
                    <>
                    <td><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm">View</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
                    {/* <td><p style={{backgroundColor:'success',width:'100%'}} variant="success" size="sm" onClick={handleShow}>{permission.status}</p></td> */}
                    </>
                  )
                
              }

              {
                (permission.status=="Panchama processed")?(
                  
                  <>
                  <td><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm">View</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
                  </>
                
              ):(
                
                  <>
                  <td><Button style={{backgroundColor:'success',width:'50%'}} variant="success" size="sm">Upload Advertisement</Button><Icon icon="ri:information-fill" style={{color: "#51907b", width:"30", height:"100%",marginLeft:'10px'}} /></td>
                  {/* <td><p style={{backgroundColor:'success',width:'100%'}} variant="success" size="sm" onClick={handleShow}>{permission.status}</p></td> */}
                  </>
                )

              }

              <td><p style={{backgroundColor:'success',width:'100%'}} variant="success" size="sm" onClick={handleShow}>{permission.status}</p></td>
              
              <td><Button style={{backgroundColor:'success',width:'100%'}} variant="danger" size="sm" onClick={handleAlert}>Decline</Button></td>

            </tr>})} 
          </tbody>}
        </Table>
       
 
        <Modal show={showform} fullscreen={fullscreen} onHide={() => setShowForm(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Container>
            <Row>
                <MDBFile style={{marginBottom:20}} label='Add panchanama pdf' accept="application/pdf" id='customFile' />    
            </Row>
            <Row>
            <Button style={{width:'10%'}}>HI</Button>
            </Row>
                <hr></hr>
            <Row>
                <MDBFile style={{marginBottom:20}} label='Add advertisement pdf' accept="application/pdf" id='customFile' />    
            </Row>
            <Row>
            <Button style={{width:'10%'}}>Submit</Button>
            </Row>


        </Container>
            </Modal.Body>
           
          </Modal>

        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Container>
            <Row>
                <MDBFile style={{marginBottom:20}} label='Add panchanama pdf' accept="application/pdf" id='customFile' />    
            </Row>
            <Row>
            <Button style={{width:'10%'}}>Submit</Button>
            </Row>
                <hr></hr>
            <Row>
                <MDBFile style={{marginBottom:20}} label='Add advertisement pdf' accept="application/pdf" id='customFile' />    
            </Row>
            <Row>
            <Button style={{width:'10%'}}>Submit</Button>
            </Row>


        </Container>
            </Modal.Body>
           
          </Modal>
    
          <Modal show={alert} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to decline the permission</Modal.Title>
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

export default Allpermissions