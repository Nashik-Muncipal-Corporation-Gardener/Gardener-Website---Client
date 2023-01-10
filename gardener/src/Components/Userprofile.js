import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {Button,Image, Container,Row,Col} from 'react-bootstrap';
import Navbar from './NavigationBar';
import '../css/userprofile.css'
import { Icon } from '@iconify/react';

function Userprofile() {
  return (
    <div className='userprofile'>
        <Navbar/>
        <Container>
            <Row className='profilesection'>
                <Col md={3}>
                    <Row>
                    <Image thumbnail className='profileimg' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'/>
                    </Row>
                    <Row>
                    <Button>Edit Profile</Button>
                    </Row>
                    <Row>
                    <Button>Permissions</Button>
                    </Row>
                    <Row>
                    <Button>Grievances</Button>
                    </Row>
                </Col>
                <Col md={9}>

                    <table>
                        <tr>
                            <td colspan="2">Shraddha Mulay</td>
                        </tr>
                        <tr>
                            <td colspan="2"><Icon icon="material-symbols:mail" /> shraddhamulay09@gmail.com</td>
                        </tr>
                        <tr>
                            <td><Icon icon="material-symbols:phone-in-talk" /> 9876543210</td>
                            <td>DOB: 09/12/2001</td>
                        </tr>
                        <tr>
                            <td colspan="2"><Icon icon="material-symbols:location-on" /> Ashtavinayak Vihar A wing Balaji Nagar</td>
                        </tr>
                        <tr>
                            <td>City: Pune</td>
                            <td>Pincode: 411043</td>
                        </tr>
                    </table>
                    
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Userprofile