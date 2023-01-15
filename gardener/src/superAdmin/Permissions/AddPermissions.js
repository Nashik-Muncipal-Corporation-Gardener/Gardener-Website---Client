import { Icon } from "@iconify/react";
import axios from "axios";
import { MDBCardText, MDBCardTitle, MDBCol, MDBFile, MDBInput, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Button, Card, Container, DropdownButton, ListGroup, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import url from "../../Uri";


function AddPermissions(){

    const [name,setName] = useState("");

    const [questions,setQuestions] = useState([]);

    console.log(questions.type)

    const [currentQuestion,setCurrentQuestion] = useState("");

    const navigate = useNavigate();


    function handleNameChange(event){
        event.preventDefault();
        setName(event.target.value);
    }

    function savePermission(){
        // alert(name+"\n"+questions+"\n"+document.getElementById("permissionIcon").files[0].name);

        if(name===""){
            alert("Please enter name of permission")
            return;
        }
        if(questions.length===0){
            alert("Please enter atleast one question");
            return;
        }

        if(document.getElementById("permissionIcon").files.length===0){
            alert("Please select an icon");
            return;
        }

        // var str = questions;

        var arr = "";

        for(var i=0;i<questions.length;i++){
            arr = arr+ questions[i]+ "#";
        }

        // console.log(questions);

        var form_data_body = {
            "title":name,
            "questions":arr,
            "icon":document.getElementById("permissionIcon").files[0]
        };

        console.log(form_data_body);



        axios.post(url+"/permission",form_data_body,{
            headers:{
                "Content-Type":"multipart/form-data",
                "Authorization":"Bearer "+localStorage.getItem("jwtTokenSuperAdmin")
                // "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW12ZXJtYXN2M…DYwfQ.NlezN48dWVuEaIaCQtxMuJVXunqhUT-hK5WxZmIW1Zo"
            }
        }).then(res=>{
            console.log(res);
            if(res.status==200){
                alert("Permission Added Successfully");
                window.location.reload();
            }else{
                alert("Error in adding permission");
            }
        }).catch(err=>{
            console.log(err);
            navigate("/super-admin")  
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