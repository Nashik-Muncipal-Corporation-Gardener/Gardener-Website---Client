import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useNavigate } from "react-router-dom";
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


  function loginbtn(){
    if(localStorage.getItem("islogin")==="true"){
      return(
        <NavLink className='bg-top nav-link text-white rounded-5' to="/userprofile" style={{ marginLeft: 20, paddingLeft: 30, paddingRight: 30,backgroundColor:'#207FB0'}}><a><span ></span>View Profile</a></NavLink>
      )
    }
    else{
      return(
        <NavLink className='bg-top nav-link text-white rounded-5' to="/signin" style={{ marginLeft: 20, paddingLeft: 30, paddingRight: 30,backgroundColor:'#207FB0'}}><a><span ></span>Sign In </a></NavLink>
      )
    }
  }

  return (
    <div className='Nav_bar'>
    {/* // <div className="Nav_bar sticky-top">
    //   <div className="container-fluid bg-top  pe-0 ">
    //     <div className="row gx-0">
    //       <div className="col-md-6 text-center text-lg-start mt-2 mb-lg-0">
    //         <div class="d-inline-flex align-items-center">
    //           <a class="text-white px-3" href="">
    //             <i class="fab fa-facebook-f"></i>
    //           </a>
    //           <a class="text-white px-3" href="">
    //             <i class="fab fa-twitter"></i>
    //           </a>
    //           <a class="text-white px-3" href="">
    //             <i class="fab fa-linkedin-in"></i>
    //           </a>
    //           <a class="text-white px-3" href="">
    //             <i class="fab fa-instagram"></i>
    //           </a>
    //           <a class="text-white px-3" href="">
    //             <i class="fab fa-youtube"></i>
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col-md-6 text-end  text-lg-end">
    //         <div className="position-relative d-inline-flex align-items-center bg-top text-white top-shape px-2">
    //           <div className="me-3 pe-3 border-end py-2">
    //             <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
    //           </div>
    //           <div className="py-2">
    //             <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+012345 6789</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
      {/* <!-- Topbar End --> */}
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/"><img className="logo" src="/images/logo.png" /></Navbar.Brand>
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
                  <NavLink className="nav-link" to='/'>Home</NavLink>
                  <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                  <NavLink className="nav-link" to="/gardens">Gardens</NavLink>
                  {/* <NavLink to="/#/contactus">Contact Us</NavLink>  */}
                  <NavLink className="nav-link" to="/news">News</NavLink>
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>


                  {
                    
                    loginbtn()
                  }
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    {/* </div> */}
    </div>
  );
}

export default NavigationBar