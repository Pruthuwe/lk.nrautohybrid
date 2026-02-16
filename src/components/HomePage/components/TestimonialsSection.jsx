import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Testimonial from './Testimonial';

const TestimonialsSection = () => (
  <div className="section section-padding-02">
    <div className="container">
      {/* Testimonials Wrapper Start */}
      <div className="testimonials-wrapper">
        {/* Testimonials Title Start */}
        <div className="testimonials-title">
          {/* Section Title Start */}
          <div className="section-title">
            <h5 className="sub-title">Testimonials</h5>
            <h2 className="main-title">What our Happy Clients says</h2>
            <p style={{ color: 'white' }}>Trusted and reliable service is our main goal extremely painful. Nor again is there anyone who loves our to take a trivial example, which of us undertakes chooses</p>
          </div>
          {/* Section Title End */}
        </div>
        {/* Testimonials Title End */}

        {/* Testimonials Items Start */}
        <div className="testimonials-items testimonial-active" style={{position: 'relative'}}>
          <img className="shape" src="/assets/images/testimonials.png" alt="Testimonials" />
          <img className="quote" src="/assets/images/quote.svg" alt="quote" />

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            <SwiperSlide key={0}>
              <Testimonial 
                author="/assets/images/author/author-01.webp"
                name="Crystopher Lopez"
                text="Great service makes me happy, my car is like the most the new one is our main goal extremely painful again is there anyone who loves our to take"
              />
            </SwiperSlide>
            <SwiperSlide key={1}>
              <Testimonial 
                author="/assets/images/author/author-17.webp"
                name="Crystopher Lopez"
                text="Great service makes me happy, my car is like the most the new one is our main goal extremely painful again is there anyone who loves our to take"
              />
            </SwiperSlide>
            <SwiperSlide key={2}>
              <Testimonial 
                author="/assets/images/author/author-18.webp"
                name="Crystopher Lopez"
                text="Great service makes me happy, my car is like the most the new one is our main goal extremely painful again is there anyone who loves our to take"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Testimonials Items End */}
        <style>{`
          .testimonials-items .swiper-pagination {
            position: absolute;
            bottom: 0;
            left: 0;
            width: auto;
            right: auto;
            text-align: left;
          }
        `}</style>
      </div>
      {/* Testimonials Wrapper End */}
    </div>
  </div>
);

export default TestimonialsSection;
