import React, {useState} from 'react'
import '../css/gardens.css'
import Navbar from './NavigationBar';
import { Container, Modal, Button } from 'react-bootstrap';
import Footer from './footer'
function News() {
    const gardens=[1,2,3,4]
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className='gardens'>
          <Navbar/>
          <div className='startdiv' >
          <h1>Nashik Muncipal Corporation</h1>
          </div>
          <br></br><br></br>
          <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>News</h1>
          <Container >
              {
                  gardens.map(g=>{
                      return(
                      <figure class="image-block">
                                  {/* <img src="http://www.marathwadafriendcircle.com/img/slide1.jpeg" alt="" /> */}
                                  <figcaption>
                                      <h6>
                                      Indonesia president supports plan to scale back
                                      </h6>
                                      {/* set 6 line limit */}
                                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam expedita deserunt voluptatem ad, adipisci omnis nostrum eius dicta aspernatur quae, dignissimos iusto commodi cupiditate beatae praesentium laudantium rerum eos inci.</p>
                                      <button onClick={handleShow}>
                                          Read More
                                      </button>
                                  </figcaption>
                              </figure>
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