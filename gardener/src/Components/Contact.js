import React from 'react'
import "../css/contact.css"
import { TextField, Button } from '@mui/material'


const Contact = () => {
    const submit = () => {
        alert("Message Sent Successfully")
    }
    return (
        <div>
            <div className=" container  py-5 vh-50">
                <div className="text-start ">
                    <p className="d-inline-block  text-uppercase  fw-bold fs-5 mb-0">
                        Contact Us
                    </p>
                    <hr className='text-danger fw-bold' />
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
                                <TextField name="name" margin='normal' type="text" placeholder='Lorem Ipsum' variant='outlined' label="Full Name" fullWidth required></TextField>
                                <TextField name="mail" margin='normal' type="email" placeholder='loremipsum@abc.com' variant='outlined' label="Email" fullWidth required></TextField>
                                <TextField name="mobileNo" margin='normal' type="number" placeholder='+91 6666678321' variant='outlined' label="Contact No" fullWidth required></TextField>
                                <TextField name="message" margin='normal' type="text" placeholder='Your meesage' variant='outlined' label="Message" minRows={4} multiline fullWidth required></TextField>
                                <Button onClick={submit} type="submit" className='px-3 my-2 bg-info text-white submit' variant='contained'>Send Message</Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
