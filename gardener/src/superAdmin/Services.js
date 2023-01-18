import React from 'react';
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
import SuperAdminHome from './home/SuperAdminHome';
function Services() {
  return (
    <div className='signin'>
    <SuperAdminHome/>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    <h1 style={{fontSize:30}}>Add New Service</h1>
    <form>
      <MDBInput className='mb-4' type='Service Title' id='form2Example1' placeholder ='Title' />
      <MDBFile style={{marginBottom:20}} label='Add image' id='customFile' />
      <MDBBtn type='submit' className='mb-4' block>
        Add Service
      </MDBBtn>
    </form>
    </MDBContainer>
    </div>
  )
}

export default Services