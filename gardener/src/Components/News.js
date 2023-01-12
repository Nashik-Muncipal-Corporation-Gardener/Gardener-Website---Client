import React, {useState} from 'react'
import Navbar from './NavigationBar';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import Footer from './footer'
import '../css/news.css'
function News() {
    const gardens=[1,2,3,4]
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className='news'>
          <Navbar/>
          
          <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>News</h1>
          <Container >
              {
                  gardens.map(g=>{
                      return(
                            <Row>
                              <Col style={{padding:'1%'}} sm={2}>
                              <img src="http://cdn.shopify.com/s/files/1/0047/9730/0847/articles/nurserylive-a-lush-green-garden-for-a-sunny-balcony8.jpg?v=1617211451" style={{height:'100%',width:'100%'}}/>
                              </Col>
                              <Col style={{padding:'1%'}} sm={10}>
                              <h3>News Title</h3>
                              <h6>Description</h6>
                              <Button style={{marginTop:'1%'}} lg='sm' variant='outline-success'>Read More</Button>
                              </Col>
                            </Row>
                        
                      )
                  })
              }
          
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Indonesia president supports plan to scale back</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam expedita deserunt voluptatem ad, adipisci omnis nostrum eius dicta aspernatur quae, dignissimos iusto commodi cupiditate beatae praesentium laudantium rerum eos incidunt alias quasi assumenda rem voluptates quo. Libero iusto excepturi ratione! Provident porro quaerat maiores quae exercitationem ex nobis praesentium numquam adipisci esse iure perspiciatis harum consequatur alias, ut aperiam qui aspernatur minus totam labore accusantium earum illum? Est molestiae, autem quaerat, placeat delectus ratione quas officiis quibusdam vitae totam commodi distinctio quo ducimus temporibus odit aut inventore iure! Mollitia quis error veniam molestias quas necessitatibus autem vero architecto beatae temporibus, facilis laudantium reprehenderit soluta unde alias odio sequi provident facere ipsam consectetur placeat quibusdam ad itaque possimus? Vitae quas doloribus non alias veniam quis, quia illum provident perspiciatis.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          </Container>
          <Footer/>
          
      </div>
    )
  }

export default News