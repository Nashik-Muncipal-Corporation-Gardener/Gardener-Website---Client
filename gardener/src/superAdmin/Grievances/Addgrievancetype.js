import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBRow, MDBCol,
  MDBFile,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import SuperAdminHome from '../home/SuperAdminHome'
import url from '../../Uri';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Addgrievancetype() {

    const [title,setTitle]=useState('')
    // const [image,setImage]=useState([])

    const token=localStorage.getItem("jwtTokenSuperAdmin")
    console.log(token)
    async function addgrievancetype(e){
        e.preventDefault();
    
        if(title==="" ){
            alert("Please enter title")
        }else{
            var form_data_body = {
                "name":title,
                "icon":document.getElementById("grievancelogo").files[0],
                "department":"Garden Department"      
            }
        axios.post(url+"/grievance",form_data_body,{
            headers:{
                "Content-Type":"multipart/form-data",
                "Authorization":"Bearer "+token
            },
        }).then(function(response){
            if(response.status==200){
                console.log("Grievance Type Added")
                // localStorage.setItem("jwtTokenSuperAdmin",response.data.token);
                alert("Grievance Type Added successfully!!");
                window.location.reload();
            }else{
                // alert("Inside else")
                console.log("Error",response);
            }
        }).catch(function(error){
            console.log("Error",error);
        })

    }
    }

    const handleTitle = (event)=>{
        setTitle(event.target.value);
    }
    // const handleImage = (event)=>{
    //     setImage(event.target.value);
    // }

  return (
    <div className='signin'>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    <h1 style={{fontSize:30}}>Add Grievance Type</h1>
    <form>
      <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Title' onChange={handleTitle}/>
      <MDBFile style={{marginBottom:20}} label='Add Icon Image' accept="image/*" id='grievancelogo'   />
      <MDBBtn type='submit' className='mb-4' block onClick={addgrievancetype}>
        Add Grievance
      </MDBBtn>

    </form>
    </MDBContainer>
    
    </div>
  )
}

export default Addgrievancetype