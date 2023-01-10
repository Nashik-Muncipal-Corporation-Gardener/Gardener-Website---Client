import React from 'react'
import {Button,Image, Container,Row,Col, Modal} from 'react-bootstrap';
import '../../css/grievances.css'
function Mygrievance() {

    const grievances=[1,2,3,,4,5,6]
    
  return (
    <div className='mygrievances'>
        <Container>
            {/* <h3>My Grievances</h3> */}
            <table>
                <tr>
                    <th>Grievance ID</th>
                    <th>Grievance Date</th>
                    <th>Grievance Type</th>
                    <th>Grievance Status</th>
                </tr>

                {
                    grievances.map(g=>{
                        return(
                            <tr>
                                <td>12345678</td>
                                <td>12/3/2022</td>
                                <td>Xyz</td>
                                <td>In Review</td>
                            </tr>
                        )
                    })
                }
                
            </table>
        </Container>
    </div>
  )
}

export default Mygrievance