import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const BrandSection = () => (
  <div className="section section-padding">
    <div className="container">
      {/* Brand Wrapper Start */}
      <div className="brand-wrapper brand-active">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 }
          }}
        >
          <SwiperSlide key={0}>
            <div className="single-brand">
              <img src="/assets/images/brand/brand-01.webp" alt="Brand" />
            </div>
          </SwiperSlide>
          <SwiperSlide key={1}>
            <div className="single-brand">
              <img src="/assets/images/brand/brand-02.webp" alt="Brand" />
            </div>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <div className="single-brand">
              <img src="/assets/images/brand/brand-03.webp" alt="Brand" />
            </div>
          </SwiperSlide>
          <SwiperSlide key={3}>
            <div className="single-brand">
              <img src="/assets/images/brand/brand-04.webp" alt="Brand" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Brand Wrapper End */}
    </div>
  </div>
);

export default BrandSection;
