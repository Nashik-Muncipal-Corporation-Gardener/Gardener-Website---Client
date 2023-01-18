import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {Button,Image, Container,Row,Col} from 'react-bootstrap';
import '../css/editprofile.css'
import { Icon } from '@iconify/react';
import Footer from './Footer'
function Editprofile() {
  return (
    <div className='editprofile'>
        <Container>

        <form >
        <table>
            <tr>
                <td colspan="2"><input placeholder='Name' type="text" /></td>
            </tr>
            <tr>
                <td colspan="2"><input placeholder='Email' type="email" /></td>
            </tr>
            <tr>
                <td><input placeholder='Contact' type="number" /></td>
                <td><input placeholder='DOB' type="date" /></td>
            </tr>
            <tr>
                <td colspan="2"><input placeholder='Street Address' type="text" /></td>
            </tr>
            <tr>
                <td><input placeholder='City' type="text" /></td>
                <td><input placeholder='Pincode' type="number" /></td>
            </tr>
        </table>
            
         <Row> 
            <Col></Col>
            <Col></Col>
            <Col>
            <Button type='submit'>Save</Button>
                
            </Col>
            <Col>
            <Button type='submit'>Cancel</Button>
            </Col>
         </Row>   
      </form>
      </Container>
      <Footer/>
    </div>
  )
}

export default Editprofile