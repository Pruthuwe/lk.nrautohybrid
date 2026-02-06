import React from 'react';

const HeroSlider = () => (
  <div className="section slider-section">
    <div 
      className="single-slider" 
      style={{ backgroundImage: 'url(/assets/images/slider/slider-bg.jpg)' }}
    >
      <div className="container">
        {/* Slider Content Start */}
        <div className="slider-content">
          <h5 
            className="sub-title" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            a garage for all models
          </h5>
          <h1 
            className="main-title" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Need to Service or repair your car?
          </h1>
          <p data-aos="fade-up" data-aos-delay="600">
            Car servicing rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues
          </p>
          <a 
            href="/contact" 
            data-aos="fade-up" 
            data-aos-delay="800" 
            className="btn btn-custom-01"
          >
            Contact us
          </a>
        </div>
        {/* Slider Content End */}
      </div>

      {/* Slider Images Start */}
      <div className="slider-images">
        <div className="image" data-aos="fade-left" data-aos-delay="1000">
          <img src="/assets/images/slider/slider-2.webp" alt="Slider" />
        </div>
      </div>
      {/* Slider Images End */}

      {/* Slider Images Start */}
      <div className="slider-images-02">
        <div className="image" data-aos="fade-right" data-aos-delay="1300">
          <img src="/assets/images/slider/slider-1.webp" alt="Slider" />
        </div>
      </div>
      {/* Slider Images End */}
    </div>
  </div>
);

export default HeroSlider;
