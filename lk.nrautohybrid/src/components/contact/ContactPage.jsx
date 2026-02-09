import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const ContactPage = () => {
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
                <h5 className="sub-title">Connect</h5>
                <h2 className="main-title">Connect <br /> with us</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Connect</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-3.png" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Contact Section Start */}
      <div className="section section-padding-02">
        <div className="container">

          {/* Contact Wrapper Start */}
          <div className="contact-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* Contact Image Start */}
                <div className="contact-image" data-aos="fade-right" data-aos-delay="300">
                  <img src="/assets/images/contact.webp" alt="Contact" />
                </div>
                {/* Contact Image End */}
              </div>
              <div className="col-lg-6">
                {/* Contact Content Start */}
                <div className="contact-content" data-aos="fade-left" data-aos-delay="300">
                  <h2 className="title">Contact information</h2>
                  <p className="sub-title">You can connect with us</p>

                  <div className="content-info">
                    <div className="row gx-md-5">
                      <div className="col-md-6">
                        {/* Single Info Start */}
                        <div className="single-info">
                          <h4 className="info-title">Find us here</h4>
                          <p>328D, Marid Drive, West City Bulex Tower, Ackland</p>
                        </div>
                        {/* Single Info End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Info Start */}
                        <div className="single-info">
                          <h4 className="info-title">Call us</h4>
                          <p><Link to="tel:+99123456789">+99 123 456 789</Link></p>
                          <p><Link to="tel:+99123456789">+99 123 456 789</Link></p>
                        </div>
                        {/* Single Info End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Info Start */}
                        <div className="single-info">
                          <h4 className="info-title">Web Info</h4>
                          <p><Link to="mailto:info@carserv.com">info@carserv.com</Link></p>
                          <p><Link to="mailto:www.carserv.com">www.carserv.com</Link></p>
                        </div>
                        {/* Single Info End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Info Start */}
                        <div className="single-info">
                          <h4 className="info-title">Also Follow us</h4>
                          <ul className="social">
                            <li><Link to="#"><i className="fa fa-whatsapp"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                          </ul>
                        </div>
                        {/* Single Info End */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contact Content End */}
              </div>
            </div>
          </div>
          {/* Contact Wrapper End */}

        </div>
      </div>
      {/* Contact Section End */}

      {/* Contact Form Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Contact Form Wrapper Start */}
          <div className="contact-form-wrapper text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="title">Get in Touch</h3>

            <div className="form-wrapper">
              <form id="contact-form" action="/assets/php/contact.php" method="POST">
                <div className="row">
                  <div className="col-md-4">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <input type="text" placeholder="Name" name="name" />
                    </div>
                    {/* Single Form End */}
                  </div>
                  <div className="col-md-4">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <input type="email" placeholder="Email" name="email" />
                    </div>
                    {/* Single Form End */}
                  </div>
                  <div className="col-md-4">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <input type="text" placeholder="Number" name="phone" />
                    </div>
                    {/* Single Form End */}
                  </div>
                  <div className="col-md-12">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <textarea placeholder="Write message here" name="message"></textarea>
                    </div>
                    {/* Single Form End */}
                  </div>
                  <p className="form-message"></p>
                  <div className="col-md-12">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <button className="btn btn-custom-01">Sand message</button>
                    </div>
                    {/* Single Form End */}
                  </div>
                </div>
              </form>
            </div>

          </div>
          {/* Contact Form Wrapper End */}

        </div>
      </div>
      {/* Contact Form Section End */}

      <Footer />

      {/* Back To Start */}
      <Link to="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </Link>
      {/* Back To End */}
    </>
  );
};

export default ContactPage;