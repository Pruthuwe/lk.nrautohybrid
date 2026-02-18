import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const whatsappMessage = `*New Contact Form Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    
    const whatsappUrl = `https://wa.me/94713210583?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    // Do not reload: keeps SPA state and avoids content-not-loading issues
  };

  return (
    <>
      <style>
        {`
          .contact-form-wrapper input::placeholder,
          .contact-form-wrapper textarea::placeholder {
            color: white !important;
          }
        `}
      </style>
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
                <h2 className="main-title">Connect with<br />  us</h2>
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
              <img src="/assets/images/slider/slider-1.webp" alt="Page Banner" />
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
                  <div className="row">
                    <div className="col-md-6">
                      <a href="https://maps.app.goo.gl/3QXn9kBZr4etijd9A" target="_blank" rel="noopener noreferrer">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123!2d80.3644!3d7.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjknMTUuMCJOIDgwwrAyMSc1MS44IkU!5e0!3m2!1sen!2slk!4v1234567890"
                          width="100%"
                          height="400"
                          style={{borderRadius: '8px', pointerEvents: 'none'}}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Kurunegala Location"
                        ></iframe>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="https://maps.app.goo.gl/yPd5ipeRwaCycGfw7" target="_blank" rel="noopener noreferrer">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123!2d79.9274!3d6.8735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMjQuNiJOIDc5wrA1NSczOC42IkU!5e0!3m2!1sen!2slk!4v1234567890"
                          width="100%"
                          height="400"
                          style={{borderRadius: '8px', pointerEvents: 'none'}}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Thalawathugoda Location"
                        ></iframe>
                      </a>
                    </div>
                  </div>
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
                          <p>
                            <a href="https://maps.app.goo.gl/3QXn9kBZr4etijd9A" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                              <i className="fa fa-map-marker" style={{marginRight: '5px'}}></i> Kurunegala, Sri Lanka
                            </a>
                          </p>
                          <p>
                            <a href="https://maps.app.goo.gl/yPd5ipeRwaCycGfw7" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                              <i className="fa fa-map-marker" style={{marginRight: '5px'}}></i> Thalawathugoda, Sri Lanka
                            </a>
                          </p>
                        </div>
                        {/* Single Info End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Info Start */}
                        <div className="single-info">
                          <h4 className="info-title">Call us</h4>
                          <p><Link to="tel:+99123456789">+94 77 2166 306</Link></p>
                          {/* <p><Link to="tel:+99123456789">+99 123 456 789</Link></p> */}
                        </div>
                        {/* Single Info End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Info Start */}
                        <div className="single-info">
                          <h4 className="info-title">Web Info</h4>
                          <p><Link to="mailto:info@carserv.com">info@greenauto.com</Link></p>
                          <p><Link to="mailto:www.carserv.com">www.greenauto.lk</Link></p>
                        </div>
                        {/* Single Info End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Info Start */}
                        <div className="single-info">
                          <h4 className="info-title">Also Follow us</h4>
                          <ul className="social">
                            <li><a href="https://web.facebook.com/greenauto.lk"><i className="icofont-facebook"></i></a></li>
                            <li><a href="#"><i className="icofont-instagram"></i></a></li>
                            <li><a href="https://wa.me/94772166306"><i className="icofont-whatsapp"></i></a></li>
                            <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
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
      <div className="section section-padding" style={{backgroundColor: '#bcfdad'}}>
        <div className="container" style={{background: 'linear-gradient(180deg, #2d5016, #bcfdad)', boxShadow: '0 0 20px rgba(0, 0, 0, 0)', borderRadius: '8px', padding: '40px'}}>

          {/* Contact Form Wrapper Start */}
          <div className="contact-form-wrapper text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="title">Get in Touch</h3>

            <div className="form-wrapper">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <input type="text" placeholder="Name" name="name" style={{border: '1px solid #007bff'}} />
                    </div>
                    {/* Single Form End */}
                  </div>
                  <div className="col-md-4">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <input type="email" placeholder="Email" name="email" style={{border: '1px solid #007bff'}} />
                    </div>
                    {/* Single Form End */}
                  </div>
                  <div className="col-md-4">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <input type="text" placeholder="Number" name="phone" style={{border: '1px solid #007bff'}} />
                    </div>
                    {/* Single Form End */}
                  </div>
                  <div className="col-md-12">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <textarea placeholder="Write message here" name="message" style={{border: '1px solid #007bff'}}></textarea>
                    </div>
                    {/* Single Form End */}
                  </div>
                  <p className="form-message"></p>
                  <div className="col-md-12">
                    {/* Single Form Start */}
                    <div className="single-form">
                      <button className="btn btn-custom-01">Send message</button>
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

      <WhatsAppFloat />
      {/* Back To Start */}
      <Link to="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </Link>
      {/* Back To End */}
    </>
  );
};

export default ContactPage;