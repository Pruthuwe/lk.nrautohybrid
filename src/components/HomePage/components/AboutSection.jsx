import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => (
  <div className="section section-padding-02">
    <div className="container">
      {/* About Wrapper Start */}
      <div className="about-wrapper">
        <div className="row align-items-end">
          <div className="col-lg-6">
            {/* About Images Start */}
            <div className="about-images">
              <div className="images" data-aos="fade-right" data-aos-delay="200">
                <img src="/assets/images/about/about.webp" alt="About" />
              </div>
              <div className="exprience" data-aos="fade-up" data-aos-delay="400">
                <p><strong>30</strong> years Exprience</p>
              </div>
            </div>
            {/* About Images End */}
          </div>
          <div className="col-lg-6">
            {/* About Content Start */}
            <div className="about-content" data-aos="fade-left" data-aos-delay="200">
              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Welcome to <strong>Carserv</strong>.</h5>
                <h2 className="main-title">Latest Equipments with Trusted Service</h2>
              </div>
              {/* Section Title End */}

              <p>Car servicing rationally encounter consequences extremely painful. Nor again is there anyone who loves or pursues take a trivial example, which of us undertakes chooses</p>
              <p>Car servicing rationally encounter consequences extremely painful. Nor again is there anyone who loves or pursues </p>

              {/* About Count Start */}
              <div className="about-count">
                {/* About Count Start */}
                <div className="single-count">
                  <span className="count">5000+</span>
                  <p>Clients</p>
                </div>
                {/* About Count End */}
                {/* About Count Start */}
                <div className="single-count">
                  <span className="count">35+</span>
                  <p>Branch</p>
                </div>
                {/* About Count End */}
                {/* About Count Start */}
                <div className="single-count">
                  <span className="count">110+</span>
                  <p>Awards</p>
                </div>
                {/* About Count End */}
              </div>
              {/* About Count End */}

              <Link to="#" className="btn btn-custom-01">Get Appointment</Link>
            </div>
            {/* About Content End */}
          </div>
        </div>
      </div>
      {/* About Wrapper End */}
    </div>
  </div>
);

export default AboutSection;
