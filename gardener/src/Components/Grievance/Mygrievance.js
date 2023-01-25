import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Image, Container, Row, Col, Modal, Table } from 'react-bootstrap';
import '../../css/grievances.css'
import url from '../../Uri';
function Mygrievance() {

    // const grievances = [1, 2, 3, , 4, 5, 6]
    const[grievances,setGrievances] = useState([]);
    const[isGrievancesFetched,setIsGrievancesFetched] = useState(false);

    function fetchGrievances(){
        axios.get(url+"/citizen/grievance-form",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwtTokenUser")
            }
        }).then(function(response){
            // console.log(response.data)
            if(response.status==200){
                console.log(response.data)
                setGrievances(response.data)
                setIsGrievancesFetched(true)
            }
        }).catch(function(error){
            console.log(error)
            // alert
        })
    }

    useEffect(() => {
        if(!isGrievancesFetched){
            fetchGrievances()
        }
    })


    return (
        <div className='mygrievances'>
            <Container>

                <Table striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            <th>Grievance ID</th>
                            <th>Grievance Date</th>
                            <th>Grievance Type</th>
                            <th>Grievance Status</th>
                        </tr>
                        {
                            grievances.map(g => {
                                return (
                                    <tr>
                                        <td>{g.grievanceId}</td>
                                        <td>{g.createdAt}</td>
                                        <td>{g.grievanceType}</td>
                                        <td>{g.status}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
                {/* <h3>My Grievances</h3> */}

            </Container>
        </div>
    )
}

export default Mygrievance