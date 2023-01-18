import React from 'react'
import '../css/gardens.css'
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
function Gardens() {

    const gardens=[1,2,3,4]
  return (
    <div className='gardens'>
        {/* <div className='startdiv' >
        <h1>Nashik Muncipal Corporation</h1>
        </div>
        <br></br><br></br> */}
        <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>Gardens</h1>
        <Container >
            {
                gardens.map(g=>{
                    return(
                    <figure class="image-block">
                                
                                {/* <img src="http://www.marathwadafriendcircle.com/img/slide1.jpeg" alt="" /> */}
                                <figcaption>
                                    <h4>
                                        Nashik East
                                    </h4>
                                    <p>2Q3J+JXF, Gole Colony, Nashik, Maharashtra 422002.</p>
                                    <button>
                                        Read More
                                    </button>
                                </figcaption>
                    </figure>
                    )
                })
            }
        
       
        </Container>
        
    </div>
  )
}

export default Gardens