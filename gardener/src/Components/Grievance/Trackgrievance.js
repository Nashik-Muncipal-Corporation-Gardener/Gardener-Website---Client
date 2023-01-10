import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {Row,Dropdown,DropdownButton, Col,Container , Button} from 'react-bootstrap'
import '../../css/grievances.css'
function Trackgrievance() {
  return (
    <div className='registergrievance'>
        <Container>
        <form >
        <table>
            <tr>
                <td><input placeholder='Grievance ID' type="number" /></td>

            </tr>
        </table>
            
        <Button className='registergrievancebtn'>Track</Button>
      </form>
      </Container>

    </div>
  )
}

export default Trackgrievance