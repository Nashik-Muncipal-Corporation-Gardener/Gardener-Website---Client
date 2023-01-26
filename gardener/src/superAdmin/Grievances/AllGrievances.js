import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import url from "../../Uri";

function AllGrievances(){

    const [grievances,setGrievances] = useState([]);
    const [isGrievancesFetched,setIsGrievancesFetched] = useState(false);

    function fetchGrievances(){
        axios.get(url+"/grievance-form").then(function(response){
            if(response.status==200){
                console.log(response.data)
                setGrievances(response.data)
                setIsGrievancesFetched(true)
            }else{
                console.log("Error",response);
            }

        }).catch(function(error){
            console.log("Error",error);
        })

    }

    useEffect(() => {
        
        if(!isGrievancesFetched){
            fetchGrievances();
        }
    })


    return(
        <div className='mygrievances'>
            
            <Container>
                <h2>Grievances</h2>
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
                                        <td>{g.status.toUpperCase()}</td>
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

export default AllGrievances;