import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import BrandSection from '../HomePage/components/BrandSection';

const ProjectDetails = () => {
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
                <h2 className="main-title">Full Car Diagnostic</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/project-gallery">Gallery</Link></li>
                <li className="breadcrumb-item active">Projects Details</li>
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

      {/* Project Gallery Section Start */}
      <div className="section section-padding-02">
        <div className="container">

          {/* Project Details Wrapper Start */}
          <div className="project-details-wrapper">

            <div className="details-image">
              <img src="/assets/images/gallery/project-details.webp" alt="Project Details" />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="details-image">
                  <img src="/assets/images/gallery/details-dec-1.webp" alt="Project Details" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="details-image">
                  <img src="/assets/images/gallery/details-dec-2.webp" alt="Project Details" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                {/* Project Details Content Start */}
                <div className="project-details-content">
                  <h2 className="title">Full Car Diagnostic</h2>
                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences thextremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because is pain occasionally circumstances</p>

                  <h3>What we cover in this Service</h3>

                  <p>Car servicing rationally encounter consequences extremely <br /> painful. Nor again is the there anyone who loves or pursues <br /> take a trivial example, which of us undertakes chooses</p>

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
                {/* Project Details Content End */}
              </div>
              <div className="col-lg-6">
                {/* Project Details Content Start */}
                <div className="project-information">
                  <h3 className="title">Project Information</h3>
                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses</p>

                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Project Name</th>
                        <td>Full Car Diagnostic</td>
                      </tr>
                      <tr>
                        <th>Client</th>
                        <td>David Layed</td>
                      </tr>
                      <tr>
                        <th>Duration</th>
                        <td>3 days</td>
                      </tr>
                      <tr>
                        <th>Budget</th>
                        <td>$350</td>
                      </tr>
                      <tr>
                        <th>Category</th>
                        <td>Auto Servicing, Car Wash</td>
                      </tr>
                      <tr>
                        <th>Client Rating</th>
                        <td>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Share</th>
                        <td>
                          <ul className="social">
                            <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Project Details Content End */}
              </div>
            </div>

          </div>
          {/* Project Details Wrapper End */}

        </div>
      </div>
      {/* Project Gallery Section End */}

      {/* Related Project Section Start */}
      <div className="section section-padding-02 related-projects-section">
        <div className="container">

          {/* Section Title Start */}
          <div className="section-title">
            <h2 className="main-title">Related Projects</h2>
          </div>
          {/* Section Title End */}

          {/* Related Projects Wrapper Start */}
          <div className="related-projects-wrapper">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                {/* Single Gallery Start */}
                <div className="single-gallery">
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
                <div className="single-gallery">
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
                <div className="single-gallery">
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
            </div>
          </div>
          {/* Related Projects Wrapper End */}

        </div>
      </div>
      {/* Related Project Section End */}

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

export default ProjectDetails;