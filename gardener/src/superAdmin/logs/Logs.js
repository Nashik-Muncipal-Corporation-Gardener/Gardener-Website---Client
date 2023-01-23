import React, { useEffect, useState } from 'react'
import axios from 'axios';

import url from '../../Uri'
import { Col, Row, Table } from 'react-bootstrap'
function Logs() {

    // const [logdata,setLogdata] = useState([])
    const [isLogFetched, setIsLogFetched] = useState(false)
    const [citizenLogs, setCitizenLogs] = useState([])
    const [adminLogs, setAdminLogs] = useState([])
    const [superadminLogs, setSuperadminLogs] = useState([])

    useEffect(() => {

        if (!isLogFetched) {
            getLogs();
        }
    })

    function getLogs() {
        axios.get(url + "/super-admin/logs", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
            }
        }).then(function (response) {
            if (response.status == 200) {
                console.log(response.data[0].logs.citizen);
                // setLogdata(JSON.stringify(response.data));
                if (response.data[0].logs.citizen != undefined) {
                    setCitizenLogs([...response.data[0].logs.citizen])
                }

                if (response.data[0].logs.admin != undefined) {
                    setAdminLogs([...response.data[0].logs.admin])
                }

                if (response.data[0].logs.superadmin != undefined) {
                    setSuperadminLogs([...response.data[0].logs.superadmin])
                }
                setIsLogFetched(true);
                console.log("Citizen Logs:", citizenLogs);
                console.log("Admin Logs:", adminLogs);
                console.log("Superadmin Logs:", superadminLogs);

            } else {
                console.log(response);
            }
        }).catch(function (error) {
            console.log(error);
            alert(error.response.data.message)
        })
    }


    return (
        <div>
            <Row>
                <Col md={4}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Citizen Logs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {citizenLogs.map((log, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{log}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Admin Logs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminLogs.map((log, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{log}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Superadmin Logs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {superadminLogs.map((log, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{log}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Logs