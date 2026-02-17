import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import servicesData from './servicesData.json';
import { generateServiceBrochurePDF, generateCompanyDetailsPDF } from './pdfGenerator';
import './ServiceDetailsPage.css';

const ServiceDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [localSelectedService, setLocalSelectedService] = useState('Turbocharger Repairs');

  // Scroll to top when location key changes (new navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.key]);

  // Use location state if available, otherwise use local state
  const selectedService = location.state?.serviceName || localSelectedService;
  const currentService = servicesData[selectedService];

  const handleServiceClick = (serviceName) => {
    setLocalSelectedService(serviceName);
    // Clear the location state by replacing current location
    navigate('/service', { replace: true, state: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />

      {/* Page Banner Section Start */}
      <div className="section page-banner-section">
        <div className="container">
          {/* Page Banner Wrapper Start */}
          <div className="page-banner-wrapper">

            {/* Page Banner Content Start */}
            <div className="page-banner-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Services</h5>
                <h2 className="main-title">{currentService.title}</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/service">Services</Link></li>
                <li className="breadcrumb-item active">Services Details</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-2.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Service Details Section Start */}
      <div className="section section-padding service-details-section">
        <div className="container">

          {/* Service Details Wrapper Start */}
          <div className="service-details-wrapper">
            <div className="row">
              <div className="col-xl-9 col-lg-8">

                {/* Service Details Content Start */}
                <div className="service-details-content">
                  <div className="details-image">
                    <img src="/assets/images/service/service-details.webp" alt="Service" />
                  </div>
                  <h2 className="title">{currentService.title}</h2>
                  <p>{currentService.description}</p>
                  <p>{currentService.description2}</p>

                  <div className="details-description">
                    <div className="description">
                      <h3>{currentService.section.title}</h3>
                      <p>{currentService.section.description}</p>
                      <ul>
                        {currentService.section.items.map((item, index) => (
                          <li key={index}><i className="fa fa-angle-double-right"></i> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="images">
                      <img src="/assets/images/service/service-dec.webp" alt="Service" />
                    </div>
                  </div>

                  <p>We provide comprehensive {currentService.title.toLowerCase()} with attention to detail and commitment to excellence. Our services are designed to restore and enhance your vehicle's performance.</p>

                  <p>All our services come with quality assurance and warranty coverage. We use only genuine or high-quality parts to ensure long-lasting results.</p>

                  <h3>Service Packages</h3>

                  <p>Choose from our range of service packages tailored to meet your specific needs. All prices are competitive and transparent with no hidden charges.</p>
                </div>
                {/* Service Details Content End */}

                {/* Service Details Price Start */}
                <div className="service-details-price">
                  <div className="row">
                    {currentService.packages.map((pkg, index) => (
                      <div key={index} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        {/* Service Price Start */}
                        <div className="service-price">
                          <h4 className="title"><a href="#">{pkg.name}</a></h4>

                          <div className="price">
                            <span>{pkg.price}</span>
                          </div>
                        </div>
                        {/* Service Price End */}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Service Details Price End */}

              </div>
              <div className="col-xl-3 col-lg-4">
                {/* Sidebar Start */}
                <div className="sidebar">

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar">
                    <ul className="category">
                      {Object.keys(servicesData).map((serviceName) => (
                        <li key={serviceName} className={selectedService === serviceName ? 'active' : ''}>
                          <a 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              handleServiceClick(serviceName);
                            }}
                          >
                            {serviceName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar item-center">
                    <a className="banner" href="#"><img src="/assets/images/banner-1.webp" alt="Banner" /></a>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar">
                    <ul className="download">
                      <li>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            generateServiceBrochurePDF(currentService);
                          }}
                        >
                          <i className="fa fa-file-pdf-o"></i> Download Brochure <span className="fa fa-download"></span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            generateCompanyDetailsPDF(servicesData);
                          }}
                        >
                          <i className="fa fa-file-pdf-o"></i> Company Details <span className="fa fa-download"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Widget Sidebar End */}

                </div>
                {/* Sidebar End */}
              </div>
            </div>
          </div>
          {/* Service Details Wrapper End */}

        </div>
      </div>
      {/* Service Details Section End */}

      <Footer />

      {/* Back To Start */}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/* Back To End */}
    </>
  );
};

export default ServiceDetailsPage;