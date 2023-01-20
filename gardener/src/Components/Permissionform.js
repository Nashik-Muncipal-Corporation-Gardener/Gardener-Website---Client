import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import translate from 'google-translate-api-x';
import '../css/permissions.css'
import {
  MDBFile,
  MDBInput,
  MDBCheckbox,
  MDBRow, MDBCol
}
  from 'mdb-react-ui-kit';

import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import url from '../Uri';
import NavigationBar from './NavigationBar'
function Permissionform() {


  const [value_type, setValuetype] = useState('Parisar')
  const grievance_types = ['Satpur', 'East Nashik', 'West Nashik', 'Panchwati', 'New Nashik (Cidco)', 'Nashik Road', 'Rajeev Gandhi Bhavan']

  const handleSelect = (e) => {
    console.log(e);
    setValuetype(e)
  }


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [prajati, setPrajati] = useState("");
  const [parisar, setParisar] = useState("Nashik Road");
  const [total, setTotal] = useState("");
  const [reason, setReason] = useState("");

  function handleEmailChange(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function handleNameChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleContactChange(event) {
    event.preventDefault();
    setContact(event.target.value);
  }

  function handleAddressChange(event) {
    event.preventDefault();
    setAddress(event.target.value);
  }

  function handlePrajatiChange(event) {
    event.preventDefault();
    setPrajati(event.target.value);
  }

  function handleTotalChange(event) {
    event.preventDefault();
    setTotal(event.target.value);
  }

  function handleReasonChange(event) {
    event.preventDefault();
    setReason(event.target.value);
  }

  function handleParisarChange(event) {
    event.preventDefault();
    setParisar(event.target.value);
  }






  var permission = JSON.parse(localStorage.getItem("permission"))
  console.log("permission", permission)


  function handleSave() {
    if (email == "" || email == null) {
      alert("Please enter email");
      return;
    }

    if (name == "" || name == null) {
      alert("Please enter name");
      return;
    }

    // if(contact=="" || contact==null){
    //   alert("Please enter contact");
    //   return;
    // }

    if (address == "" || address == null) {
      alert("Please enter address");
      return;
    }

    if (prajati == "" || prajati == null) {
      alert("Please enter prajati");
      return;
    }

    if (total == "" || total == null) {
      alert("Please enter total");
      return;
    }

    if (reason == "" || reason == null) {
      alert("Please enter reason");
      return;
    }


    var formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("title", permission.title);
    formData.append("phone", contact);
    formData.append("address", address);
    formData.append("prajati", prajati);
    formData.append("total", total);
    formData.append("reason", reason);
    formData.append("parisar", parisar);

    var documents = [];

    for (var i = 0; i < permission.questions.length; i++) {
      // console.log("Files",document.getElementById(i).files[0])
      documents.push(document.getElementById(i).files[0])
      formData.append("documents", document.getElementById(i).files[0])
    }





    var data = {
      "email": email,
      "name": name,
      "title": "" + permission.title,
      "phone": contact,
      "address": address,
      "prajati": prajati,
      "total": total,
      "reason": reason,
      "parisar": parisar,
    }

    console.log("data", formData)

    axios.post(url + "/permission-form", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + localStorage.getItem("jwtTokenUser")
      }
    }).then(function (response) {
      if (response.status == 200) {
        alert("Permission form submitted successfully")
        window.location.reload();
      } else {
        alert("Something went wrong")
        console.log(response)
      }
    }).catch(function (error) {
      console.log(error)
      alert("Something went wrong")
    })
  }



  return (
    <div className='permissionsform'>
      <NavigationBar/>
      <Container>
        {/* <Button>Click</Button> */}
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>Personal Information</ListGroup.Item>
            <ListGroup.Item >
              <MDBRow>
                <MDBCol >
                  <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text' onChange={handleNameChange} />
                </MDBCol>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email' onChange={handleEmailChange} />
                </MDBCol>

              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' placeholder='Contact' id='form1' type='number' omChange={handleContactChange} />
                </MDBCol>
                <MDBCol >
                  <MDBInput wrapperClass='mb-4' placeholder='Address Line 1' id='form1' type='text' onChange={handleAddressChange} />
                </MDBCol>

              </MDBRow>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>{permission.title}</ListGroup.Item>
            <ListGroup.Item >
              <MDBRow>
                <MDBCol md='4'>
                  <MDBInput wrapperClass='mb-4' placeholder='Prajati' id='form1' type='text' onChange={handlePrajatiChange} />
                </MDBCol>
                <MDBCol md='4'>
                  <MDBInput wrapperClass='mb-4' placeholder='Total' id='form1' type='Number' onChange={handleTotalChange} />
                </MDBCol>
                <MDBCol md='4'>
                  <MDBInput wrapperClass='mb-4' placeholder='Reason' id='form1' type='text' onChange={handleReasonChange} />
                </MDBCol>



              </MDBRow>
              <MDBRow>
                <MDBCol md='4'>
                  <DropdownButton
                    alignRight
                    title={value_type}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                  >
                    {
                      grievance_types.map(g => {
                        return (
                          <Dropdown.Item eventKey={g} >{g}</Dropdown.Item>
                        )
                      })
                    }
                  </DropdownButton>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBInput wrapperClass='mb-4' placeholder='Garden Department' id='form1' type='text' disabled />
                </MDBCol>
                <MDBCol md='4'>
                </MDBCol>
              </MDBRow>
            </ListGroup.Item>
          </ListGroup>

        </Card>

        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>Documents Needed</ListGroup.Item>
            <ListGroup.Item >
              {
                permission.questions.map((d, pos) => {
                  return (
                    <MDBRow>
                      <h2>{d}</h2>
                      <MDBCol md='6'>
                        <input type="file" label={d} id={pos} />
                      </MDBCol>
                    </MDBRow>
                  );
                })
              }

            </ListGroup.Item>
          </ListGroup>

        </Card>
        <br />
        <Button onClick={handleSave}>Save</Button>
        {/* <LoadCanvasTemplate /> */}
      </Container>
    </div>
  )
}

export default Permissionform