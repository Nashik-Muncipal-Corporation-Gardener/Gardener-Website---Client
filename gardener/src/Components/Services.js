import React, { useState ,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/services.css'
import axios from 'axios';
import url from '../Uri';
import '../css/services.css'
function Services() {

    const [isAnnouncementFetched,setIsAnnouncementsFetched]=useState(false)
    
    const [announcements, setAnnouncements] = useState([])

    const navigate = useNavigate()

    const grievance = () => {
        // console.log(localStorage.getItem("jwtTokenUser"))
        if(localStorage.getItem("jwtTokenUser")===null){
            navigate('/signin')
        }else{
            navigate('/usergrievance')
        }
    }

    const permissions = () => {
        navigate('/permissions')
    }

    useEffect(()=>{

        if(!isAnnouncementFetched){
            fetchAnnouncements()
        }
        
      })

      function fetchAnnouncements(){
        axios.get(url + "/announcements")
            .then(function (response) {
                // console.log(response.data)
                setAnnouncements([...response.data].reverse()) 
                setIsAnnouncementsFetched(true)
            })
            .catch(function (error) {
                console.log(error);
            });
        }

     
    return (
        <div className='Services'>
            <Row className="Announcement_bar">
                
                <marquee>
                    {
                        announcements.map(a=>{
                            return(
                                <p>{a.title}</p>
                            )
                        })
                    }
                </marquee>
              
            </Row>
                    
                    <Container>
            <Row >
                <Col sm={4}>
                <Card style={{height:'100%'}} >
                <Card.Body>
                    <Card.Title>News</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    <ul className=' mt-3' list-style="">
                                <marquee width="100%" direction="up" height="100px" scrollamount="2">
                                    {
                                        announcements.map(a=>{
                                            return(
                                                <li>{a.title}</li>
                                            )
                                        })
                                    }
                                    
                                </marquee>
                    </ul>
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </Col>

                <Col sm={4}>
                <Card style={{height:'100%'}} >
                <Card.Body>
                    <Card.Title>About NMC</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oposed to using 'Content here,
                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
                            Ipsum as their default model text
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </Col>
                
                <Col sm={4}>
                <Card style={{height:'100%'}} >
                <Card.Body>
                    <Card.Title>Commissioner</Card.Title>
                    <hr></hr>
                    <Card.Img   src='https://nmc.gov.in/assets/img/commi_cpulkundvar.jpg' />
                    <Card.Text>
                        <br></br>
                    <h5 className='text-center'>डॉ. चंद्रकांत पुलकुंडवार, भा. प्र. से.</h5>
                        <p className='text-center'>आयुक्त तथा प्रशासक</p>
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </Col>
            </Row>


            <Row style={{marginTop:'20px',padding:'2%'}}>
                <Col sm={4}>
                <img className="img-fluid rounded" src="/images/75.jpg" />
                </Col>

                <Col sm={4}>
                <h1 className="display-1 ">75</h1>
                        <p className="  text-center">Year of Freedom</p>
                        <h1 className="display-5">Azadi Ka Amrit Mahotsav</h1>
                        <p className="mb-4">75 years of Indian Independence celebrated Azadi ka Amrit Mahotsav.There are five themes of the 'Azadi Ka Amrit Mahotsav</p>
                    
                </Col>
                
                <Col sm={4}>
                <video className='img-fluid ' width="890" height="400" controls>
                                    <source src="/images/front_video.mp4" type="video/mp4" />
                 </video>
                 <video className='img-fluid ' width="890" height="400" controls>
                                    <source src="/images/front_video.mp4" type="video/mp4" />
                                </video>
                </Col>
            </Row>

            <Row style={{marginTop:'20px',padding:'2%'}}>
                        <Col sm={4}  onClick={()=>navigate('/acheivements')} >
                            <center>
                            <img src="/images/1.png" width="100" height="100" alt="" />
                            <p >Achievement</p>
                            </center>
                        </Col>
                        <Col sm={4} onClick={grievance}  >
                            <center>
                            <img src="/images/Grievance.png" width="100" height="100" alt="" />
                            <p >Greviance</p>
                            </center>
                        </Col>
                        <Col sm={4} onClick={permissions}  >
                            <center>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3I2yi1g6DJgjuDUkwtwH2Hr0boSpDEsvuUA&usqp=CAU" width="100" height="100" alt="" />
                            <p >Permission</p>
                            </center>
                        </Col>
                       
                       
                        </Row>
                        </Container>
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
                    <div className="container-xxl py-5">
                        <div className="container">
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
                        </div>
                    </div>
                    {/* <!-- Service End --> */}
                </div>
         




    )
}
export default Services