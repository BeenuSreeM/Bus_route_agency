import React from 'react';
import './Portfolio.css';
import sections from '../../constants/data';

const Portfolio = () => {
  return (
    <section className="portfolio section-p bg-dark" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <div className="section-t text-center">
            <h3>Our Routes & Services</h3>
            <p className="text">
              Explore our extensive bus routes, real-time tracking features, and commitment to providing a reliable service across the city.
            </p>
          </div>

          <div className="item-list text-center text-white grid">
            {sections.portfolio.map((portfolio) => {
              return (
                <div
                  className="item flex flex-center flex-column translate-effect"
                  key={portfolio.id}
                  style={{
                    background: `url(${portfolio.image})`,
                    backgroundSize: 'cover',   // Ensures the image covers the entire area
                    backgroundPosition: 'center',  // Centers the image within the container
                    backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div className="item-title fs-25 fw-6">{portfolio.title}</div>
                  <div className="text text-white">{portfolio.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
