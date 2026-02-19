import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import components (../../ = from pages/about/ up to components/)
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import WhatsAppFloat from '../../WhatsAppFloat/WhatsAppFloat';
import Appointment from '../../appointment/Appointment';

// Import homepage components
import WhyChooseSection from '../../HomePage/components/WhyChooseSection';
import CallToAction from '../../HomePage/components/CallToAction';
import TestimonialsSection from '../../HomePage/components/TestimonialsSection';
import BrandSection from '../../HomePage/components/BrandSection';
import './About.css';

const TEAM_VIDEO_SRC = '/assets/images/team/CEO.mp4';

const MODAL_CLOSE_ANIMATION_MS = 320;

const About = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentModalClosing, setAppointmentModalClosing] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const closeAppointmentModal = () => {
    setShowAppointmentModal(false);
    setAppointmentModalClosing(true);
  };

  useEffect(() => {
    if (!appointmentModalClosing) return;
    const id = setTimeout(() => setAppointmentModalClosing(false), MODAL_CLOSE_ANIMATION_MS);
    return () => clearTimeout(id);
  }, [appointmentModalClosing]);

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
                <h5 className="sub-title">About Us</h5>
                <h2 className="main-title">Learn about Green Auto.</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">About</li>
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

      {/* About Section Start */}
      <div className="section section-padding-02">
        <div className="container">

          {/* About Wrapper Start */}
          <div className="about-wrapper">

            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-9">
                {/* About Content Start */}
                <div className="about-content content-02 text-center" data-aos="fade-up" data-aos-delay="200">

                  {/* Section Title Start */}
                  <div className="section-title">
                    <h5 className="sub-title">Welcome to <strong>Green Auto</strong>.</h5>
                    <h2 className="main-title">Latest Equipments with Trusted Service</h2>
                  </div>
                  {/* Section Title End */}

                  <p>Car servicing rationally encounter consequences extremely painful again there anyone who loves or pursues take trivial undertakes chooses </p>

                  <button onClick={() => setShowAppointmentModal(true)} className="btn btn-custom-01">Get Appointment</button>

                </div>
                {/* About Content End */}
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6">
                {/* About Images Start */}
                <div className="about-images-2" data-aos="fade-up" data-aos-delay="300">
                  <img src="/assets/images/about/about-4.webp" alt="About" />
                </div>
                {/* About Images End */}
              </div>
              <div className="col-lg-5 col-md-6">
                {/* About Images Start */}
                <div className="about-images-2" data-aos="fade-up" data-aos-delay="500">
                  <img src="/assets/images/about/about-2.webp" alt="About" />
                </div>
                {/* About Images End */}
              </div>
            </div>

          </div>
          {/* About Wrapper End */}

        </div>
      </div>
      {/* About Section End */}

      {/* Why Choose Section Start */}
      <WhyChooseSection />
      {/* Why Choose Section End */}

      {/* Call to Action Section Start */}
      <CallToAction />
      {/* Call to Action Section End */}

      {/* Our Team Section Start */}
      <div className="section section-padding-02 about-team-section">
        <div className="container">

          {/* Section Title Start */}
          <div className="section-title text-center">
            <h5 className="sub-title">Meet Our Leader</h5>
            <h2 className="main-title">Experienced Leadership at Green Auto</h2>
            <p style={{color: '#000000'}}>With over 8 years of dedicated expertise in hybrid vehicle technology, <br /> our team leader ensures every service meets the highest standards of excellence</p>
          </div>
          {/* Section Title End */}

          {/* Team Wrapper Start */}
          <div className="team-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                {/* Single Team Start */}
                <div className="single-team" data-aos="fade-up" data-aos-delay="100">
                  <div
                    className="team-images about-team-video-wrap"
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => setShowVideoModal(true)}
                  >
                    <video
                      className="about-team-video-thumb"
                      src={TEAM_VIDEO_SRC}
                      muted
                      playsInline
                      preload="metadata"
                      title="Team video"
                    />
                    <div className="about-team-play-button" style={{
                      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                      width: '70px', height: '70px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                      transition: 'all 0.3s ease', border: '3px solid #28a745',
                    }}>
                      <i className="fas fa-play" style={{ color: '#28a745', fontSize: '24px', marginLeft: '5px' }}></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Daniel Williams</Link></h4>
                      <span className="designation">Chief Mechanic & Team Leader</span>
                      <div className="team-meta">
                        <p className="meta">Experience: <strong>8+ years</strong></p>
                      </div>
                      <ul className="social">
                        <li><a href="https://web.facebook.com/greenauto.lk"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/greenauto.lk?igsh=cDR4ZGducHk1Nmhi" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://wa.me/94772166306"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://www.tiktok.com/@greensroqj7?lang=en-GB&is_from_webapp=1&sender_device=mobile&sender_web_id=7607352033860322836" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Single Team End */}
              </div>
              <div className="col-lg-7 col-md-6">
                {/* Team Description Start */}
                <div className="team-description" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="mb-4">Leading with Passion and Expertise</h3>
                  <p className="mb-3" style={{textAlign: 'justify', color: '#000000'}}>
                    Daniel Williams, our Chief Mechanic and team leader, brings over 8 years of specialized experience in hybrid vehicle technology and engine diagnostics. His commitment to excellence has made Green Auto the trusted choice for hybrid car owners across the region.
                  </p>
                  <p className="mb-3" style={{textAlign: 'justify', color: '#000000'}}>
                    Under his leadership, our workshop has achieved consistently high customer satisfaction ratings and built a reputation for technical precision and reliability. Daniel personally oversees every major service, ensuring that each vehicle receives meticulous attention and expert care.
                  </p>
                  <p className="mb-0" style={{textAlign: 'justify', color: '#000000'}}>
                    His vision for Green Auto is simple yet powerful: to provide world-class hybrid vehicle service with integrity, transparency, and a customer-first approach. When you trust us with your vehicle, you're trusting a team led by someone who treats every car as if it were his own.
                  </p>
                </div>
                {/* Team Description End */}
              </div>
            </div>
          </div>
          {/* Team Wrapper End */}

        </div>
      </div>
      {/* Our Team Section End */}

      {/* Testimonials Section Start */}
      <TestimonialsSection />
      {/* Testimonials Section End */}

      {/* Brand Section Start */}
      <BrandSection />
      {/* Brand Section End */}

      <Footer />

      <WhatsAppFloat />

      {/* Video Modal - same as BlogSection */}
      {showVideoModal && (
        <>
          <div className="modal fade show d-block video-modal" tabIndex="-1" role="dialog" style={{ zIndex: 1050 }}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content" style={{ backgroundColor: '#000' }}>
                <div className="modal-header" style={{ borderBottom: 'none', padding: '10px' }}>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowVideoModal(false)}
                    aria-label="Close"
                    style={{ filter: 'invert(1)', opacity: 1 }}
                  />
                </div>
                <div className="modal-body p-0">
                  <div style={{ position: 'relative', width: '100%' }}>
                    <video
                      src={TEAM_VIDEO_SRC}
                      controls
                      autoPlay
                      playsInline
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      title="Team video"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={() => setShowVideoModal(false)} style={{ zIndex: 1040 }} />
        </>
      )}

      {/* Appointment Modal */}
      {(showAppointmentModal || appointmentModalClosing) && (
        <>
          <div className={`modal fade show d-block${appointmentModalClosing ? ' modal--closing' : ''}`} tabIndex="-1" role="dialog" style={{zIndex: 1050}}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body p-4">
                  <Appointment onClose={closeAppointmentModal} />
                </div>
              </div>
            </div>
          </div>
          <div className={`modal-backdrop fade show${appointmentModalClosing ? ' modal-backdrop--closing' : ''}`} onClick={closeAppointmentModal} style={{zIndex: 1040}}></div>
        </>
      )}

    </div>
  );
};

export default About;