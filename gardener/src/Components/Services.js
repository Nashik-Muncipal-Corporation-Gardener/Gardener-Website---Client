import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col ,Card,ListGroup} from 'react-bootstrap';
import '../css/services.css'
function Services() {

    const navigate = useNavigate()

    const grievance = () => {
        navigate('/usergrievance')
    }

    const permissions = () => {
        navigate('/permissions')
    }
    return (
        <>
 <div className=' container-fluid bg-secondary text-white p-1'>
                <marquee>
                    <p>t was the great apostle of peace Mahatma Gandhi, who gave a clarion call of ‘Be the change’. Today, when the world is besieged by war and civil strife</p>
                </marquee>
            </div>
            <Container className='middle_sec'>
        <Row >
        <Col xs={6} md={8} >
        <Card style={{height:'100%'}}>
        <ListGroup variant="flush">
        <ListGroup.Item>Announcements</ListGroup.Item>
            <ListGroup.Item>
            <ul >
                <marquee  direction="up"  scrollamount="2">
                    <li>Announcement 2</li>
                    <li>Announcement 3</li>
                    <li>Announcement 4</li>
                    <li>Announcement 5</li>

                </marquee>
            </ul>
            </ListGroup.Item>   
        </ListGroup>
        </Card>   
        </Col>

        <Col xs={6} md={4} >
        <Card >
      <ListGroup variant="flush">
        <ListGroup.Item>Commissioner</ListGroup.Item>
        <ListGroup.Item><img src='https://nmc.gov.in/assets/img/commi_cpulkundvar.jpg' thumbnail style={{height:'200px'}} />
                        
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <p className='text-center'>डॉ. चंद्रकांत पुलकुंडवार, भा. प्र. से.<br></br>
                        आयुक्त तथा प्रशासक</p>
                        </ListGroup.Item>
        
      </ListGroup>
    </Card>
        </Col>
        
      </Row>
      </Container>

            

            {/* <!-- About Start --> */}
            <Container className='middle_sec'>
                <div className="row ">
                    <div className="col-lg-3 col-md-5 " >
                        <img className="img-fluid rounded" src="/images/75.jfif" />
                    </div>
                    <div className="col-lg-5 col-md-7 ">
                        <h1 className="display-1 ">75</h1>
                        <p className="  text-center">Year of Freedom</p>
                        <h1 className="display-5">Azadi Ka Amrit Mahotsav</h1>
                        <p className="mb-4">75 years of Indian Independence celebrated Azadi ka Amrit Mahotsav.There are five themes of the 'Azadi Ka Amrit Mahotsav</p>
                    </div>

                    <div className="col-lg-4 col-md-12 " data-wow-delay="0.5s">
                        <div className="col-12 col-sm-6 col-lg-12">
                            <div className="border-start ps-4">
                                <video className='img-fluid ' width="890" height="400" controls>
                                    <source src="/images/front_video.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-12">
                                <div className="border-start ps-4">
                                    <video className='img-fluid ' width="890" height="400" controls>
                                        <source src="/images/front_video.mp4" type="video/mp4" />
                                    </video>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <hr></hr>
            {/* <!-- About End --> */}
            <div className='Services'>
                {/* <!--Icons section--> */}
                <div className="container-fluid  text-center pl-5 my-5 ">
                    <div className="row  border-bottom border-2">
                        <div className="text-center " style={{ maxWidth: "300px;" }}>
                            {/* <h1 className="display-5 mb-5 text-success">Citizens Services</h1> */}
                        </div>
                        <Col className=' p-2 citizen_icon'>
                            <img style={{cursor:'pointer'}} src="/images/1.png" width="100" height="100" alt="" />
                            <p style={{cursor:'pointer'}} className="text-dark text-center">Achievement</p>
                        </Col>
                        <Col onClick={grievance} className="col-md-3 col-lg-2 text-white p-2 citizen_icon">
                            <img style={{cursor:'pointer'}} src="/images/Grievance.png" width="100" height="100" alt="" />
                            <p style={{cursor:'pointer'}} className="text-dark text-center">Greviance</p>
                        </Col>
                        <Col onClick={permissions} className="col-md-3 col-lg-2  p-2 citizen_icon text-white">
                            <img style={{cursor:'pointer'}} src="/images/permission.png" width="100" height="100" alt="" />
                            <p style={{cursor:'pointer'}} className="text-dark text-center">Permission</p>
                        </Col>
                        <Col onClick={permissions} className="col-md-3 col-lg-2  p-2 citizen_icon text-white">
                            <img style={{cursor:'pointer'}} src="/images/6.png" width="100" height="100" alt="" />
                            <p style={{cursor:'pointer'}} className="text-dark text-center">Waste Collection</p>
                        </Col>
                        <Col className="col-md-3 col-lg-2  text-white  p-2 citizen_icon">
                            <img style={{cursor:'pointer'}} src="/images/volunteer.png" width="100" height="100" alt="" />
                            <p style={{cursor:'pointer'}} className="text-dark text-center">Volunteers</p>
                        </Col>
                        <Col className="col-md-3 col-lg-2  text-white  p-2 citizen_icon">
                            <img style={{cursor:'pointer'}} src="/images/4.png" width="100" height="100" alt="" />
                            <p style={{cursor:'pointer'}} className="text-dark text-center">Gallery</p>
                        </Col>
                    </div>

                    {/* <!-- Facts Start --> */}
                    <div className="container-fluid facts my-5 py-3" data-parallax="scroll" style={{ background: "url('/images/bg.jpg'), rgba(15, 66, 41, .6)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className=" py-5">
                            <div className="row g-5">
                                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                    <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                    <span className="fs-5 fw-semi-bold text-white">Number of Permission</span>
                                </div>
                                <div className="col-sm-6 col-lg-3 text-center wow fadeIn">
                                    <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                    <span className="fs-5 fw-semi-bold text-white">Solved Permission</span>
                                </div>
                                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                                    <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                    <span className="fs-5 fw-semi-bold text-white">Number of Garden</span>
                                </div>
                                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                                    <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                    <span className="fs-5 fw-semi-bold text-white">Total Volunteers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Facts End --> */}


                    {/* <!-- Service Start --> */}
                    < Container className='middle_sec'>
                            <div className="text-center mx-auto" style={{ maxWidth: "300px;" }}>
                                <h1 className="display-5 mb-5 text-success">Our Gardens</h1>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 " >
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
                                <div className="col-lg-4 col-md-6 " >
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
                                            <a className="btn btn-sm bg-white" href=""><i className="fa fa-plus  text-success me-2"></i>Read More</a>
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
                                            <a className="btn btn-sm bg-white" href=""><i className="fa fa-plus text-success me-2"></i>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Container>
                    {/* <!-- Service End --> */}
                </div>
            </div>


        </>


    )
}
export default Services