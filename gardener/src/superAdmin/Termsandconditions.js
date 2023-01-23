import { Icon } from "@iconify/react";
import axios from "axios";
import { MDBTextArea , MDBRow, MDBCol} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import { Button, Card,Container, DropdownButton, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "./home/Sidebar/Sidebar";
import url from "../Uri";
import { Table } from "react-bootstrap";

function Termsandconditions() {

  const [terms, setTerms] = useState('')
  const [termsandconditions, setTermsandconditions] = useState([])

  const [isTermsFetched, setIsTermsFetched]=useState(false)


  useEffect(()=>{

    if(!isTermsFetched){
        fetchTerms()
    }
    
  })

  function fetchTerms(){
    axios.get(url + "/terms")
        .then(function (response) {
            setTermsandconditions(response.data)       
            setIsTermsFetched(true)
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  const handleTerms =(e)=>{
    setTerms(e.target.value)
  }
  function addTerms(){

    if(terms===''){
      alert("Add Terms and Conditions")
      return
    }
    else{

    
    var formData = new FormData();
    formData.append("term",terms)  
    
    

    axios.post(url + "/terms", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + localStorage.getItem("jwtTokenSuperAdmin")
      }
    }).then(function (response) {
      if (response.status == 200) {
        console.log("Terms and Conditions Uploaded successfully")
        // window.location.reload();
      } else {
        console.log("Something went wrong")
        console.log(response)
      }
    }).catch(function (error) {
      console.log(error)
      console.log("Something went wrong")
    })
  }
  }

  function deleteTerms(id){
    var formData = new FormData();
    formData.append("id",id)  
    
    axios.delete(url + "/terms", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + localStorage.getItem("jwtTokenSuperAdmin")
      }
    }).then(function (response) {
      if (response.status == 200) {
        console.log("Terms and Conditions Deleted successfully")
        // window.location.reload();
      } else {
        console.log("Something went wrong")
        console.log(response)
      }
    }).catch(function (error) {
      console.log(error)
      console.log("Something went wrong")
    })
  }
  return (
    <div>
<div className='permissionsform'>
            <Sidebar/>
                <Container>
                <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>Add Terms and Conditions</ListGroup.Item>
                    <ListGroup.Item >
                    <MDBRow>
                    <MDBTextArea onChange={handleTerms} placeholder='Add Terms and Conditions' id='textAreaExample' rows={4} />                   
                    </MDBRow>
                    <br></br>
                    <MDBRow>
                  
                    <Button onClick={addTerms} style={{width:'10%',color:'aliceblue', backgroundColor:'#207FB0'}}>Submit</Button>
                     
                      
                    </MDBRow>
                </ListGroup.Item>
                </ListGroup>
                </Card>
                <br></br>
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Terms and Conditions</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th></th>

                  </tr>
                </thead>
                <tbody>
                {
                  termsandconditions.map(t=>{
                    return(
                      <tr>
                      <td>{t.id}</td>
                      <td>{t.termsAndConditions}</td>
                      <td>{t.createdAt}</td>
                      <td>{t.updatedAt}</td>
                      <td><Icon onClick={()=>deleteTerms(t.id)}  icon="material-symbols:delete" color='Red' /></td>
                      </tr>

                    )
                  })
                }
                </tbody>
            </Table>
                </Container>
                </div>
            </div>
  )
}

export default Termsandconditions