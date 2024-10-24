import React from 'react';
import './About.css';
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.about_main_img} alt="About Us" />
          </div>
          <div className="content-right">
            <div className="section-title">
              <h3>About Our Bus Service</h3>
            </div>
            <p className="text">
              We are committed to making your travel convenient and stress-free. Our extensive bus routes cover the major areas, providing reliable and safe transportation services.
            </p>
            <p className="text">
              With a focus on comfort, punctuality, and affordability, our buses are equipped with modern amenities. Whether you're commuting to work or exploring the city, we have a solution tailored for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
