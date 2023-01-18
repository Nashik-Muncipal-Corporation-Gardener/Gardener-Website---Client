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
function Addgardens() {
  return (
        <div className='signin' style={{padding:'2%'}}>
        <div className='addgarden_container'>
        <h1 style={{fontSize:30}}>Add Garden</h1>
        <form >
          <MDBFile style={{marginBottom:20}} label='Add Image' id='customFile' />
          <MDBFile style={{marginBottom:20}} label='Add Image' id='customFile' />
          <MDBFile style={{marginBottom:20}} label='Add Image' id='customFile' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Garden Name' />
          <MDBInput className='mb-4' type='number' id='form2Example1' placeholder ='Garden Area' />
          <MDBInput className='mb-4' type='number' id='form2Example1' placeholder ='Garden Establishment Year' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Garden Description' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Garden Facilities' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Garden Uniqueness' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Garden Opening Time' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Garden Closing Time' />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Garden Location (add google map link)' />

          <MDBBtn type='submit' className='mb-4' block>
            Submit
          </MDBBtn> 
        </form>
        </div>
        </div>
  )
}

export default Addgardens