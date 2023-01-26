import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import '../css/news.css'
import Footer from './Footer';
import axios from 'axios';
import url from '../Uri';
import NavigationBar from './NavigationBar';

function News() {

  const navigate = useNavigate()
  const [isNewsFetched, setIsNewsFetched]=useState(false)

  const [news,setNews]=useState([])
  useEffect(()=>{

    if(!isNewsFetched){
        fetchNews()
    }
    
  })

  function fetchNews(){
    axios.get(url + "/news")
        .then(function (response) {
            setNews([...response.data].reverse())       
            setIsNewsFetched(true)
        })
        .catch(function (error) {
            console.log(error);
        });
  }
  function viewPDF(pdf){
    console.log("Viewing pdf")
    navigate('/pdfreader', {state:{pdf}})
  }
  return (
    <div className='news'>
<NavigationBar/>
      <div className="container text-start py-5">
        <p className="d-inline-block  text-uppercase  fw-bold fs-5 mb-0">
          News
        </p>
        <hr className='text-danger fw-bold' />
        <Container >
          {
            news.map(n=> {
              return (
                <Row className='newsrow'>
                  <Col style={{ padding: '1%' }} sm={10}>
                    <h3>{n.title}</h3>
                    <h6>{n.description}</h6>
                    <Button onClick={()=>viewPDF(n.document)} style={{ marginTop: '1%' }} lg='sm' variant='outline-success'>Read More</Button>
                  </Col>
                </Row>

              )
            })
          }

        </Container>

      </div>
      <Footer/>
    </div>
  )
}

export default News