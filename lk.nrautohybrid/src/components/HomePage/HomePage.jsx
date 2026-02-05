import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Header and Footer components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// Import section components
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CallToAction from './components/CallToAction';
import WhyChooseSection from './components/WhyChooseSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import BrandSection from './components/BrandSection';

const HomePage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    // Cleanup
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <CallToAction />
      <WhyChooseSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <BlogSection />
      <BrandSection />
      <Footer />
    </>
  );
};

export default HomePage;