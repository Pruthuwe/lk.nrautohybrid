import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const FAQ = () => {
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
                <h5 className="sub-title">FAQ</h5>
                <h2 className="main-title">frequently asked questions</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">FAQ</li>
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

      {/* FAQ Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* FAQ Wrapper Start */}
          <div className="faq-wrapper">

            {/* Section Title Start */}
            <div className="section-title text-center">
              <h5 className="sub-title">Question And Answer</h5>
              <h2 className="main-title">Get easily answer your question</h2>
              <p>Trusted and reliable service is our main goal extremely <br /> painful. Nor again is there anyone who loves</p>
            </div>
            {/* Section Title End */}

            <div className="row justify-content-center">
              <div className="col-lg-9">
                {/* FAQ Accordion Start */}
                <div className="faq-accordion">

                  <div className="accordion" id="accordionFaq">
                    <div className="accordion-item">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        What phytochemicals inhibit mineral absorption?
                      </button>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>

                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        What phytochemicals are considered antioxidants?
                      </button>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>

                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        Are phytochemicals and phytosterols the same thing?
                      </button>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>

                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        Do blueberries have phytochemicals?
                      </button>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>

                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                        Are collards a good source of phytochemicals?
                      </button>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>

                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                {/* FAQ Accordion End */}

                {/* FAQ Button Start */}
                <div className="faq-btn">
                  <a href="#" className="btn btn-custom-01">Other's Question</a>
                </div>
                {/* FAQ Button End */}
              </div>
            </div>

          </div>
          {/* FAQ Wrapper End */}

        </div>
      </div>
      {/* FAQ Section End */}

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default FAQ;