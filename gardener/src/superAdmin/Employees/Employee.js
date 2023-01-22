import axios from "axios";
import { MDBCol, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import AdminHome from "../../admin/home/AdminHome";
import url from "../../Uri";


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

    return (
        <div>
            <AdminHome />
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
                                
                            </Container>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </div>
    )

}

export default Employee;