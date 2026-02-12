import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const BrandSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const startAutoplay = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        console.log('Starting autoplay from useEffect');
        swiperRef.current.swiper.autoplay.start();
      }
    };

    // Start autoplay after a short delay to ensure swiper is fully initialized
    const timeoutId = setTimeout(startAutoplay, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSwiper = (swiper) => {
    console.log('Swiper initialized:', swiper);
    console.log('Autoplay enabled:', swiper.autoplay.enabled);
    swiperRef.current = { swiper };
  };

  return (
    <div className="section section-padding" style={{ backgroundColor: '#bcfdad' }}>
      <div className="container ">
        {/* Brand Wrapper Start */}
        <div className="brand-wrapper brand-active">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 1000
            }}
            loop={false}
            onSwiper={handleSwiper}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 }
            }}
          >
            <SwiperSlide>
              <div className="single-brand">
                <img src="/assets/images/brand/brand-01.webp" alt="Brand" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-brand">
                <img src="/assets/images/brand/brand-02.webp" alt="Brand" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-brand">
                <img src="/assets/images/brand/brand-03.webp" alt="Brand" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-brand">
                <img src="/assets/images/brand/brand-04.webp" alt="Brand" />
              </div>
            </SwiperSlide>
            {/* Duplicate slides for better loop effect */}
            <SwiperSlide>
              <div className="single-brand">
                <img src="/assets/images/brand/brand-01.webp" alt="Brand" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-brand">
                <img src="/assets/images/brand/brand-02.webp" alt="Brand" />
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
      {/* Brand Wrapper End */}
    </div>
    </div>
  );
};

export default BrandSection;
