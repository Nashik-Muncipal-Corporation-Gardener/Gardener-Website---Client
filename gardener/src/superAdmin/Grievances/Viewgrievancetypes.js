import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Modal, Col, Row, Card, ListGroup } from 'react-bootstrap';
import url from '../../Uri';

function Viewgrievancetypes() {
  const [alert, setAlert] = useState(false);
  const handleClose = () => setAlert(false);
  const handleAlert = () => setAlert(true);

  const[grievance,setGrievance] = useState([]);
  const[isGrievanceFetched,setIsGrievanceFetched] = useState(false);

  function fetchGrievances(){
    axios.get(url+"/grievance").then(function(response){
      // console.log(response.data)
      if(response.status==200){
        console.log(response.data)
        setGrievance(response.data)
        setIsGrievanceFetched(true)

      }else{
        alert(response.data.message);
        // console.log(response)
        setIsGrievanceFetched(true)
      }

    }).catch(function(error){
      console.log(error)
      // alert
    })
  }

  useEffect(() => {
    if(!isGrievanceFetched){
      fetchGrievances()
    }
  })


  function deleteGrievance(grievance){

    axios.delete(url+"/grievance/"+grievance.name,{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwtTokenSuperAdmin")
      }
    }).then(function(response){
      console.log(response)
      if(response.status==200){
        // alert("Grievance Type Deleted Successfully")
        window.location.reload();
      }else{
        alert("Error:",response.data.message);

      }
    }).catch(function(error){
      console.log(error)
    })
  }

  return (

    <div>
      <Container style={{ padding: '2%' }}>
        <center><h6>All Grievances</h6></center>
        <br/>
        <br/>
        <Row>
          {
            grievance.map((grievance) => {
              return(
                <Col sm={4}>
                  <Card  >
                    <Card.Img variant="top" src={"data:image/gif;base64,"+grievance.icon.data} style={{height:"200px",width:"100%"}}/>

                    <Card.Body>
                      <Card.Title>{grievance.name}</Card.Title>
                      <Card.Text>
                        {grievance.department}
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Button variant="primary" onClick={handleAlert}>Delete</Button>
                      <Modal show={alert} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Alert</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this grievance type?</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={()=>deleteGrievance(grievance)}>
                            Delete
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          } 
        </Row>  

      </Container>
    </div>
  )
}

export default Viewgrievancetypes