import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// Import homepage components
import WhyChooseSection from '../HomePage/components/WhyChooseSection';
import CallToAction from '../HomePage/components/CallToAction';
import TestimonialsSection from '../HomePage/components/TestimonialsSection';
import BrandSection from '../HomePage/components/BrandSection';

const About = () => {
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
                <h2 className="main-title">Learn about Carserv.</h2>
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
                    <h5 className="sub-title">Welcome to <strong>Carserv</strong>.</h5>
                    <h2 className="main-title">Latest Equipments with Trusted Service</h2>
                  </div>
                  {/* Section Title End */}

                  <p>Car servicing rationally encounter consequences extremely painful again there anyone who loves or pursues take trivial undertakes chooses </p>

                  <Link to="/contact" className="btn btn-custom-01">Get Appointment</Link>

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

            <div className="row gx-0 justify-content-center">
              <div className="col-lg-8">
                {/* About Count Start */}
                <div className="about-count about-count-02">
                  {/* About Count Start */}
                  <div className="single-count" data-aos="fade-up" data-aos-delay="100">
                    <span className="count">5000+</span>
                    <p>Clients</p>
                  </div>
                  {/* About Count End */}
                  {/* About Count Start */}
                  <div className="single-count" data-aos="fade-up" data-aos-delay="200">
                    <span className="count">35+</span>
                    <p>Branch</p>
                  </div>
                  {/* About Count End */}
                  {/* About Count Start */}
                  <div className="single-count" data-aos="fade-up" data-aos-delay="300">
                    <span className="count">252+</span>
                    <p>Mechanics</p>
                  </div>
                  {/* About Count End */}
                  {/* About Count Start */}
                  <div className="single-count" data-aos="fade-up" data-aos-delay="400">
                    <span className="count">110+</span>
                    <p>Awards</p>
                  </div>
                  {/* About Count End */}
                </div>
                {/* About Count End */}
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
      <div className="section section-padding-02">
        <div className="container">

          {/* Section Title Start */}
          <div className="section-title text-center">
            <h5 className="sub-title">Our team</h5>
            <h2 className="main-title">Talented Mechanics</h2>
            <p>Trusted and reliable service is our main goal extremely <br /> painful. Nor again is there anyone who loves </p>
          </div>
          {/* Section Title End */}

          {/* Team Wrapper Start */}
          <div className="team-wrapper">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/* Single Team Start */}
                <div className="single-team" data-aos="fade-up" data-aos-delay="100">
                  <div className="team-images">
                    <Link to="/team-profile"><img src="/assets/images/team/team-1.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Daniel Williams</Link></h4>
                      <span className="designation">Engine Mechanic</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>8 years</strong></p>
                        <p className="meta">Rating: <span>5</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Single Team End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Single Team Start */}
                <div className="single-team" data-aos="fade-up" data-aos-delay="200">
                  <div className="team-images">
                    <Link to="/team-profile"><img src="/assets/images/team/team-2.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Stuart Macgil</Link></h4>
                      <span className="designation">Interior Mechanic</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>8 years</strong></p>
                        <p className="meta">Rating: <span>4.9</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Single Team End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Single Team Start */}
                <div className="single-team" data-aos="fade-up" data-aos-delay="300">
                  <div className="team-images">
                    <Link to="/team-profile"><img src="/assets/images/team/team-3.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Ricardo Powel</Link></h4>
                      <span className="designation">Wheels Specialist</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>8 years</strong></p>
                        <p className="meta">Rating: <span>5</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Single Team End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Single Team Start */}
                <div className="single-team" data-aos="fade-up" data-aos-delay="400">
                  <div className="team-images">
                    <Link to="/team-profile"><img src="/assets/images/team/team-4.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Albert Thomas</Link></h4>
                      <span className="designation">Lead Painter</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>8 years</strong></p>
                        <p className="meta">Rating: <span>4.7</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Single Team End */}
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

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default About;