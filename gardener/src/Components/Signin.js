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
  MDBRow, MDBCol
}
from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './NavigationBar';
import {Container,Row, Col, Form, Button } from 'react-bootstrap';
// import '../css/signin.css'
function Signin() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div className='signin'>
    <Navbar/>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>


          <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a onClick={() => handleJustifyClick('tab2')} >Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email'/>
          <MDBRow>
          <MDBCol md='9'>
            <MDBInput wrapperClass='mb-4' placeholder='OTP' id='form1' type='number'/>
            </MDBCol>
            <MDBCol md='3'>
            <MDBBtn className="mb-4 w-100" >Verify</MDBBtn>
            </MDBCol>
            
          </MDBRow>
          <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text'/>

          <MDBRow>
            <MDBCol md='3'>
            <MDBBtn className="mb-4 w-100" disabled>DOB</MDBBtn>
            </MDBCol>
            <MDBCol md='9'>
            <MDBInput wrapperClass='mb-4' placeholder='DOB' id='form1' type='date'/>
            </MDBCol>
          </MDBRow>
          <MDBInput wrapperClass='mb-4' placeholder='Contact' id='form1' type='number'/>
          <MDBInput wrapperClass='mb-4' placeholder='Street' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='City' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='State' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password'/>
          <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form1' type='password'/>


          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
    </div>
  )
}

export default Signin