import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <div className="section section-padding-02">
    <div className="container">
      {/* Call to Action Wrapper Start */}
      <div className="call-to-action-wrapper">
        {/* Call to Action Content Start */}
        <div className="call-to-action-content">
          <div className="content-wrapper">
            {/* Section Title Start */}
            <div className="section-title section-title-white">
              <h5 className="sub-title">Emergency Calls 24/7</h5>
              <h2 className="main-title">+94 77 216 6306</h2>
            </div>
            {/* Section Title End */}
            <p>Car servicing rationally encounter consequences extremely painful. Nor again is there anyone who loves or pursues of more than a quality servicing is very important</p>
            <Link to="/contact" className="btn btn-custom-01">
              Get a Quote
            </Link>
          </div>
          <img className="shape" src="/assets/images/call-to-action.png" alt="Call to Action" />
        </div>
        {/* Call to Action Content End */}

        {/* Call to Action Images Start */}
        <div 
          className="call-to-action-images" 
          style={{ backgroundImage: 'url(/assets/images/call-to-action-bg.webp)' }}
        ></div>
        {/* Call to Action Images End */}
      </div>
      {/* Call to Action Wrapper End */}
    </div>
  </div>
);

export default CallToAction;
