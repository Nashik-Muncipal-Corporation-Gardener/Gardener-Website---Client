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
import SuperAdminHome from '../home/SuperAdminHome'

function AddNews() {
    
  return (
    <div className='signin'>
    <SuperAdminHome/>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    <h1 style={{fontSize:30}}>Add News</h1>
    <form>
      <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Title' />
      <MDBTextArea style={{marginBottom:20}} placeholder='Discription' rows={4} />
      <MDBFile style={{marginBottom:20}} label='Add news pdf' id='customFile' />

      <MDBBtn type='submit' className='mb-4' block>
        Add News
      </MDBBtn>

    </form>
    </MDBContainer>
    <h1>Previous News</h1>
    </div>
  )
}

export default AddNews