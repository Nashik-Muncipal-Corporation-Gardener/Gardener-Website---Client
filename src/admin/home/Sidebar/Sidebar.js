import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.css'
import { SidebarData } from './SidebarData';

function Sidebar(){
    return(
        <>
      
        <Navbar style={{backgroundColor:'#348E38'}} variant='light' expand={false}>
          <Container fluid>
            
            <Navbar.Toggle  className="nav-toggle"/>
            <Navbar.Offcanvas
              placement="start"
            >
              <Offcanvas.Header style={{backgroundColor:'#348E38'}} closeButton>
                <Offcanvas.Title>
                  Admin Panel
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{backgroundColor:'#E8F5E9',fontSize:'20px'}}>
                <Nav className="justify-content-start flex-grow-1 pe-3">

                {SidebarData.map((item, index) => {
                return (
                    <Nav.Link  href={"/#"+item.path} className={item.cName}>{item.icon}<span className='span'> </span>{item.title}</Nav.Link>
                    
                );
                })}
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
    )
}

export default Sidebar