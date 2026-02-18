import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components (../../ = from pages/ourTeam/ up to components/)
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import WhatsAppFloat from '../../WhatsAppFloat/WhatsAppFloat';
import BrandSection from '../../HomePage/components/BrandSection';
import './OurTeam.css';

const OurTeam = () => {
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
                <h5 className="sub-title">Our Team</h5>
                <h2 className="main-title">Expert Mechanics</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Mechanics</li>
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

      {/* Our Team Section Start */}
      <div className="section section-padding-02">
        <div className="container">

          {/* Team Wrapper Start */}
          <div className="team-wrapper-02">
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
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                        <p className="meta">Rating: <span>4.7</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                        <p className="meta">Rating: <span>4.9</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Single Team End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Single Team Start */}
                <div className="single-team" data-aos="fade-up" data-aos-delay="100">
                  <div className="team-images">
                    <Link to="/team-profile"><img src="/assets/images/team/team-5.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">David Layed</Link></h4>
                      <span className="designation">Brake Expert</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>8 years</strong></p>
                        <p className="meta">Rating: <span>4.8</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                    <Link to="/team-profile"><img src="/assets/images/team/team-6.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Alvin Ward</Link></h4>
                      <span className="designation">Structure Mechanic</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>8 years</strong></p>
                        <p className="meta">Rating: <span>4.7</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                    <Link to="/team-profile"><img src="/assets/images/team/team-7.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Kingsley Hodges</Link></h4>
                      <span className="designation">Engine Mechanic</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>10 years</strong></p>
                        <p className="meta">Rating: <span>5</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                    <Link to="/team-profile"><img src="/assets/images/team/team-8.webp" alt="Team" /></Link>
                  </div>
                  <div className="team-content">
                    <div className="content-wrapper">
                      <h4 className="name"><Link to="/team-profile">Gerard Butler</Link></h4>
                      <span className="designation">Interior Mechanic</span>
                      <div className="team-meta">
                        <p className="meta">Exprience: <strong>9 years</strong></p>
                        <p className="meta">Rating: <span>5</span></p>
                      </div>
                      <ul className="social">
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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

      {/* Brand Section Start */}
      <BrandSection />
      {/* Brand Section End */}

      <Footer />

      <WhatsAppFloat />

    </div>
  );
};

export default OurTeam;