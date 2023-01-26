import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { MDBSelect, MDBInput, MDBCol, MDBRow, MDBFile, MDBBtn } from 'mdb-react-ui-kit';
import { Row, Dropdown, DropdownButton, Col, Container, Button, Card, ListGroup } from 'react-bootstrap'
import '../../css/grievances.css'
import axios from 'axios';
import url from '../../Uri';
import { useNavigate } from 'react-router-dom';
function Registergrievance() {

    const [value_type, setValuetype] = useState('Grievance Type')
    // const grievance_types=['Abc','Xyz']

    const [grievance, setGrievance] = useState([]);
    const [isGrievanceFetched, setIsGrievanceFetched] = useState(false);

    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [area, setArea] = useState("");
    const [pincode, setPincode] = useState("");

    const [division, setDivision] = useState(["CIDCO", "Nashik East", "Nashik Road", "Nashik West", "Panchavati", "Satpur"]);
    const [selectedDivision, setSelectedDivision] = useState("----Select Division----");

    const [prabhag, setPrabhag] = useState(["Prabhag No. 1", "Prabhag No. 2", "Prabhag No. 3", "Prabhag No. 4", "Prabhag No. 5", "Prabhag No. 6", "Prabhag No. 7", "Prabhag No. 8", "Prabhag No. 9", "Prabhag No. 10", "Prabhag No. 11", "Prabhag No. 12", "Prabhag No. 13", "Prabhag No. 14", "Prabhag No. 15", "Prabhag No. 16", "Prabhag No. 17", "Prabhag No. 18", "Prabhag No. 19", "Prabhag No. 20", "Prabhag No. 21", "Prabhag No. 22", "Prabhag No. 23", "Prabhag No. 24", "Prabhag No. 25", "Prabhag No. 26", "Prabhag No. 27", "Prabhag No. 28", "Prabhag No. 29", "Prabhag No. 30", "Prabhag No. 31"]);
    const [selectedPrabhag, setSelectedPrabhag] = useState("----Select Prabhag----");

    const naviagate = useNavigate();

    const handleSelect = (e) => {
        console.log(e);
        setValuetype(e)
    }


    const handleDivisionSelect=(e)=>{
        setSelectedDivision(e)
    }

    const handlePrabhagSelect=(e)=>{
        setSelectedPrabhag(e)
    }

    function fetchGrievances() {
        axios.get(url + "/grievance").then(function (response) {
            if (response.status == 200) {
                console.log(response.data);
                setGrievance(response.data);
                setIsGrievanceFetched(true);
            } else {
                console.log(response);
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (!isGrievanceFetched) {
            fetchGrievances();
        }
    })

    function handleGrievanceDescription(event) {
        setDescription(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handleLandmarkChange(event) {
        setLandmark(event.target.value);
    }

    function handleAreaChange(event) {
        setArea(event.target.value);
    }

    function handlePincodeChange(event) {
        setPincode(event.target.value);
    }

    function handleSubmitGrievance(event) {
        event.preventDefault();

        if (value_type === "Grievance Type") {
            alert("Please select Grievance Type")
            return
        }

        if (description === "" || description === null) {
            alert("Please enter Grievance Description")
            return
        }

        if(selectedDivision==="----Select Division----"){
            alert("Please select Division")
            return
        }

        if(selectedPrabhag==="----Select Prabhag----"){
            alert("Please select Prabhag")
            return
        }

        if (address === "" || address === null) {
            alert("Please enter Address")
            return
        }

        if (landmark === "" || landmark === null) {
            alert("Please enter Landmark")
            return
        }

        if (area === "" || area === null) {
            alert("Please enter Area")
            return
        }

        if (pincode === "" || pincode === null) {
            alert("Please enter Pincode")
            return
        }

        if (document.getElementById("grievance-form-image").files[0] === undefined) {
            alert("Please select an image")
            return
        }

        console.log(document.getElementById("grievance-form-image").files[0].name.split(".").pop())

        if (document.getElementById("grievance-form-image").files[0].name.split(".").pop() !== "jpg" && document.getElementById("grievance-form-image").files[0].name.split(".").pop() !== "jpeg" && document.getElementById("grievance-form-image").files[0].name.split(".").pop() !== "png") {
            alert("Please select an image with jpg/jpeg/png extension")
            return
        }

        var formData = new FormData();

        formData.append("address", address);
        formData.append("landmark", landmark);
        formData.append("area", area);
        formData.append("pincode", pincode);
        formData.append("description", description);
        formData.append("division", selectedDivision);
        formData.append("prabhag", selectedPrabhag);
        formData.append("department","Garden Department");
        formData.append("type",value_type);
        formData.append("image", document.getElementById("grievance-form-image").files[0]);

        axios.post(url+"/citizen/grievance-form",formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": "Bearer " + localStorage.getItem("jwtTokenUser")
            }
        }).then(function(response){
            if(response.status===200){
                console.log(response.data);
                alert("Grievance Submitted Successfully")
                window.location.reload();
            }else{
                console.log(response);
                alert(response.data.message)
                naviagate("/signin")
            }
        }).catch(function(error){
            console.log(error);
            
        })





        // alert("Grievance Submitted Successfully")



    }

    return (
        <div className='registergrievance'>
            <Container>

                <Card style={{ width: '100%' }}>
                    <ListGroup variant="flush">

                        <ListGroup.Item style={{ backgroundColor: '#207fb0', color: 'aliceblue' }}>Grievance Form</ListGroup.Item>
                        <ListGroup.Item>
                            <MDBRow>
                                {
                                    grievance.map(g => {
                                        return (
                                            <Card style={{ width: '10rem', marginLeft: '10px' }} onClick={() => handleSelect(g.name)}>
                                                <Card.Img variant="top" style={{ height: '100%', width: '100%' }} src={"data:image/gif;base64," + g.icon.data} />
                                                <Card.Body>
                                                    <Card.Text>
                                                        {g.name}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </MDBRow>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ padding: '5%' }} >
                            <MDBRow>
                                <MDBCol>
                                    <DropdownButton
                                        alignRight
                                        title={value_type}
                                        id="grievance-dropdown-menu-align-right"
                                        onSelect={handleSelect}>
                                        {
                                            grievance.map(g => {
                                                return (
                                                    <Dropdown.Item eventKey={g.name}>{g.name}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </DropdownButton>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Garden Department' id='form1' type='text' disabled />
                                </MDBCol>
                            </MDBRow>
                            <br />
                            <MDBRow>
                                <MDBInput wrapperClass='mb-4' placeholder='Grievance Description' id='form1' type='textarea' onChange={handleGrievanceDescription} />
                            </MDBRow>
                            <br />
                            <MDBRow>
                                <MDBCol>
                                    <DropdownButton
                                        alignRight
                                        title={selectedDivision}
                                        id="division-dropdown-menu-align-right"
                                        onSelect={handleDivisionSelect}>
                                        {
                                            division.map(d => {
                                                return (
                                                    <Dropdown.Item eventKey={d}>{d}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </DropdownButton>
                                </MDBCol>
                                <MDBCol>
                                    <DropdownButton
                                        alignRight
                                        title={selectedPrabhag}
                                        id="prabhag-dropdown-menu-align-right"
                                        onSelect={handlePrabhagSelect}>
                                        {
                                            prabhag.map(p => {
                                                return (
                                                    <Dropdown.Item eventKey={p}>{p}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </DropdownButton>
                                </MDBCol>
                            </MDBRow>
                            <br/>
                            <MDBRow>
                                <MDBInput wrapperClass='mb-4' placeholder='Street Address' id='form1' type='text' onChange={handleAddressChange} />
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Landmark' id='form1' type='text' onChange={handleLandmarkChange} />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Area' id='form1' type='text' onChange={handleAreaChange} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>

                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Pincode' id='form1' type='number' onChange={handlePincodeChange} />
                                </MDBCol>
                                <MDBCol>
                                    <MDBFile id='grievance-form-image' label='Upload Image Proof (only in jpg/jpeg/png format)' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <center><MDBBtn className='registergrievancebtn' onClick={handleSubmitGrievance}>Submit</MDBBtn></center>
                            </MDBRow>

                        </ListGroup.Item>
                        {/* <ListGroup.Item style={{ padding: '5%' }} >
                            <MDBRow>
                                <MDBCol>
                                    <DropdownButton
                                        alignRight
                                        title={value_type}
                                        id="dropdown-menu-align-right"
                                        onSelect={handleSelect}
                                    >
                                        {
                                            grievance_types.map(g => {
                                                return (
                                                    <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </DropdownButton>
                                </MDBCol>
                                <MDBCol>
                                    <DropdownButton
                                        alignRight
                                        title={value_type}
                                        id="dropdown-menu-align-right"
                                        onSelect={handleSelect}
                                    >
                                        {
                                            grievance_types.map(g => {
                                                return (
                                                    <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </DropdownButton>
                                </MDBCol>
                            </MDBRow>
                            <br></br>
                            <MDBRow>
                                <MDBInput wrapperClass='mb-4' placeholder='Street Address' id='form1' type='text' />
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Landmark' id='form1' type='text' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Area' id='form1' type='text' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' placeholder='Pincode' id='form1' type='number' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBFile id='customFile' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <center><MDBBtn className='registergrievancebtn'>Submit</MDBBtn></center>
                            </MDBRow>
                        </ListGroup.Item> */}
                    </ListGroup>
                </Card>

            </Container>
        </div>
    )
}

export default Registergrievance