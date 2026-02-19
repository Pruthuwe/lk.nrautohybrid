import React, { useState, useEffect } from 'react';
import GetaQuote from '../../quote/getaQuote';

const MODAL_CLOSE_ANIMATION_MS = 320;

const AboutSection = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteModalClosing, setQuoteModalClosing] = useState(false);

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
    setQuoteModalClosing(true);
  };

  useEffect(() => {
    if (!quoteModalClosing) return;
    const id = setTimeout(() => setQuoteModalClosing(false), MODAL_CLOSE_ANIMATION_MS);
    return () => clearTimeout(id);
  }, [quoteModalClosing]);

  return (
    <>
      <div className="section section-padding-02">
        <div className="container">
          {/* About Wrapper Start */}
          <div className="about-wrapper">
            <div className="row align-items-end">
              <div className="col-lg-6">
                {/* About Images Start */}
                <div className="about-images">
                  <div className="images" data-aos="fade-right" data-aos-delay="200">
                    <img src="/assets/images/about/about.webp" alt="About" />
                  </div>
                  <div className="exprience" data-aos="fade-up" data-aos-delay="400">
                    <p><strong>20</strong> years Exprience</p>
                  </div>
                </div>
                {/* About Images End */}
              </div>
              <div className="col-lg-6">
                {/* About Content Start */}
                <div className="about-content" data-aos="fade-left" data-aos-delay="200">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h5 className="sub-title">Welcome to <strong>Green Auto</strong>.</h5>
                    <h2 className="main-title">Latest Equipments with Trusted Service</h2>
                  </div>
                  {/* Section Title End */}

                  <p style={{color: '#000000', textAlign: 'justify'}}>Turbocharger and hybrid system repairs demand precision and expertise. Our technicians diagnose performance issues, boost pressure faults, and electrical system errors to ensure your vehicle operates at peak efficiency without risking further engine or battery damage.</p>

                  <p style={{color: '#000000', textAlign: 'justify'}}>We specialize in advanced turbo and hybrid repairs using industry-grade tools and genuine components, helping you restore fuel efficiency, power delivery, and long-term reliability with minimal downtime.</p>

                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(true)}
                    className="btn btn-custom-01"
                  >
                    Get a Quote
                  </button>
                </div>
                {/* About Content End */}
              </div>
            </div>
          </div>
          {/* About Wrapper End */}
        </div>
      </div>

      {/* Quote Modal */}
      {(showQuoteModal || quoteModalClosing) && (
        <>
          <div className={`modal fade show d-block${quoteModalClosing ? ' modal--closing' : ''}`} tabIndex="-1" role="dialog" style={{ zIndex: 1050 }}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body p-4">
                  <GetaQuote onClose={closeQuoteModal} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`modal-backdrop fade show${quoteModalClosing ? ' modal-backdrop--closing' : ''}`}
            onClick={closeQuoteModal}
            style={{ zIndex: 1040 }}
          />
        </>
      )}
    </>
  );
};

export default AboutSection;
