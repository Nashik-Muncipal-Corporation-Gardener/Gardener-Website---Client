import React ,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {Button,Image, Container,Row,Col, Modal} from 'react-bootstrap';
import Navbar from './NavigationBar';
import '../css/userprofile.css'
import { Icon } from '@iconify/react';
import Footer from './footer';
import '../css/editprofile.css'
function Userprofile() {

const navigate =useNavigate()
    const [showEditprofile, setShowshowEditprofile] = useState(false);

  const handleClose = () => setShowshowEditprofile(false);
  const handleShow = () => setShowshowEditprofile(true);

  const userpermissions=()=>{
    navigate('/userpermissions')
  }


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
                    <Button onClick={handleShow}>Edit Profile</Button>
                    </Row>
                    <Row>
                    <Button onClick={userpermissions}>My Permissions</Button>
                    </Row>
                    <Row>
                    <Button>My Grievances</Button>
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



        <Modal
        show={showEditprofile}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className='editprofile'>
        
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
            <Button onClick={handleClose}>Cancel</Button>
            </Col>
         </Row>   
      </form>
    </div>
      </Modal>

    <Footer/>
    </div>
  )
}

export default Userprofile