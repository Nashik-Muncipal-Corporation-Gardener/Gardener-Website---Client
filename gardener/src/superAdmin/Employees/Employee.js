import axios from "axios";
import { MDBCol, MDBInput, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Row, Table } from "react-bootstrap";
import AdminHome from "../../admin/home/AdminHome";
import url from "../../Uri";
import SuperAdminHome from "../home/SuperAdminHome";


function Employee() {

    const [verticalActive, setVerticalActive] = useState('tab1');

    function handleVerticalClick(value) {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
    }

    const [employees, setEmployees] = useState([]);
    const [isEmployeeFetched, setIsEmployeeFetched] = useState(false);

    const [roleDropdown,setRolesDropdown] = useState(["Admin","Super Admin"]);

    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [contact,setContact] = useState("");
    const [address,setAddress] = useState("");
    const [role,setRole] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    

    



    useEffect(() => {
        
        if(!isEmployeeFetched){
            getEmployees();
        }
    })

    function getEmployees() {
        axios.get(url + "/employees",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
            }
        }).then(function (response) {
            if(response.status==200){
                setEmployees(response.data);
                setIsEmployeeFetched(true);
            }else{
                console.log(response);
            }
        }).catch(function (error) {
            console.log(error);
            alert(error.response.data.message)
        })
        
    }

    function handleDeleteEmployee(employee){
        alert(employee.email);
    }

    function handleEmailChange(event){
        event.preventDefault();
        setEmail(event.target.value);
    }

    function handleNameChange(event){
        event.preventDefault();
        setName(event.target.value);
    }

    function handleContactChange(event){
        event.preventDefault();
        setContact(event.target.value);
    }

    function handleAddressChange(event){
        event.preventDefault();
        setAddress(event.target.value);
    }

    function handlePasswordChange(event){
        event.preventDefault();
        setPassword(event.target.value);
    }


    function handleConfirmPasswordChange(event){
        event.preventDefault();
        setConfirmPassword(event.target.value);
    }


    function addEmployee(){
        if(name=="" || name==null){
            alert("Name is required");
            return;
        }
        if(email=="" || email==null){
            alert("Email is required");
            return;
        }

        if(address=="" || address==null){
            alert("Address is required");
            return;
        }
        if(password=="" || password==null){
            alert("Password is required");
            return;
        }
        if(confirmPassword=="" || confirmPassword==null){
            alert("Confirm Password is required");
            return;
        }

        if(password!=confirmPassword){
            alert("Password and Confirm Password do not match");
            return;
        }

        if(!(document.getElementById("inline-radio-superadmin").checked || document.getElementById("inline-radio-admin").checked)){
            alert("Select a role");
            return;
        }

        var form_data_body = new FormData();

        form_data_body.append("name",name);
        form_data_body.append("email",email);
        form_data_body.append("address",address);
        form_data_body.append("password",password);
        form_data_body.append("phoneNos",contact);
        form_data_body.append("dateOfBirth","");
        form_data_body.append("city","Nashik");
        form_data_body.append("state","Maharashtra");


        if(document.getElementById("inline-radio-superadmin").checked){
            axios.post(url+"/super-admin/register",form_data_body)
            .then(function(response){
                if(response.status==201){
                    alert("Employee added successfully");
                    window.location.reload();
                    // getEmployees();
                }else{
                    console.log(response);
                    alert(response.data.message);
                }
            }).catch(function(error){
                console.log(error);
                alert(error.response.data.message);
            })
        }else{
            axios.post(url+"/admin/register",form_data_body)
            .then(function(response){
                if(response.status==201){
                    alert("Employee added successfully");
                    window.location.reload();
                    // getEmployees();
                }else{
                    console.log(response);
                    alert(response.data.message);
                }
            }).catch(function(error){
                console.log(error);
                alert(error.response.data.message);
            })
            
        }



        // console.log(document.getElementById("inline-radio-admin").checked);

    }

    return (
        <div>
            <SuperAdminHome />
            <MDBRow>
                <MDBCol size='3'>
                    <MDBTabs className='flex-column text-center'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                Employee Dashboard
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                Add Employee
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBCol>
                <MDBCol size='9'>
                    <MDBTabsContent>
                        <MDBTabsPane show={verticalActive === 'tab1'}>

                            <Container>
                                <h1>Employee Dashboard</h1>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Email</th>
                                            <th>Name</th>
                                            <th>Contact</th>
                                            <th>Role</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            {
                                                employees.map((employee, index) => {
                                                    return(
                                                        <tr>
                                                            <td>{index+1}</td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.name}</td>
                                                            <td>{employee.phoneNos}</td>
                                                            <td>{employee.role}</td>
                                                            <td><button onClick={()=>handleDeleteEmployee(employee)}>🗑️</button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                </Table>
                                

                            </Container>
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab2'}>
                            <Container>
                                <h1>Add Employee</h1>
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Add Employee Details</ListGroup.Item>
                                        <ListGroup.Item>
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
                                                    <MDBInput wrapperClass='mb-4' placeholder='Contact' id='form1' type='text' omChange={handleContactChange} />
                                                </MDBCol>
                                                <MDBCol >
                                                    <MDBInput wrapperClass='mb-4' placeholder='Address Line 1' id='form1' type='text' onChange={handleAddressChange} />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol>
                                                    <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password' onChange={handlePasswordChange}/>
                                                </MDBCol>
                                                <MDBCol>
                                                    <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form1' type='password' onChange={handleConfirmPasswordChange}/>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <div key="inline-radio" className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Admin"
                                                    name="group1"
                                                    type="radio"
                                                    id="inline-radio-admin"
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Super Admin"
                                                    name="group1"
                                                    type="radio"
                                                    id="inline-radio-superadmin"
                                                />
                                                </div>  
                                            </MDBRow>
                                            <Button style={{marginLeft:"47%"}} onClick={addEmployee}>Save</Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Container>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </div>
    )

}

export default Employee;