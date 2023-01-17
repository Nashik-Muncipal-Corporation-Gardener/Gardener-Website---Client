import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../css/slider.css'
function Slider() {
  return (
    <div className="container-width-auto">
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img className="w-100 " src="/images/carousel1.jpg" alt="Image" />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h1 className="text-white ">Garden a way to feel happy </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img className="w-100 " src="/images/carousel2.jpg" alt="Image" />
              <div className="carousel-caption top-0 bottom-0  start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h1 className="text-white">Welcome to my website</h1>

                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img className="w-100 " src="/images/carousel3.jpg" alt="Image" />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px;" }}>
                  <h1 className="text-white">Welcome to my website</h1>

                </div>
              </div>
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <!-- Carousel End --> */}

      </div>
    </div>
  )
}

export default Slider