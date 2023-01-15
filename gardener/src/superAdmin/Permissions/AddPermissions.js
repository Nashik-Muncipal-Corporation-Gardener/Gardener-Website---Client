import { Icon } from "@iconify/react";
import axios from "axios";
import { MDBCardText, MDBCardTitle, MDBCol, MDBFile, MDBInput, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Button, Card, Container, DropdownButton, ListGroup, Navbar } from "react-bootstrap";
import url from "../../Uri";


function AddPermissions(){

    const [name,setName] = useState("");

    const [questions,setQuestions] = useState([]);

    const [currentQuestion,setCurrentQuestion] = useState("");


    function handleNameChange(event){
        event.preventDefault();
        setName(event.target.value);
    }

    function savePermission(){
        alert(name+"\n"+questions+"\n"+document.getElementById("permissionIcon").files[0].name);

        axios.post(url+"/permission",{
            "title":name,
            "questions":questions,
            "icon":document.getElementById("permission")
        },{
            headers:{
                "Content-Type":"multipart/form-data",
                "Authorization":"Bearer "+localStorage.getItem("jwtTokenSuperAdmin")
            }
        }).then(res=>{
            console.log(res);
            if(res.status==200){
                alert("Permission Added Successfully");
            }else{
                alert("Error in adding permission");
            }
        }).catch(err=>{
            console.log(err);
        })

        
    }

    function handleCurrentQuestion(event){
        event.preventDefault();
        setCurrentQuestion(event.target.value);
    }

    

    function addNewQuestion(){
        if(currentQuestion===""){
            alert("Please enter a question");
            return;
        }
        questions.push(currentQuestion);
        setQuestions([...questions]);
        setCurrentQuestion("");
    }


    return(
        <div>
            <h1>Add Permissions</h1>
            <div className='permissionsform'>
                <Navbar/>
                <Container>
                <Button>Click</Button>
                <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>Permission Name</ListGroup.Item>
                    <ListGroup.Item >
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text' onChange={handleNameChange}/>
                        </MDBCol>                     
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='6'>
                            <MDBFile label= "Icon (upload only pdf format)" id='permissionIcon' />
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
                        questions.map(q=>{
                            return(
                                <MDBRow>
                                    <MDBCol md='4'>
                                        <MDBInput wrapperClass="mb-4" value={q} id="form2" type="text"  disabled/>
                                    </MDBCol>
                                </MDBRow>
                            )
                        })
                    }
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput wrapperClass="mb-4" placeholder="Enter Question here" defaultValue="" id="form2" type="text" onChange={handleCurrentQuestion}/>
                        </MDBCol>
                    </MDBRow>
                </ListGroup.Item>
                </ListGroup>
                <Button onClick={addNewQuestion}>Add Question</Button>
                </Card>
                <Card>
                    <Button style={{background:"#ABCDEF",color:"#000000"}} onClick={savePermission}>Save Permission</Button>
                </Card>
                {/* <LoadCanvasTemplate /> */}
                </Container>
            </div>

        </div>
    );

}

export default AddPermissions;