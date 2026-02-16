import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const BrandSection = () => {
  const swiperRef = useRef(null);

  // Vehicle brands we service
  const brands = [
    { name: 'Toyota', logo: '/assets/images/brand/toyota.png' },
    { name: 'Honda', logo: '/assets/images/brand/honda.png' },
    { name: 'Nissan', logo: '/assets/images/brand/nissan.png' },
    { name: 'Kia', logo: '/assets/images/brand/kia.png' },
    { name: 'Suzuki', logo: '/assets/images/brand/suzuki.png' },
    { name: 'Mitsubishi', logo: '/assets/images/brand/mitsubishi.png' },
    { name: 'Mazda', logo: '/assets/images/brand/mazda.png' },
    { name: 'Subaru', logo: '/assets/images/brand/subaru.png' }
  ];

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
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h5 className="sub-title" style={{ color: '#28a745' }}>Trusted Brands</h5>
          <h2 className="main-title">We Service All Major Brands</h2>
        </div>

        {/* Brand Wrapper Start */}
        <div className="brand-wrapper brand-active">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            loop={true}
            onSwiper={handleSwiper}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              576: { slidesPerView: 3, spaceBetween: 25 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              992: { slidesPerView: 5, spaceBetween: 30 }
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="single-brand" style={{ 
                  padding: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#bcfdad',
                  transition: 'transform 0.3s ease',
                  minHeight: '150px'
                }}>
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                    style={{ maxWidth: '180px', maxHeight: '100px', objectFit: 'contain' }}
                  />
                  <div style={{ 
                    display: 'none', 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {brand.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Brand Wrapper End */}

        <style>{`
          .single-brand:hover {
            transform: translateY(-5px);
          }
        `}</style>
      </div>
    </div>
  );
};

export default BrandSection;
