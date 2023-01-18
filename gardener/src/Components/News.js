import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import '../css/news.css'
function News() {

  const navigate = useNavigate()
  const gardens = [1, 2, 3, 4]


  const readpdf = () => {
    return (
      navigate('/pdfreader')
    )
  }
  return (
    <div className='news'>

      <h1 style={{ color: '#0F4229', display: 'flex', justifyContent: 'center' }}>News</h1>
      <Container >
        {
          gardens.map(g => {
            return (
              <Row className='newsrow'>
                <Col style={{ padding: '1%' }} sm={2}>
                  <img src="http://cdn.shopify.com/s/files/1/0047/9730/0847/articles/nurserylive-a-lush-green-garden-for-a-sunny-balcony8.jpg?v=1617211451" style={{ height: '100%', width: '100%' }} />
                </Col>
                <Col style={{ padding: '1%' }} sm={10}>
                  <h3>Indonesia president supports plan to scale back</h3>
                  <h6>Description</h6>
                  <Button onClick={readpdf} style={{ marginTop: '1%' }} lg='sm' variant='outline-success'>Read More</Button>
                </Col>
              </Row>

            )
          })
        }

      </Container>

    </div>
  )
}

export default News