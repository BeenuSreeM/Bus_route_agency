import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id="footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text'>
                  Safe and reliable transportation services, connecting you with the best routes in the city. Call us at 123-456-7890 for inquiries.
                </p>
                <span className='text'>&copy; {date.getFullYear().toString()} YourBusService. All Rights Reserved.</span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
