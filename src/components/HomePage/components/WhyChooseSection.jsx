import React from 'react';
import ChooseItem from './ChooseItem';

const WhyChooseSection = () => (
  <div className="section section-padding-02 why-choose-section">
    <div className="container">
      {/* Why Choose Wrapper Start */}
      <div className="choose-wrapper">
        <div className="row align-items-center gx-xl-0">
          <div className="col-lg-5">
            {/* Why Choose Content Start */}
            <div className="choose-content" data-aos="fade-right" data-aos-delay="300">
              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Why Choose Us</h5>
                <h2 className="main-title">Trust and Service is our Priority</h2>
              </div>
              {/* Section Title End */}

              <p style={{color: '#000000'}}>Trusted and reliable service is our main goal extremely painful. Nor again is there anyone who loves our to take a trivial example, which of us undertakes chooses</p>

              <img src="assets/images/choose/choose.webp" alt="Choose" />
            </div>
            {/* Why Choose Content End */}
          </div>
          <div className="col-lg-7">
            {/* Why Choose Items Wrapper Start */}
            <div className="choose-items-wrapper color-black">
              <div className="row gx-xl-5 align-items-center">
                <ChooseItem
                  delay="200"
                  icon="/assets/images/choose/icon-1.svg"
                  title="Latest Equipments"
                  description="Car servicing rationally encounter extremely anyone chooses"
                />
                <ChooseItem
                  delay="400"
                  icon="/assets/images/choose/icon-3.svg"
                  title="Expert Mecanics"
                  description="Car servicing rationally encounter extremely anyone chooses"
                />
                <ChooseItem
                  delay="200"
                  icon="/assets/images/choose/icon-2.svg"
                  title="Qulaity Services"
                  description="Car servicing rationally encounter extremely anyone chooses"
                />
                <ChooseItem
                  delay="400"
                  icon="/assets/images/choose/icon-4.svg"
                  title="Fast Delivery"
                  description="Car servicing rationally encounter extremely anyone chooses"
                />
              </div>
            </div>
            {/* Why Choose Items Wrapper End */}
          </div>
        </div>
      </div>
      {/* Why Choose Wrapper End */}
    </div>
  </div>
);

export default WhyChooseSection;
