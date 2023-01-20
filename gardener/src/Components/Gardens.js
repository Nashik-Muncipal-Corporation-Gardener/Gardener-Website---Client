import React from 'react'
import '../css/gardens.css'
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
function Gardens() {

    //     const gardens=[1,2,3,4]
    //   return (
    //     <div className='gardens'>
    //         {/* <div className='startdiv' >
    //         <h1>Nashik Muncipal Corporation</h1>
    //         </div>
    //         <br></br><br></br> */}
    //         <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>Gardens</h1>
    //         <Container >
    //             {
    //                 gardens.map(g=>{
    //                     return(
    //                     <figure class="image-block">

    //                                 {/* <img src="http://www.marathwadafriendcircle.com/img/slide1.jpeg" alt="" /> */}
    //                                 <figcaption>
    //                                     <h4>
    //                                         Nashik East
    //                                     </h4>
    //                                     <p>2Q3J+JXF, Gole Colony, Nashik, Maharashtra 422002.</p>
    //                                     <button>
    //                                         Read More
    //                                     </button>
    //                                 </figcaption>
    //                     </figure>
    //                     )
    //                 })
    //             }


    //         </Container>

    //     </div>
    //   )

    return (
        <>
            {/* <!-- Service Start --> */}
            <NavigationBar/>
                <div className="container" style={{padding:'2%'}}>
                    <div className=" container text-start ">
                        <p className="d-inline-block  text-uppercase  fw-bold fs-5 mb-0">
                            Our Gardens
                        </p>
                        <hr className='text-danger fw-bold' />
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" >
                                <div className="service-item  d-flex h-100">
                                    <div className="service-img ">
                                        <img className="img-fluid" src="/images/carousel1.jpg" alt="" />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square rounded-circle mx-auto mb-3">
                                            <img className="img-fluid bg-white rounded-circle p-2" src="/images/icon/icon-1.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Nashik East</h4>
                                        <p className="mb-4">2Q3J+JXF, Gole Colony, Nashik, Maharashtra 422002.</p>
                                        <a className="btn btn-sm bg-light" href="/#/garden"><i className="fa fa-plus text-success me-2"></i>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" >
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img ">
                                        <img className="img-fluid" src="/images/carousel1.jpg" alt="" />
                                    </div>
                                    <div className="service-text  p-5">
                                        <div className="btn-square  mx-auto mb-3">
                                            <img className="img-fluid bg-white rounded-circle p-2" src="/images/icon/icon-2.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Cidco</h4>
                                        <p className="mb-4">WRXP+HX9, Mahatma Gandhi Rd, Rajwada Nagar, Deolali Gaon, Nashik, Maharashtra 422214.</p>
                                        <a className="btn btn-sm bg-light" href="/#/garden"><i className="fa fa-plus text-success me-2"></i>Read More</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" >
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img ">
                                        <img className="img-fluid " src="/images/carousel1.jpg" alt="" />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square  mx-auto mb-3">
                                            <img className="img-fluid bg-white rounded-circle p-2" src="/images/icon/icon-3.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Panchvati</h4>
                                        <p className="mb-4">PWD Nashik New Building, 422010, Untwadi Rd, Patrakar Colony, Parijat Nagar, Nashik, Maharashtra 422009</p>
                                        <a className="btn btn-sm bg-light" href="/#/garden"><i className="fa fa-plus text-success me-2"></i>Read More</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" >
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img ">
                                        <img className="img-fluid" src="/images/carousel1.jpg" alt="" />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square  mx-auto mb-3">
                                            <img className="img-fluid bg-white rounded-circle p-2" src="/images/icon/icon-4.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Nashik West</h4>
                                        <p className="mb-4">2Q3J+JXF, Gole Colony, Nashik, Maharashtra 422002.</p>
                                        <a className="btn btn-sm bg-light" href="/#/garden"><i className="fa fa-plus text-success me-2"></i>Read More</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" >
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img ">
                                        <img className="img-fluid" src="/images/carousel1.jpg" alt="" />                                    </div>
                                    <div className="service-text  p-5">
                                        <div className="btn-square  mx-auto mb-3">
                                            <img className="img-fluid bg-white rounded-circle p-2" src="/images/icon/icon-5.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Satpur</h4>
                                        <p className="mb-4">XPRP+9VQ, Trimbak Rd, MIDC Area, MIDC, Satpur, Nashik, Maharashtra 422007.</p>
                                        <a className="btn btn-sm bg-light" href="/#/garden"><i className="fa fa-plus text-success me-2"></i>Read More</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" >
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img ">
                                        <img className="img-fluid" src="/images/carousel1.jpg" alt="" />                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square  mx-auto mb-3">
                                            <img className="img-fluid bg-white rounded-circle p-2" src="/images/icon/icon-6.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Cidco</h4>
                                        <p className="mb-4">PWD Nashik New Building, 422010, Untwadi Rd, Patrakar Colony, Parijat Nagar, Nashik, Maharashtra 422009.</p>
                                        <a className="btn btn-sm bg-light" href="/#/garden"><i className="fa fa-plus text-success me-2"></i>Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- Service End --> */}
            <Footer/>
        </>
    )
}

export default Gardens