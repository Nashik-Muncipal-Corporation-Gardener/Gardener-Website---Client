import React, { ChangeEvent, useRef, useState, useEffect } from 'react'
import { Container, Table, Button, Modal, Col, Row, Card, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import '../../css/userpermissions.css'
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import url from "../../Uri";
import {

  MDBFile
}
  from 'mdb-react-ui-kit';
  import axios from 'axios';
import SuperAdminHome from '../home/SuperAdminHome';
function Allpermissions() {


 


  const [alert, setAlert] = useState(false);
  const [permissiondata, setPermissionData] = useState();
  const [isPermissionsFetched, setIsPermissionsFetched] = useState();
  const [panchanamafile, setPanchanamafile] = useState();
  const [advertisementfile, setAdvertisementfile] = useState();

  const navigate = useNavigate();

  const handleClose = () => setAlert(false);

  console.log("token: "+localStorage.getItem("jwtTokenSuperAdmin"))
  useEffect(() => {
    if (!isPermissionsFetched) {
      axios.get(url + "/permission-form", {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
          // "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW12ZXJtYXN2M…DYwfQ.NlezN48dWVuEaIaCQtxMuJVXunqhUT-hK5WxZmIW1Zo"
        }
      }).then((res) => {
        setPermissionData(res.data);
        setIsPermissionsFetched(true);

      }).catch(err => {
        console.log(err);
      })
    }
  });

  function handleShow (id)  {
    localStorage.setItem("currentID",id)
    setAlert(true)

  }

  function handleShowForm(permission) {
    localStorage.setItem("permission", JSON.stringify(permission));
    navigate("/super-admin/appliedpermission");
  }

  if (isPermissionsFetched) {
    console.log(permissiondata);
  }

  

  function handleAdvertisementUpload(id){
    // e.preventDefault();
    setAdvertisementfile(document.getElementById("advertisementfile").files[0])
    console.log("file: "+advertisementfile)  
    if (advertisementfile === null) {
        alert("Select File");
        return;
    }else{
      var formData = new FormData();
      formData.append("file",advertisementfile);
      formData.append("id",id);

      console.log("form data: "+formData)
       
      axios.post(url+"/permission-form/upload-advertisement",formData,{
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': 'Bearer '+localStorage.getItem("jwtTokenSuperAdmin")
        }
      }).then(function(response){
        if(response.status==200){
          console.log("Advertisement Uploaded successfully")
          window.location.reload();
        }else{
          console.log("Something went wrong")
          console.log(response)
        }
      }).catch(function(error){
        console.log(error)
        console.log("Something went wrong")
      })
    }
  }
  
  function handlePanchamaUpload(id){
    // e.preventDefault();
    setPanchanamafile(document.getElementById("panchanamafile").files[0])
    console.log("file: "+panchanamafile)  
    if (panchanamafile === null) {
        alert("Select File");
        return;
    }else{
      var formData = new FormData();
      formData.append("file",panchanamafile);
      formData.append("id",id);

      console.log("form data: "+formData)
       
      axios.post(url+"/permission-form/upload-panchama",formData,{
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': 'Bearer '+localStorage.getItem("jwtTokenSuperAdmin")
        }
      }).then(function(response){
        if(response.status==200){
          console.log("Panchanama Uploaded successfully")
          window.location.reload();
        }else{
          console.log("Something went wrong")
          console.log(response)
        }
      }).catch(function(error){
        console.log(error)
        console.log("Something went wrong")
      })
    }
  }

  function declinePermission(){
    // e.preventDefault();
   const id= localStorage.getItem("currentID")
    // alert("Are you sure you want to decline the permission")
      var formData = new FormData();
      formData.append("id",id);
      console.log("form data: "+formData)
       
      axios.post(url+"/permission-form/declineApproval",formData,{
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': 'Bearer '+localStorage.getItem("jwtTokenSuperAdmin")
        }
      }).then(function(response){
        if(response.status==200){
          console.log("Permission declined successfully")
          window.location.reload();
        }else{
          console.log("Something went wrong")
          console.log(response)
        }
      }).catch(function(error){
        console.log(error)
        console.log("Something went wrong")
      })

      setAlert(false)
    }
  

    // console.log("Token: "+ localStorage.getItem("jwtTokenSuperAdmin"))
    // const[permissions,setPermissions] = useState([]);

    // useEffect(()=>{
    //   if(!isPermissionsFetched){
    //     axios.get(url+"/permission-form",{
    //       "headers":{
    //         "Authorization": "Bearer "+localStorage.getItem("jwtTokenSuperAdmin")
    //       }
    //     }).then(function(response){
    //       if(response.status==200){
    //         console.log(response.data)
    //         setPermissions(response.data)
    //       }else{
    //         alert("Something went wrong")
    //       }
    //     }).catch(function(error){
    //       console.log(error)
    //     })
  
    //     console.log("per: "+permissions)
    //     setIsPermissionsFetched(true)
    //   }   
      
    // })



  return (
    <div>
      <SuperAdminHome/>
        <center><h6>All Permissions</h6></center>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
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

              {
              permissiondata.map(permission => {
                return (
                <tr>
                  <td>{permission.id}</td>
                  <td>{permission.title}</td>
                  <td>{permission.createdAt}</td>
                  <td><Button style={{ backgroundColor: 'success', width: '50%' }} variant="success" size="sm" onClick={() => handleShowForm(permission)}>View</Button><Icon icon="ri:information-fill" style={{ color: "#51907b", width: "30", height: "100%", marginLeft: '10px' }} /></td>

                  {
                    (permission.status == "In Review") ? (

                      <>
                        <td>
                          <MDBFile  type="file" style={{ marginBottom: 20 }} label='Add panchanama pdf' accept="application/pdf" id='panchanamafile'  />
                          <Button style={{ backgroundColor: 'success', width: '50%' }} variant="success" size="sm" onClick={()=>handlePanchamaUpload(permission.id)} >Upload</Button><Icon icon="ri:information-fill" style={{ color: "#51907b", width: "30", height: "100%", marginLeft: '10px' }} />
                        </td>
                      </>

                    ) : (

                      <>
                        <td><Button style={{ backgroundColor: 'success', width: '50%' }} variant="success" size="sm">View</Button><Icon icon="ri:information-fill" style={{ color: "#51907b", width: "30", height: "100%", marginLeft: '10px' }} /></td>
                        {/* <td><p style={{backgroundColor:'success',width:'100%'}} variant="success" size="sm" onClick={handleShow}>{permission.status}</p></td> */}
                      </>
                    )
                    

                  }

                  {
                    (permission.status == "Panchama processed") ? (

                      <>
                        <td><Button style={{ backgroundColor: 'success', width: '50%' }} variant="success" size="sm">View</Button><Icon icon="ri:information-fill" style={{ color: "#51907b", width: "30", height: "100%", marginLeft: '10px' }} /></td>
                      </>

                    ) : (

                      <>
                        <td>
                        <MDBFile  type="file" style={{ marginBottom: 20 }} label='Add panchanama pdf' accept="application/pdf" id='advertisementfile'  />
            
                          <Button style={{ backgroundColor: 'success', width: '50%' }} onClick={()=>handleAdvertisementUpload(permission.id)} variant="success" size="sm">Upload</Button><Icon icon="ri:information-fill" style={{ color: "#51907b", width: "30", height: "100%", marginLeft: '10px' }} /></td>
                        {/* <td><p style={{backgroundColor:'success',width:'100%'}} variant="success" size="sm" onClick={handleShow}>{permission.status}</p></td> */}
                      </>
                    )

                  }

                  <td><p style={{ backgroundColor: 'success', width: '100%' }} variant="success" size="sm">{permission.status}</p></td>

                  <td><Button style={{ backgroundColor: 'success', width: '100%' }} variant="danger" size="sm" onClick={()=>handleShow(permission.id)}>Decline</Button></td>

                </tr>
                )
              })}
            </tbody>}
        </Table>

        <Modal show={alert} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={declinePermission}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Allpermissions