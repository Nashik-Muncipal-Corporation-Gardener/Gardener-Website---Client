import React, {useState} from 'react'
import Navbar from './NavigationBar';
import { useNavigate } from 'react-router-dom';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import Footer from './footer'
import '../css/news.css'
// Core viewer

// Plugins

// Import styles

function News() {

  const navigate=useNavigate()
    const gardens=[1,2,3,4]
    

  const readpdf=()=>{
    return(
      navigate('/pdfreader')
    )
  }
    return (
      <div className='news'>
          <Navbar/>
          
          <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>News</h1>
          <Container >
              {
                  gardens.map(g=>{
                      return(
                            <Row className='newsrow'>
                              <Col style={{padding:'1%'}} sm={10}>
                              <h3>Indonesia president supports plan to scale back</h3>
                              <h6>Description</h6>
                              <Button onClick={readpdf} style={{marginTop:'1%'}} lg='sm' variant='outline-success'>Read More</Button>
                              </Col>
                            </Row>
                        
                      )
                  })
              }
          
          </Container>
          <Footer/>
          
      </div>
    )
  }

export default News