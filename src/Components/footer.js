import React from 'react'
import { Icon } from '@iconify/react';
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col, ListGroup} from 'react-bootstrap';
import '../css/footer.css'
function footer() {
  return (
    <div className='footer'>
        
        <Row>
            <Col md={3}>
            <h6>Our Office </h6>
            <h7><Icon icon="material-symbols:location-on" />Nashik Municipal Corporation<br/>
                Rajiv Gandhi Bhavan,<br/>
                Sharanpur Road, Nashik<br></br>
            <Icon icon="material-symbols:phone-in-talk" />0253 - 2575631 / 2 / 3 / 4<br></br>
            <Icon icon="material-symbols:mail" />info@example.com</h7>
            </Col>

            <Col md={3}>
                <h6>Quick Links</h6>
                <h7>About Us</h7><br></br>
                <h7>Contact Us</h7><br></br>
                <h7>Civic Services</h7><br></br>
                <h7>Support</h7><br></br>
                <h7>Terms & Conditions</h7><br></br>
            </Col>
            <Col md={6}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59987.92628001738!2d73.75065146033928!3d19.99821300330056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebade77b6b2d%3A0xe95b9b55a4380b08!2sNashik%20Municipal%20Corporation!5e0!3m2!1sen!2sin!4v1673288523609!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </Col>
        </Row>
    </div>
  )
}

export default footer