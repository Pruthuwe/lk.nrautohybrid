import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import CallToAction from '../HomePage/components/CallToAction';
import BrandSection from '../HomePage/components/BrandSection';

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

              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Projects</h5>
                <h2 className="main-title">Our Projects Gallery</h2>
              </div>
              {/* Section Title End */}

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
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-1.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="400">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-2.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="600">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-3.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="200">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-4.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="400">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-5.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="600">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-6.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="200">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-7.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="400">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-8.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
                  </div>
                </div>
                {/* Single Gallery End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery" data-aos="fade-up" data-aos-delay="600">
                  <div className="gallery-images">
                    <Link to="/project-details"><img src="/assets/images/gallery/gallery-9.webp" alt="Gallery" /></Link>
                  </div>
                  <div className="gallery-content">
                    <h4 className="title"><Link to="/project-details">AC Repair Servicing</Link></h4>
                    <span>Car AC repari & Servicing</span>
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

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default ProjectGallery;