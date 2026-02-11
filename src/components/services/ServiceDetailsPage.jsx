import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const ServiceDetailsPage = () => {
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
                <h2 className="main-title">Entire Engine Servicing</h2>
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
      <div className="section section-padding">
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
                  <h2 className="title">Entire Engine Servicing</h2>
                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure</p>
                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because is pain,</p>

                  <div className="details-description">
                    <div className="description">
                      <h3>Engine Diognostic</h3>
                      <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses</p>
                      <ul>
                        <li><i className="fa fa-angle-double-right"></i> Engine check</li>
                        <li><i className="fa fa-angle-double-right"></i> Spark plug replacement</li>
                        <li><i className="fa fa-angle-double-right"></i> Lights check</li>
                        <li><i className="fa fa-angle-double-right"></i> Air-conditioner filter check</li>
                        <li><i className="fa fa-angle-double-right"></i> Suspension check</li>
                        <li><i className="fa fa-angle-double-right"></i> Brake fluid and brakes check</li>
                        <li><i className="fa fa-angle-double-right"></i> Air and fuel filter check</li>
                        <li><i className="fa fa-angle-double-right"></i> Transmission service</li>
                        <li><i className="fa fa-angle-double-right"></i> Repack wheel bearings</li>
                        <li><i className="fa fa-angle-double-right"></i> Engine oil and oil filter change</li>
                      </ul>
                    </div>
                    <div className="images">
                      <img src="/assets/images/service/service-dec.webp" alt="Service" />
                    </div>
                  </div>

                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure</p>

                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because is pain,</p>

                  <h3>Service Costing</h3>

                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses price ar included and can be pay online</p>
                </div>
                {/* Service Details Content End */}

                {/* Service Details Price Start */}
                <div className="service-details-price">
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      {/* Service Price Start */}
                      <div className="service-price">
                        <h4 className="title"><a href="#">Regular Engine <br />Check</a></h4>
                        <a href="#" className="more">Select now</a>

                        <div className="price">
                          <span>$79</span>
                        </div>
                      </div>
                      {/* Service Price End */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      {/* Service Price Start */}
                      <div className="service-price">
                        <h4 className="title"><a href="#">Full Engine <br /> Diagnostic</a></h4>
                        <a href="#" className="more">Select now</a>

                        <div className="price">
                          <span>$145</span>
                        </div>
                      </div>
                      {/* Service Price End */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      {/* Service Price Start */}
                      <div className="service-price">
                        <h4 className="title"><a href="#">Engine Oil and <br /> Filter Change</a></h4>
                        <a href="#" className="more">Select now</a>

                        <div className="price">
                          <span>$65</span>
                        </div>
                      </div>
                      {/* Service Price End */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      {/* Service Price Start */}
                      <div className="service-price">
                        <h4 className="title"><a href="#">Air and Fuel <br /> Filter Check</a></h4>
                        <a href="#" className="more">Select now</a>

                        <div className="price">
                          <span>$50</span>
                        </div>
                      </div>
                      {/* Service Price End */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      {/* Service Price Start */}
                      <div className="service-price">
                        <h4 className="title"><a href="#">Spark plug <br /> Replacement</a></h4>
                        <a href="#" className="more">Select now</a>

                        <div className="price">
                          <span>$110</span>
                        </div>
                      </div>
                      {/* Service Price End */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      {/* Service Price Start */}
                      <div className="service-price">
                        <h4 className="title"><a href="#">New Engine <br /> Replacement</a></h4>
                        <a href="#" className="more">Select now</a>

                        <div className="price">
                          <span>$280</span>
                        </div>
                      </div>
                      {/* Service Price End */}
                    </div>
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
                      <li><Link to="/service-details">Turbocharger Repairs</Link></li>
                      <li><Link to="/service-details">ABS Repairs</Link></li>
                      <li><Link to="/service-details">Dual-Clutch Repairs</Link></li>
                      <li><Link to="/service-details">Turbocharger Replacement</Link></li>
                      <li><Link to="/service-details">Turbocharger Upgrades</Link></li>
                      <li><Link to="/service-details">Diagnostic Services</Link></li>
                      <li><Link to="/service-details">Technical Consultation</Link></li>
                      <li><Link to="/service-details">Spare Parts</Link></li>
                      <li><Link to="/service-details">Quality Assurance</Link></li>
                      <li><Link to="/service-details">Emergency Repairs</Link></li>
                      <li><Link to="/service-details">Performance Tuning</Link></li>
                      <li><Link to="/service-details">Hybrid Repairs</Link></li>
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
                      <li><a href="#"><i className="fa fa-file-pdf-o"></i> Download Brochure <span className="fa fa-download"></span></a></li>
                      <li><a href="#"><i className="fa fa-file-word-o"></i> Download Brochure <span className="fa fa-download"></span></a></li>
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