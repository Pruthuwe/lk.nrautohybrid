import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import WhatsAppFloat from '../../WhatsAppFloat/WhatsAppFloat';
import CallToAction from '../../HomePage/components/CallToAction';
import BrandSection from '../../HomePage/components/BrandSection';
import './ProjectGallery.css';

const ProjectGallery = () => {
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

              {/* Title as in HeroSlider (slider section) */}
              <div className="page-banner-titles slider-style">
                <h5 className="sub-title">Projects</h5>
                <h1 className="main-title">Our Projects Gallery</h1>
              </div>

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Gallery</li>
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

      {/* Project Gallery Section Start */}
      <div className="section section-padding-02">
        <div className="container">

          {/* Project Gallery Wrapper Start */}
          <div className="project-gallery-wrapper">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="200">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/tb-repair.jpg" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Turbocharger Repairs</Link></h4>
                    <span>Expert turbo repair & servicing solutions</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="400">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/abs-repair.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">ABS Repairs</Link></h4>
                    <span>ABS system diagnostics & repair services</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="600">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/dc-repair.jpg" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Dual-Clutch Repairs</Link></h4>
                    <span>Dual-clutch transmission repair & maintenance</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="200">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/tb-replace.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Turbocharger Replacement</Link></h4>
                    <span>Complete turbocharger replacement services</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="400">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/tb-upgrade.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Turbocharger Upgrades</Link></h4>
                    <span>High-performance turbo upgrade solutions</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="600">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/gallery-6.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Emergency Repairs</Link></h4>
                    <span>24/7 emergency vehicle repair services</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="200">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/t-consult.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Technical Consultation</Link></h4>
                    <span>Professional automotive technical advice</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="400">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/spare.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Spare Parts</Link></h4>
                    <span>Genuine & high-quality automotive spare parts</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="600">
                  <div className="gallery-images">
                    <Link to="/service"><img src="/assets/images/gallery/gallery-9.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/service">Hybrid Repairs</Link></h4>
                    <span>Hybrid system diagnostics & repair solutions</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
            </div>
          </div>
          {/* Project Gallery Wrapper End */}

        </div>
      </div>
      {/* Project Gallery Section End */}

      {/* Call to Action Section Start */}
      <CallToAction />
      {/* Call to Action Section End */}

      {/* Brand Section Start */}
      <BrandSection />
      {/* Brand Section End */}

      <Footer />

      <WhatsAppFloat />

    </div>
  );
};

export default ProjectGallery;