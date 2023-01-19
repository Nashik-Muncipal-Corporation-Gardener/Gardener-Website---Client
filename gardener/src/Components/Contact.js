import React from 'react'
import "../css/contact.css"
import { TextField, Button } from 'react-bootstrap'


const Contact = () => {
    const submit = () => {
        alert("Message Sent Successfully")
    }
    return (
        <div>
            <div className=" container">
                <div className="text-center my-3">
                    <p className="d-inline-block text-center text-uppercase  fw-bold fs-5 p-2 mb-0">
                        contact us
                    </p>
                </div>
                <div className="row px-5 py-5 align-items-center m-auto">
                    <div className="col-md-6">
                        <div className="iframe_container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22605.43460090856!2d73.77412754796866!3d20.012696821307422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebade77b6b2d%3A0xe95b9b55a4380b08!2sNashik%20Municipal%20Corporation!5e0!3m2!1sen!2sin!4v1667118107477!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                                className="responsive_iframe"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form >
                            <input name="name" margin='normal' type="text" placeholder='Lorem Ipsum' variant='outlined' label="Full Name" fullWidth required />
                            <input name="mail" margin='normal' type="email" placeholder='loremipsum@abc.com' variant='outlined' label="Email" fullWidth required />
                            <input name="mobileNo" margin='normal' type="number" placeholder='+91 6666678321' variant='outlined' label="Contact No" fullWidth required />
                            <input name="message" margin='normal' type="text" placeholder='Your meesage' variant='outlined' label="Message" minRows={4} multiline fullWidth required />
                            <Button onClick={submit} type="submit" className='px-3 my-2 bg-info text-white submit' variant='contained'>Send Message</Button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
