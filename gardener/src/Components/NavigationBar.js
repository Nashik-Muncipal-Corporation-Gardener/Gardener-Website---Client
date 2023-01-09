import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {Button, Container, Navbar, NavDropdown, Offcanvas, Nav, Image} from 'react-bootstrap';
import '../css/header.css';
const NavigationBar = () => {
  
  const navigate = useNavigate();
  const Signin=()=>{
    navigate('/signin')
  }
  const Signup=()=>{
    navigate('/signup')
  }

  

  return  (
    <div className="Nav_bar">
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img className="logo" src = {require ('../images/logo.png')}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>
                  <Nav.Link href="#action1">Gardens</Nav.Link>
                  <Nav.Link href="#action2">Contact Us</Nav.Link> 
                  <Nav.Link className='signin_signup'><a onClick={Signin}><span style={{marginLeft:20}}></span>Sign In </a><span>|</span>
                  <a onClick={Signup}> Sign Up<span style={{marginRight:20}}></span></a></Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar