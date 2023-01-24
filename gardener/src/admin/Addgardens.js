import {
  MDBBtn,
  MDBInput,
  MDBFile
}
from 'mdb-react-ui-kit';
import React, { useState } from "react";
import { Button, Card, Container, DropdownButton, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SuperAdminHome from '../superAdmin/home/SuperAdminHome'

import axios from 'axios'
import url from '../Uri';





function Addgardens() {

  const navigate = useNavigate()

  function handleGardenFilesUpload(event) {
    event.preventDefault();
    const gardensFile = document.getElementById('gardensFile').files[0]
    console.log(gardensFile)
  
    var form_data = new FormData();

    form_data.append('file', gardensFile);

    axios.post(url+"/excel/gardens",form_data,{
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
      }
    }).then(function(response){
      if(response.status==200){
        alert("Gardens Uploaded Successfully")
      }else{
        console.log("Error in uploading gardens",response.data)
      }
    }).catch(function(error){
      console.log(error)
    })
  }


  function handleJoggingTrackFilesUpload(event){
    event.preventDefault();
    const joggingTrackFile = document.getElementById('joggingTrackFile').files[0]

    console.log(joggingTrackFile)

    var form_data = new FormData();

    form_data.append('file', joggingTrackFile);

    axios.post(url+"/excel/joggingTrack",form_data,{
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
      }
    }).then(function(response){
      if(response.status==200){
        alert("Jogging Track Uploaded Successfully")
      }else{
        console.log("Error in uploading gardens",response.data)
      }
    }).catch(function(error){
      console.log(error)
    })

  }


  return (
        <div className='signin' style={{padding:'2%'}}>
        <div className='addgarden_container'>
        <h1 style={{fontSize:30}}>Garden</h1>
        <form >
          <MDBFile style={{marginBottom:20}} label='Upload Gardens File' id='gardensFile' />

          <Button type='submit' className='mb-4' block onClick={handleGardenFilesUpload}> 
            Upload Gardens
          </Button> 

          <MDBFile style={{marginBottom:20}} label='Upload Jogging Track File' id='joggingTrackFile' />
          
          <Button type='submit' className='mb-4' block onClick={handleJoggingTrackFilesUpload}>
            Upload Jogging Tracks
          </Button> 
          
        </form>
        </div>
        </div>
  )
}

export default Addgardens