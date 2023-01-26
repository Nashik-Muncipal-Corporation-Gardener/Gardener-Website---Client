import React , {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Carousel} from 'react-bootstrap';
import '../css/slider.css'
function Slider() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div >
      {/* <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img className="w-100" src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?w=996&t=st=1674041612~exp=1674042212~hmac=932e92e0c3c86c43ef02031a910055898970d10fc4281c1d9332a66ee9f2cba9" alt="Image" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
              <div className="carousel-caption top-5 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h4 className="display-3 slider_name ">Garden a way to feel happy</h4>
                  <NavLink to="/aboutus" className="btn btn-success  py-md-3 px-md-5 me-3">About Us</NavLink>
                  <NavLink to="/contact" className="btn btn-success  py-md-3 px-md-5">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img className="w-100" src="https://img.freepik.com/free-photo/parks-mountains-reflection-mountain-decoration-garden_1417-1025.jpg?w=1380&t=st=1674041764~exp=1674042364~hmac=dea2e42caa68f2e420d3fa5bff183c0c51daec969f1e6b6aede7351eb311fd49" alt="Image" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
              <div className="carousel-caption top-5 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h4 className="display-3 slider_name ">Garden a way to feel happy</h4>
                  <NavLink to="/aboutus" className="btn btn-success  py-md-3 px-md-5 me-3">About Us</NavLink>
                  <NavLink to="/contact" className="btn btn-success  py-md-3 px-md-5">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img className="w-100" src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?w=996&t=st=1674041612~exp=1674042212~hmac=932e92e0c3c86c43ef02031a910055898970d10fc4281c1d9332a66ee9f2cba9" alt="Image" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
              <div className="carousel-caption top-5 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h4 className="display-3 slider_name ">Garden a way to feel happy</h4>
                  <NavLink to="/aboutus" className="btn btn-success  py-md-3 px-md-5 me-3">About Us</NavLink>
                  <NavLink to="/contact" className="btn btn-success  py-md-3 px-md-5">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img className="w-100" src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?w=996&t=st=1674041612~exp=1674042212~hmac=932e92e0c3c86c43ef02031a910055898970d10fc4281c1d9332a66ee9f2cba9" alt="Image" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
              <div className="carousel-caption top-5 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h4 className="display-3 slider_name ">Garden a way to feel happy</h4>
                  <NavLink to="/aboutus" className="btn btn-success  py-md-3 px-md-5 me-3">About Us</NavLink>
                  <NavLink to="/contact" className="btn btn-success  py-md-3 px-md-5">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="1000">
            <img className="w-100" src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?w=996&t=st=1674041612~exp=1674042212~hmac=932e92e0c3c86c43ef02031a910055898970d10fc4281c1d9332a66ee9f2cba9" alt="Image" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
              <div className="carousel-caption top-5 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h4 className="display-3 slider_name ">Garden a way to feel happy</h4>
                  <NavLink to="/aboutus" className="btn btn-success  py-md-3 px-md-5 me-3">About Us</NavLink>
                  <NavLink to="/contact" className="btn btn-success  py-md-3 px-md-5">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#header-carousel"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-success rounded-circle m-2" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
          data-bs-slide="next">
          <span className="carousel-control-next-icon  bg-success rounded-circle m-2" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
   

    <div className='slider'>
       <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?w=996&t=st=1674041612~exp=1674042212~hmac=932e92e0c3c86c43ef02031a910055898970d10fc4281c1d9332a66ee9f2cba9"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Garden a way to feel happy</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?w=996&t=st=1674041612~exp=1674042212~hmac=932e92e0c3c86c43ef02031a910055898970d10fc4281c1d9332a66ee9f2cba9"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Garden a way to feel happy</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?w=996&t=st=1674041612~exp=1674042212~hmac=932e92e0c3c86c43ef02031a910055898970d10fc4281c1d9332a66ee9f2cba9"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Garden a way to feel happy</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}


export default Slider