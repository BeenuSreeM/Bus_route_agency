import React from 'react';
import './Features.css';
import sections from '../../constants/data';  // Assuming data is stored here
import SingleFeatures from './SingleFeatures';

const Features = () => {
  return (
    <section className="features section-p" id="features">
      <div className="container">
        <div className="features-content">
          <div className="item-list">
            {sections.features.map((feature) => {
              return <SingleFeatures key={feature.id} {...feature} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
