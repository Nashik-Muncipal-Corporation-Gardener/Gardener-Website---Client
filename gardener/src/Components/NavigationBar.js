import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import { Button, Container, Navbar, NavDropdown, Offcanvas, Nav, Image } from 'react-bootstrap';
import '../css/header.css';
const NavigationBar = () => {

 

=======
import { useNavigate } from "react-router-dom";
import { Button, Container, Navbar, NavDropdown, Offcanvas, Nav, Image } from 'react-bootstrap';
import '../css/header.css';
const NavigationBar = () => {

  const navigate = useNavigate();

  const Signin = () => {
    navigate('/signin')
  }
  const Signup = () => {
    navigate('/signup')
  }



>>>>>>> 6b4a87f00ed4c19d52056d68045c07fd4cc8947e
  return (
    <div className="Nav_bar sticky-top">
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
<<<<<<< HEAD
            <Navbar.Brand to="/"><img className="logo" src="/images/logo.png" /></Navbar.Brand>
=======
            <Navbar.Brand href="/"><img className="logo" src="/images/logo.png" /></Navbar.Brand>
>>>>>>> 6b4a87f00ed4c19d52056d68045c07fd4cc8947e
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
<<<<<<< HEAD
                  <NavLink className="nav-link" to='/'>Home</NavLink>
                  <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                  <NavLink className="nav-link" to="/gardens">Gardens</NavLink>
                  {/* <NavLink to="/#/contactus">Contact Us</NavLink>  */}
                  <NavLink className="nav-link" to="/news">News</NavLink>
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  <NavLink className='signin_signup nav-link' to="/signin" style={{ marginLeft: 20, paddingLeft: 30, paddingRight: 30 }}><a><span ></span>Sign In </a></NavLink>
=======
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href="/#/aboutus">About Us</Nav.Link>
                  <Nav.Link href="/#/gardens">Gardens</Nav.Link>
                  {/* <Nav.Link href="/#/contactus">Contact Us</Nav.Link>  */}
                  <Nav.Link href="/#/news">News</Nav.Link>
                  <Nav.Link className='signin_signup' style={{ marginLeft: 20, paddingLeft: 30, paddingRight: 30 }}><a onClick={Signin}><span ></span>Sign In </a></Nav.Link>
>>>>>>> 6b4a87f00ed4c19d52056d68045c07fd4cc8947e
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