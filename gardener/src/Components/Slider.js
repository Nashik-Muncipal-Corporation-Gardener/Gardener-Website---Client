import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {Container,Carousel} from 'react-bootstrap';
import '../css/slider.css'
function Slider() {
  return (
    <div className='slider'>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.marathwadafriendcircle.com/img/slide1.jpeg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?cs=srgb&dl=pexels-pixabay-158028.jpg&fm=jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/garden-flowers-mae-fah-luang-garden-locate-doi-tung-chiang-rai-thailand_335224-968.jpg?w=2000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider