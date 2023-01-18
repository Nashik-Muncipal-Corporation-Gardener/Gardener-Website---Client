import React, { useState,useEffect } from 'react';
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
import url from '../Uri';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './NavigationBar';
import {Container,Row, Col, Form, Button } from 'react-bootstrap';
// import '../css/signin.css'
function Signin() {

  const navigate = useNavigate();

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const [email,setEmail] = React.useState('');
    const [emailID,setEmailID] =useState('');
    const [otp,setOtp] = useState();
    const [sentotp,setSentOtp] = useState();
    const [password,setPassword] = React.useState('');
    const [confirmPassword,setConfirmPassword] = React.useState('');
    const [name,setName] = React.useState('');
    const [contact,setContact] = React.useState('');
    const [state,setState] = React.useState('');
    const [DOB,setDOB] = React.useState('');
    const [address,setAddress] = React.useState('');
    const [city,setCity] = React.useState('');
    const [checkBox,setCheckBox] = React.useState(false);
    const [verified,setVerified] = useState(false);
    const handleEmailInput=(event)=>{
      // console.log("Event"+event.target.value)
      setEmail(event.target.value)
      // email = event.target.value
    }
    const sendOtp=()=>{
      setEmailID(email);
    }

    const handleOtpInput=(event)=>{
      setOtp(event.target.value)
    }

    const verifyOtp=()=>{
      // console.log(otp);
      // console.log(sentotp)
      if(sentotp == otp){
        setVerified(true);
      }
      else{
        alert('Incorrect OTP');
      }
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }

    const handleConfirmmPassword = (event)=>{
        setConfirmPassword(event.target.value);
    }

    const handleName = (event)=>{
        setName(event.target.value);
    }

    const handleContact = (event)=>{
        setContact(event.target.value);
    }

    const handleState = (event)=>{
        setState(event.target.value);
    }

    const handleDOB = (event)=>{
        setDOB(event.target.value);
    }
    const handleAddress = (event)=>{
        setAddress(event.target.value);
    }

    const handleCity = (event)=>{
      setCity(event.target.value);
    }

function checkboxStatus(){
  // e.preventDefault();
  if(checkBox==true){
      setCheckBox(false)
  }else{
      setCheckBox(true)
  }
}

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  
  useEffect(()=>{
    if(emailID === ""){

    }
    else{
    axios.get(url+"/verifyEmail/"+emailID).then((res)=>{
        if(res.status==200){    
            setSentOtp(res.data.message);
        }else{
            alert("Please enter correct email address")
        }
    }).catch(err=>{
        console.log(err);
        alert("Please enter correct email address")
    })}
},[emailID]);


  async function registerUser(e){
    e.preventDefault();

    // alert('Registering S
    if (email === "") {
        alert("Email is empty");
        // console.log("Email is empty");
        // toast.error(<b>Please enter email</b>)
        return;
    }else if(password.length<6){
        alert("Password must be atleast of 6 characters")
    }else if(password!==confirmPassword){
        alert("Password and confirm password must be same")
    }else if(name===""){
        alert("Name is empty")
    }else if(contact.length!=10 ){
        alert("Please enter 10 digit mobile number")
    }else if(state===""){
      alert("State is empty ")
    }else if(city===""){
      alert("City is empty ")
    }else if(DOB===""){
      alert("Date of Birth is empty ")
    }else if(address===""){
      alert("Address is empty ")
    }else if(checkBox==false){
        alert("Please agree to checkbox!!")
    }else{
        console.log("Checkbox",""+document.getElementById("flexCheckDefaultSuperAdmin"));
        var form_data_body = {
            "email":email,
            "name":name,
            "dateOfBirth":DOB,
            "phoneNos":contact,
            "address":address,
            "city":city,
            "state":state,
            "password":password,
        }
        axios.post(url+"/citizen/register",form_data_body,{
            headers:{
                "Content-Type":"multipart/form-data",
            },
        }).then(function(response){
            if(response.status==201){
                console.log("Inside successfull response")
                localStorage.setItem("jwtTokenUser",response.data.token);
                alert("User registered successfully!!");
                navigate("/");
            }else{
                alert("Inside else")
            }
        }).catch(function(error){
            console.log("Error",error);
        })
    }
}

  return (
    <div className='signin'>
    {/* <Navbar/> */}
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
          
          <MDBRow>
          <MDBCol md='8'>
          <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email' onChange={handleEmailInput}/>
            </MDBCol>
            <MDBCol md='4'>
            <MDBBtn className="mb-4 w-100" onClick={sendOtp}>Send OTP</MDBBtn>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
          <MDBCol md='8'>
            <MDBInput wrapperClass='mb-4' placeholder='OTP' id='form1' type='number' onChange={handleOtpInput} />
            </MDBCol>
            <MDBCol md='4'>
            <MDBBtn className="mb-4 w-100" onClick={verifyOtp}>Verify</MDBBtn>
            </MDBCol>
            
          </MDBRow>
          <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text' onChange={handleName}/>

        
          <MDBRow>
            <MDBCol md='3'>
            <MDBBtn className="mb-4 w-100" disabled >DOB</MDBBtn>
            </MDBCol>
            <MDBCol md='9'>
            <MDBInput wrapperClass='mb-4' placeholder='DOB' id='form1' type='date' onChange={handleDOB}/>
            </MDBCol>
          </MDBRow>
          <MDBInput wrapperClass='mb-4' placeholder='Contact' id='form1' type='number' onChange={handleContact} />
          <MDBInput wrapperClass='mb-4' placeholder='Street' id='form1' type='text' onChange={handleAddress} />
          <MDBInput wrapperClass='mb-4' placeholder='City' id='form1' type='text' onChange={handleCity}/>
          <MDBInput wrapperClass='mb-4' placeholder='State' id='form1' type='text' onChange={handleState}/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password' onChange={handlePassword}/>
          <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form1' type='password' onChange={handleConfirmmPassword}/>


          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' onChange={checkboxStatus} />
          </div>
          {(verified && <MDBBtn  className="mb-4 w-100" onClick={registerUser}>Sign up</MDBBtn>) || <MDBBtn  className="mb-4 w-100" onClick={registerUser} disabled>Sign up</MDBBtn> }
          

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
    </div>
  )
}

export default Signin