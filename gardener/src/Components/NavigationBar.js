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
            <Navbar.Brand href="/"><img className="logo" src = {require ('../images/logo.png')}/></Navbar.Brand>
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
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href="/#/aboutus">About Us</Nav.Link>
                  <Nav.Link href="/#/gardens">Gardens</Nav.Link>
                  {/* <Nav.Link href="/#/contactus">Contact Us</Nav.Link>  */}
                  <Nav.Link href="/#/news">News</Nav.Link> 
                  <Nav.Link className='signin_signup' style={{marginLeft:20, paddingLeft:30,paddingRight:30}}><a onClick={Signin}><span ></span>Sign In </a></Nav.Link>
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