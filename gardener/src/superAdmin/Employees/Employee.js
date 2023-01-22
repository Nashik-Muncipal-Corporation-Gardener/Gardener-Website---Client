import { MDBCol, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AdminHome from "../../admin/home/AdminHome";


function Employee() {

    const [verticalActive, setVerticalActive] = useState('tab1');

    function handleVerticalClick(value) {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
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