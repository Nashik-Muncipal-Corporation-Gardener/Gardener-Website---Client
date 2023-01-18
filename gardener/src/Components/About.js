import React from 'react'

const About = () => {
  return (
    <div>

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className=" col-md-11" >
              <div className="text-center my-3">
                <p className="d-inline-block text-center text-uppercase  fw-bold fs-5 p-2 mb-0">
                  About NMC
                </p>
              </div>
              <img src="/images/nmc.jpeg" className='img-fluid rounded-5' height="380px" width="960" />
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
                the civic body had decided to outsource its gardens to private parties for maintenance.
                It had appealed to people to select the garden of their choice and carry out with the repair,
                tree plantation and maintenance work.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      <div className="container py-5">
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
      </div>


    </div>
  )
}

export default About
