import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
  return (
    <div>

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className=" col-md-11" >
              <div className="text-start ">
                <p className="d-inline-block  text-uppercase  fw-bold fs-5 mb-0">
                  About NMC
                </p>
                <hr className='text-danger fw-bold' />
              </div>
              <p className="mb-4 p-3">
                Nmc Garden in Nashik is one of the leading businesses in the Parks.
                Nmc Garden in Jail Road, Nashik is top player in the category Parks in the Nashik.
                This well-known establishment acts as a one-stop destination servicing customers both local and
                from other parts of Nashik.
                Over the course of its journey, this business has established a firm foothold in it's industry.
                Two months after the Nashik Municipal Corporation (NMC) decided to outsource its gardens for
                maintenance and after the list of 452 gardens was uploaded on its official website,
                the NMC now finds itself with almost no takers for the maintenance programme.So far,
                only one party has shown interest in maintaining three gardens. Owing to shortage of funds and
                manpower,
                the civic body had decided to outsource its gardens to private parties for maintenance. <br /><br />
                It had appealed to people to select the garden of their choice and carry out with the repair,
                tree plantation and maintenance work.
                Nmc Garden in Nashik is one of the leading businesses in the Parks. Nmc Garden in Jail Road, Nashik is top player in the category Parks in the Nashik. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Nashik. Over the course of its journey, this business has established a firm foothold in it's industry. Two months after the Nashik Municipal Corporation (NMC) decided to outsource its gardens for maintenance and after the list of 452 gardens was uploaded on its official website, the NMC now finds itself with almost no takers for the maintenance programme.So far, only one party has shown interest in maintaining three gardens. Owing to shortage of funds and manpower, the civic body had decided to outsource its gardens to private parties for maintenance. It had appealed to people to select the garden of their choice and carry out with the repair, tree plantation and maintenance work.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}


      <div className="container text-start ">
        <p className="d-inline-block  text-uppercase  fw-bold fs-5 mb-0">
          Testimonials
        </p>
        <hr className='text-danger fw-bold' />
      </div>
      {/* <!-- Testimonial section start --> */}
      <div className='container-fluid p-3 bg-light'>
        <div className="row py-2 mt-3">
          <div className="col px-5">

            <Swiper
              modules={[Navigation, A11y,]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide >
                <div style={{ height: "500px" }}>
                  <div className="card text-center shadow  justify-content-center "   >

                    <div className="card-body p-4" >
                      <img src="https://pmsvanidhi.mohua.gov.in/Akam/images/testimonial-img.svg" height="40" width="40" />
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="">Read More</a><br/>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjYq2o4ni8kldXDc5-92sqJd0Wqm-fnDvT5H5-Io&s" height="80" width="80" className=' text-center position-relative mt-3' />
                    </div>

                    <div className='bg-dark p-5 text-white'>
                      <p>Mr Dinesh Zatke (Aurangabad)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             <SwiperSlide >
                <div style={{ height: "500px" }}>
                  <div className="card text-center shadow  justify-content-center "   >

                    <div className="card-body p-4" >
                      <img src="https://pmsvanidhi.mohua.gov.in/Akam/images/testimonial-img.svg" height="40" width="40" />
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="">Read More</a><br/>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjYq2o4ni8kldXDc5-92sqJd0Wqm-fnDvT5H5-Io&s" height="80" width="80" className=' text-center position-relative mt-3' />
                    </div>

                    <div className='bg-dark p-5 text-white'>
                      <p>Mr Dinesh Zatke (Aurangabad)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             <SwiperSlide >
                <div style={{ height: "500px" }}>
                  <div className="card text-center shadow  justify-content-center "   >

                    <div className="card-body p-4" >
                      <img src="https://pmsvanidhi.mohua.gov.in/Akam/images/testimonial-img.svg" height="40" width="40" />
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="">Read More</a><br/>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjYq2o4ni8kldXDc5-92sqJd0Wqm-fnDvT5H5-Io&s" height="80" width="80" className=' text-center position-relative mt-3' />
                    </div>

                    <div className='bg-dark p-5 text-white'>
                      <p>Mr Dinesh Zatke (Aurangabad)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             <SwiperSlide >
                <div style={{ height: "500px" }}>
                  <div className="card text-center shadow  justify-content-center "   >

                    <div className="card-body p-4" >
                      <img src="https://pmsvanidhi.mohua.gov.in/Akam/images/testimonial-img.svg" height="40" width="40" />
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="">Read More</a><br/>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjYq2o4ni8kldXDc5-92sqJd0Wqm-fnDvT5H5-Io&s" height="80" width="80" className=' text-center position-relative mt-3' />
                    </div>

                    <div className='bg-dark p-5 text-white'>
                      <p>Mr Dinesh Zatke (Aurangabad)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             <SwiperSlide >
                <div style={{ height: "500px" }}>
                  <div className="card text-center shadow  justify-content-center "   >

                    <div className="card-body p-4" >
                      <img src="https://pmsvanidhi.mohua.gov.in/Akam/images/testimonial-img.svg" height="40" width="40" />
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="">Read More</a><br/>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjYq2o4ni8kldXDc5-92sqJd0Wqm-fnDvT5H5-Io&s" height="80" width="80" className=' text-center position-relative mt-3' />
                    </div>

                    <div className='bg-dark p-5 text-white'>
                      <p>Mr Dinesh Zatke (Aurangabad)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial section start --> */}


      {/* <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className=" display-3 ">
              <img className='ml-3' src="/images/mission.png" />
              <h5 className="display-3 mb-2">Our Mission</h5>
            </div>
            <p className=" text-dark team-item rounded" >Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.
              Ad sapiente inventore nisi, sint est veniam amet. Qui fugiat sunt tenetur tempore,
              dignissimos enim quam labore nobis, quia, eum quos beatae?</p>
          </div>

          <div className="col-md-5 vision">
            <div className="  display-3 " >
              <img src="/images/vision.png" />
              <h5 className="display-3 mb-2 ">Our Vision</h5>
            </div>
            <p className=" text-dark team-item rounded" >Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.
              Ad sapiente inventore nisi, sint est veniam amet. Qui fugiat sunt tenetur tempore,
              dignissimos enim quam labore nobis, quia, eum quos beatae?</p>
          </div>
        </div>
      </div> */}


    </div>
  )
}

export default About
