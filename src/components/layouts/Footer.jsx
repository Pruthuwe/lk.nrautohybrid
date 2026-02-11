import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="section footer-section"
      style={{ backgroundImage: "url(/assets/images/footer-bg.jpg)" }}
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
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </Link>

                  <p>
                    Green Auto is your one-stop shop for expert vehicle repair services.
                    We specialize in turbo, ABS, and dual-clutch repairs.
                  </p>

                  <div className="widget-info">
                    <h6 className="title">Contact info</h6>
                    <p>
                      328D, Parley Street, Ackland <br />
                      Bronex Tower, Australia
                    </p>
                    <p><span>Phone</span>: +94 77 216 6306</p>
                    <p><span>Email</span>: info@carserv.com</p>
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
                      <li><Link to="/our-team">Our Mechanics</Link></li>
                      <li><Link to="/blog">Blog Post</Link></li>
                      <li><Link to="/login">Login / Register</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>

                  <div className="footer-widget" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="footer-widget-title">Information</h3>
                    <ul className="widget-link">
                      <li><Link to="/contact">Book Appointment</Link></li>
                      <li><Link to="/terms">Terms & Conditions</Link></li>
                      <li><Link to="/return-policy">Return Policy</Link></li>
                      <li><Link to="/payment">Payment</Link></li>
                      <li><Link to="/emergency">Emergency Call</Link></li>
                      <li><Link to="/tracking">Tracking Service</Link></li>
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
                      <button type="submit">
                        <i className="fa fa-paper-plane-o"></i>
                      </button>
                    </form>
                  </div>

                  <div className="widget-opening">
                    <h6 className="title">24 Hour Service</h6>
                    {/* <p>
                      Monday to Friday <i className="fa fa-long-arrow-right"></i> 9.30 am – 11.30 pm
                    </p>
                    <p>
                      Saturday to Sunday <i className="fa fa-long-arrow-right"></i> 10.30 am – 8.00 pm
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
                © {new Date().getFullYear()} <span>Carserv</span> Made with{" "}
                <i className="icofont-heart-alt"></i> by{" "}
                <a href="#" rel="noreferrer">Codecarnival</a>
              </p>
            </div>

            <div className="copyright-social">
              <a href="https://web.facebook.com/greenauto.lk"><i className="fa fa-facebook-f"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-pinterest-p"></i></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
