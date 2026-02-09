import React from 'react';
import WorkStep from './WorkStep';

const HowWeWorkSection = () => (
  <div className="section section-padding-02">
    <div className="container">
      {/* Section Title Start */}
      <div className="section-title text-center">
        <h5 className="sub-title">Working Process</h5>
        <h2 className="main-title">How we work</h2>
        <p>
          Trusted and reliable service is our main goal extremely <br /> painful. Nor again is there anyone who loves
        </p>
      </div>
      {/* Section Title End */}

      {/* How we Work Wrapper Start */}
      <div className="how-we-work-wrapper">
        <div className="row">
          <WorkStep 
            number="01"
            image="/assets/images/work/work-1.webp"
            title="Book appointment"
            delay="100"
          />
          <WorkStep 
            number="02"
            image="/assets/images/work/work-2.webp"
            title="Bring your Vehical"
            delay="200"
          />
          <WorkStep 
            number="03"
            image="/assets/images/work/work-3.webp"
            title="Get it Repair"
            delay="300"
          />
          <WorkStep 
            number="04"
            image="/assets/images/work/work-4.webp"
            title="Ready for Deliver"
            delay="400"
          />
        </div>
      </div>
      {/* How we Work Wrapper End */}
    </div>
  </div>
);

export default HowWeWorkSection;
