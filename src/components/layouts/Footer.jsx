import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Appointment from "../appointment/Appointment";
import "./Footer.css";

const MODAL_CLOSE_ANIMATION_MS = 320;

const Footer = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentModalClosing, setAppointmentModalClosing] = useState(false);

  const closeAppointmentModal = () => {
    setShowAppointmentModal(false);
    setAppointmentModalClosing(true);
  };

  useEffect(() => {
    if (!appointmentModalClosing) return;
    const id = setTimeout(() => setAppointmentModalClosing(false), MODAL_CLOSE_ANIMATION_MS);
    return () => clearTimeout(id);
  }, [appointmentModalClosing]);

  return (
    <>
    <div
      className="section footer-section"
      style={{ backgroundImage: "url(/assets/images/footer-bg-1.png)" }}
    >
      {/* Footer Widget Section */}
      <div className="footer-widget-section section-padding">
        <div className="container">
          <div className="footer-widget-wrapper">
            <div className="row">

              {/* Footer About */}
              <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
                <div className="footer-widget" data-aos="fade-up" data-aos-delay="100">
                  <Link className="footer-logo" to="/">
                    <img src="/assets/images/logo-1.png" alt="Logo" />
                  </Link>

                  <p>
                    Green Auto is your one-stop shop for expert vehicle repair services.
                    We specialize in turbo, ABS, and dual-clutch repairs.
                  </p>

                  <div className="widget-info">
                    <h6 className="title">Contact info</h6>
                    <p>
                      <a href="#" style={{color: 'white'}}>
                        <i className="fas fa-map-marker-alt" style={{marginRight: '8px'}}></i> Kurunegala, Sri Lanka
                      </a>
                    </p>
                    <p>
                      <span>Phone</span>: <a href="tel:+94772166306" style={{color: 'white'}}>+94 77 216 6306</a>
                    </p>
                    <p><span>Email</span>: info@greenauto.lk</p>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="col-lg-6 order-md-3 order-lg-2">
                <div className="footer-link-wrapper">

                  <div className="footer-widget" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="footer-widget-title">Quick Links</h3>
                    <ul className="widget-link">
                      <li><Link to="/about">About us</Link></li>
                      <li><Link to="/service">Our Services</Link></li>
                      <li><Link to="/team">Our Mechanics</Link></li>
                      <li><Link to="/our-jobs">Blog Post</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>

                  <div className="footer-widget" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="footer-widget-title">Information</h3>
                    <ul className="widget-link">
                      <li>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setShowAppointmentModal(true);
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          Book Appointment
                        </a>
                      </li>
                      <li><Link to="#">Terms & Conditions</Link></li>
                      <li><Link to="#">Return Policy</Link></li>
                      <li><Link to="/contact">Emergency Call</Link></li>
                      <li><Link to="/service">Tracking Service</Link></li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Newsletter */}
              <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
                <div className="footer-widget" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="footer-widget-title">Newsletter</h3>

                  <div className="widget-subscribe">
                    <p>
                      Subscribe our Newsletter to get latest update, offers and promotions
                    </p>

                    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                      <input type="email" placeholder="Enter Email" />
                      <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>

                  <div className="widget-opening">
                    <h6 className="title">24 Hour Service</h6>
                    {/* <p>
                      Monday to Friday <i className="fas fa-long-arrow-alt-right"></i> 9.30 am – 11.30 pm
                    </p>
                    <p>
                      Saturday to Sunday <i className="fas fa-long-arrow-alt-right"></i> 10.30 am – 8.00 pm
                    </p> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright-section">
        <div className="container">
          <div className="copyright-wrapper">

            <div className="copyright-text">
              <p>
                © {new Date().getFullYear()} <span>Green Auto</span> Made with{" "}
                <i className="fas fa-heart"></i> by{" "}
                <a href="https://deviitor.com/" rel="noreferrer">Deviitor.com</a>
              </p>
            </div>

            <div className="copyright-social">
              <a href="https://web.facebook.com/greenauto.lk" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/greenauto.lk?igsh=cDR4ZGducHk1Nmhi" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/94772166306" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a href="https://www.tiktok.com/@greensroqj7?lang=en-GB&is_from_webapp=1&sender_device=mobile&sender_web_id=7607352033860322836" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
            </div>

          </div>
        </div>
      </div>
    </div>

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
    </>
  );
};

export default Footer;
