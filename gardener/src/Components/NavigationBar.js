import React from 'react'
import Button from 'react-bootstrap/Button';
const NavigationBar = () => {
  return  (
    <div className='nav'>
      <div className='right-nav'>
        <a className='navlink' href="url">Home</a>
        <a className='navlink' href="url">About Us</a>
        <a className='navlink' href="url">Garden</a>
        <a className='navlink' href="url">Contact Us</a>
        <Button className='signinbtn' variant="success">Sign In | Sign Up</Button>
      </div>
    </div>
  );
}

export default NavigationBar