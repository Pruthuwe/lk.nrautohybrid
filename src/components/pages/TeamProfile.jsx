import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import TestimonialsSection from '../HomePage/components/TestimonialsSection';
import BrandSection from '../HomePage/components/BrandSection';

const TeamProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />

      {/* Page Banner Section Start */}
      <div className="section page-banner-section" style={{backgroundImage: "url(/assets/images/page-banner-bg.webp)"}}>
        <div className="container">
          {/* Page Banner Wrapper Start */}
          <div className="page-banner-wrapper">

            {/* Page Banner Content Start */}
            <div className="page-banner-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Team</h5>
                <h2 className="main-title">Mechanics Profile</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/our-team">Mechanics</Link></li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-4.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Team Profile Section Start */}
      <div className="section section-padding-02">
        <div className="container">

          {/* Team Profile Wrapper Start */}
          <div className="team-profile-wrapper">
            <div className="row">
              <div className="col-lg-6">
                {/* Team Profile Image Start */}
                <div className="team-profile-image">
                  <img src="/assets/images/team/team-profile.webp" alt="Team Profile" />
                </div>
                {/* Team Profile Image End */}
              </div>
              <div className="col-lg-6">
                {/* Team Profile Content Start */}
                <div className="team-profile-Content">
                  <h2 className="name">Stuart Macgil</h2>
                  <span className="designation">Interior Mechanic</span>

                  <h3 className="title">Biography</h3>
                  <p>Car servicing rationally consequences extremely painful is the there anyone who loves or pursues take a trivial undertakes chooses pleasure rationally encounter done the great job for the most of the time and our clients loves to wok </p>

                  <div className="profile-info">
                    <div className="info">
                      <p>Exprience: <span>6 years</span></p>
                      <p>Rating: 4.9</p>
                    </div>
                    <div className="info">
                      <p>Address info: 328D, Marid Drive, Ackland</p>
                    </div>
                    <div className="info">
                      <p>Email: info@carserv.com</p>
                    </div>
                    <div className="info">
                      <p>Phone: <a href="tel:+12254569874">+12(254) 569 874</a></p>
                    </div>
                    <div className="info">
                      <ul className="social">
                        <li><a href="https://wa.me/94772166306" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Team Profile Content End */}
              </div>
            </div>
          </div>
          {/* Team Profile Wrapper End */}

        </div>
      </div>
      {/* Team Profile Section End */}

      {/* Testimonials Section Start */}
      <TestimonialsSection />
      {/* Testimonials Section End */}

      {/* Brand Section Start */}
      <BrandSection />
      {/* Brand Section End */}

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default TeamProfile;