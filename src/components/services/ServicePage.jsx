import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import AboutSection from '../HomePage/components/AboutSection';
import ServicesSection from '../HomePage/components/ServicesSection';
import TestimonialsSection from '../HomePage/components/TestimonialsSection';
import HowWeWorkSection from '../HomePage/components/HowWeWorkSection';
import BrandSection from '../HomePage/components/BrandSection';

const ServicePage = () => {
  return (
    <>
      <Header />

      {/* Page Banner Section Start */}
      <div className="section page-banner-section" style={{backgroundImage: 'url(/assets/images/page-banner-bg.webp)'}}>
        <div className="container">
          {/* Page Banner Wrapper Start */}
          <div className="page-banner-wrapper">

            {/* Page Banner Content Start */}
            <div className="page-banner-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Services</h5>
                <h2 className="main-title">What we Provide.</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Services</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <HowWeWorkSection />
        <BrandSection />
        <Footer />

        {/* Back To Start */}
        <a href="#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
        {/* Back To End */}
    </>
  );
};

export default ServicePage;