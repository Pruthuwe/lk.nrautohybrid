<?php
      include 'include/header.inc.php'; 
     
?> 
<style>
    .single-brand img {
        width: 130px;
        height: 110px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
        filter: grayscale(100%);
        transition: filter 0.4s ease;
    }
    
    .single-brand:hover img {
        filter: grayscale(0%);
    }
    
    .brand-active .swiper-container {
        overflow: hidden;
    }
    
    .brand-active .swiper-wrapper {
        transition-timing-function: linear !important;
    }
    
    /* Enhanced Hero About Section */
    .hero-about-content {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        padding: 60px 40px;
        border-radius: 20px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        margin-bottom: 40px;
    }
    
    .hero-about-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
        opacity: 0.5;
    }
    
    .hero-about-content .section-title {
        position: relative;
        z-index: 2;
    }
    
    .hero-about-content .section-title h2 {
        color: #fff;
        font-size: 42px;
        font-weight: 800;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        margin-bottom: 20px;
        line-height: 1.3;
    }
    
    .hero-about-content .section-title h5 {
        color: #ffd700;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    
    .hero-about-content p {
        color: rgba(255,255,255,0.9);
        font-size: 17px;
        line-height: 1.8;
        position: relative;
        z-index: 2;
        margin-bottom: 20px;
    }
    
    .hero-about-content p strong {
        color: #ffd700;
        font-weight: 700;
    }
    
    /* Static border */
    .hero-about-content::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        border-radius: 20px;
        z-index: -1;
    }
    
    /* Service Icons with Animation */
    .services-highlight {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
        margin-top: 30px;
        position: relative;
        z-index: 2;
    }
    
    .service-badge {
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        padding: 10px 20px;
        border-radius: 30px;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid rgba(255,255,255,0.2);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .service-badge:hover {
        background: rgba(231, 76, 60, 0.8);
        border-color: #ffd700;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);
    }
    
    /* Vision Mission Modern Cards */
    .vision-mission-card {
        background: #fff;
        padding: 40px 35px;
        border-radius: 20px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        transition: all 0.4s ease;
        height: 100%;
        border: 2px solid transparent;
    }
    
    .vision-mission-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(180deg, #e74c3c 0%, #c0392b 100%);
        transition: width 0.4s ease;
    }
    
    .vision-mission-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(231, 76, 60, 0.2);
        border-color: #e74c3c;
    }
    
    .vision-mission-card:hover::before {
        width: 100%;
        opacity: 0.1;
    }
    
    .vision-mission-card .icon-wrapper {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        margin-bottom: 20px;
        box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
        transition: all 0.3s ease;
    }
    
    .vision-mission-card:hover .icon-wrapper {
        transform: rotate(360deg) scale(1.1);
    }
    
    .vision-mission-card h3 {
        color: #1a1a2e;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 15px;
        position: relative;
    }
    
    .vision-mission-card p {
        color: #555;
        font-size: 16px;
        line-height: 1.7;
        margin: 0;
    }
    
    /* Enhanced Tagline Section */
    .tagline-wrapper {
        position: relative;
        margin: 60px 0;
        perspective: 1000px;
    }
    
    .tagline-section {
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 50%, #8e2921 100%);
        padding: 60px 50px;
        border-radius: 25px;
        text-align: center;
        position: relative;
        overflow: hidden;
        box-shadow: 0 25px 70px rgba(231, 76, 60, 0.4);
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
    }
    
    .tagline-section:hover {
        transform: translateY(-5px);
    }
    
    .tagline-section::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: rotate 20s linear infinite;
    }
    
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .tagline-section .quote-icon {
        font-size: 50px;
        color: rgba(255,255,255,0.2);
        margin-bottom: 20px;
    }
    
    .tagline-section h2 {
        color: #fff;
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
    }
    
    .tagline-section .tagline-main {
        color: #ffd700;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 15px;
        position: relative;
        z-index: 2;
        line-height: 1.6;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    }
    
    .tagline-section .tagline-sub {
        color: rgba(255,255,255,0.95);
        font-size: 18px;
        font-weight: 500;
        position: relative;
        z-index: 2;
        font-style: italic;
    }
    
    /* Decorative elements */
    .tagline-section .deco-circle {
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
    }
    
    .tagline-section .deco-circle:nth-child(1) {
        width: 100px;
        height: 100px;
        top: -30px;
        right: -30px;
        animation: float 6s ease-in-out infinite;
    }
    
    .tagline-section .deco-circle:nth-child(2) {
        width: 150px;
        height: 150px;
        bottom: -50px;
        left: -50px;
        animation: float 8s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    /* Enhanced Stats Counter */
    .about-count-02 {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 40px 20px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    }
    
    .single-count {
        text-align: center;
        padding: 20px;
        position: relative;
        transition: all 0.3s ease;
    }
    
    .single-count::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #e74c3c, #ffd700);
        transition: width 0.3s ease;
    }
    
    .single-count:hover::before {
        width: 80%;
    }
    
    .single-count .count {
        font-size: 48px;
        font-weight: 800;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: block;
        margin-bottom: 10px;
    }
    
    .single-count p {
        color: #555;
        font-size: 16px;
        font-weight: 600;
        margin: 0;
    }
    
    /* Image hover effects */
    .about-images-2 {
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    }
    
    .about-images-2 img {
        transition: transform 0.5s ease;
    }
    
    .about-images-2:hover img {
        transform: scale(1.05);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .hero-about-content {
            padding: 40px 25px;
        }
        
        .hero-about-content .section-title h2 {
            font-size: 28px;
        }
        
        .tagline-section {
            padding: 40px 30px;
        }
        
        .tagline-section .tagline-main {
            font-size: 20px;
        }
        
        .vision-mission-card {
            margin-bottom: 20px;
        }
    }
</style>

        <!-- Page Banner Section Start -->
        <div class="section page-banner-section" style="background-image: url(assets/images/page-banner-bg.webp);">
            <div class="container">
                <!-- Page Banner Wrapper Start -->
                <div class="page-banner-wrapper">

                    <!-- Page Banner Content Start -->
                    <div class="page-banner-content">

                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h5 class="sub-title">About Us</h5>
                            <h2 class="main-title">Learn about NR Auto Hybrid</h2>
                        </div>
                        <!-- Section Title End -->

                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">About</li>
                        </ul>
                    </div>
                    <!-- Page Banner Content End -->

                    <!-- Page Banner Images Start -->
                    <div class="page-banner-images">
                        <img src="assets/images/page-banner.png" alt="Page Banner" width="800" height="600">
                    </div>
                    <!-- Page Banner Images End -->

                </div>
                <!-- Page Banner Wrapper End -->
            </div>
        </div>
        <!-- Page Banner Section End -->

        <!-- About Section Start -->
        <div class="section section-padding-02">
            <div class="container">

                <!-- About Wrapper Start -->
                <div class="about-wrapper">

                    <div class="row justify-content-center">
                        <div class="col-xl-11 col-lg-12">
                            <!-- Hero About Content Start -->
                            <div class="hero-about-content" data-aos="fade-up" data-aos-delay="100">

                                <!-- Section Title Start -->
                                <div class="section-title">
                                    <h5 class="sub-title">🏢 අප ගැන (About Us)</h5>
                                    <h2 class="main-title">NR Auto Hybrid - වාහනයේ ජීවිතය දිගුකරන, සම්පූර්ණ විසඳුම</h2>
                                </div>
                                <!-- Section Title End -->

                                <p>NR Auto Hybrid යනු නවීන තාක්ෂණය සහ අත්දැකීම් ඒකාබද්ධ කරමින්, <strong>Hybrid, Electric සහ Fuel (Petrol/Diesel)</strong> වාහනවල සියලුම මට්ටමේ නඩත්තු හා නවීන අලුත්වැඩියා සේවාවන් ලබාදෙන, විශ්වාසදායක වාහන සේවා මධ්‍යස්ථානයකි.</p>

                                <p>අපගේ වෘත්තිමත් කාර්මික කණ්ඩායම විසින් නවීන උපකරණ සහ ගුණාත්මක කොටස් භාවිතයෙන් ඉතා කාර්යක්ෂමව සේවාවන් ඉටු කරනු ලබයි.</p>

                                <p><strong>අපගේ අරමුණ වන්නේ ඔබගේ වාහනයේ ජීවිතය දිගු කරමින්, ආරක්ෂාකාරී හා විශ්වාසදායක සේවාවක් ලබාදීමයි.</strong></p>

                                <!-- Services Highlight -->
                                <div class="services-highlight">
                                    <div class="service-badge">🔧 ABS Systems</div>
                                    <div class="service-badge">🔋 Hybrid Battery</div>
                                    <div class="service-badge">⚙️ Engine Tune-up</div>
                                    <div class="service-badge">🎯 Steering Rack</div>
                                    <div class="service-badge">🪟 Power Window</div>
                                    <div class="service-badge">⚡ Alternator</div>
                                    <div class="service-badge">🔌 Starter Motor</div>
                                    <div class="service-badge">🔐 Central Lock</div>
                                </div>

                            </div>
                            <!-- Hero About Content End -->
                        </div>
                    </div>

                    <div class="row justify-content-between">
                        <div class="col-lg-6 col-md-6">
                            <!-- About Images Start -->
                            <div class="about-images-2" data-aos="fade-up" data-aos-delay="300">
                                <img src="assets/images/about/about.png" alt="NR Auto Hybrid Services">
                            </div>
                            <!-- About Images End -->
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <!-- About Images Start -->
                            <div class="about-images-2" data-aos="fade-up" data-aos-delay="500">
                                <img src="assets/images/about/about-2.png" alt="NR Auto Hybrid Workshop">
                            </div>
                            <!-- About Images End -->
                        </div>
                    </div>

                    <!-- Vision and Mission Section Start -->
                    <div class="row" style="margin-top: 60px;">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div class="vision-mission-card">
                                <div class="icon-wrapper">🌟</div>
                                <h3>අපේ දැක්ම (Vision)</h3>
                                <p>ශ්‍රී ලංකාවේ විශිෂ්ටතම හා විශ්වාසදායක Hybrid සහ Electrical Vehicle සේවා සපයන්නා බවට පත් වීම.</p>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                            <div class="vision-mission-card">
                                <div class="icon-wrapper">🎯</div>
                                <h3>අපේ මෙහෙයුම (Mission)</h3>
                                <p>අපගේ පාරිභෝගිකයින්ට අලුත්ම තාක්ෂණය සහ වෘත්තිමත් සේවාවන් සමග වාහන නඩත්තු හා අලුත්වැඩියා කිරීමේ ක්ෂේත්‍රයේ නව අත්දැකීම් ලබාදීම, විශ්වාසය සහ තත්ත්වය මත පදනම්ව දිගු කාලීන ගනුදෙනු සම්බන්ධතා ගොඩනැගීම.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Vision and Mission Section End -->

                    <!-- Tagline Section Start -->
                    <div class="row" data-aos="fade-up" data-aos-delay="600">
                        <div class="col-12">
                            <div class="tagline-wrapper">
                                <div class="tagline-section">
                                    <div class="deco-circle"></div>
                                    <div class="deco-circle"></div>
                                    <div class="quote-icon">💬</div>
                                    <h2>Our Promise to You</h2>
                                    <p class="tagline-main">"වාහනයේ ජීවිතය දිගුකරන, සම්පූර්ණ විසඳුම – NR Auto Hybrid"</p>
                                    <p class="tagline-sub">"Extending your vehicle's life – Complete Solution by NR Auto Hybrid"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Tagline Section End -->

                    <div class="row gx-0 justify-content-center" style="margin-top: 40px;">
                        <div class="col-lg-10">
                            <!-- About Count Start -->
                            <div class="about-count about-count-02">
                                <div class="row">
                                    <div class="col-lg-3 col-6">
                                        <!-- About Count Start -->
                                        <div class="single-count" data-aos="fade-up" data-aos-delay="100">
                                            <span class="count">5000+</span>
                                            <p>Happy Clients</p>
                                        </div>
                                        <!-- About Count End -->
                                    </div>
                                    <div class="col-lg-3 col-6">
                                        <!-- About Count Start -->
                                        <div class="single-count" data-aos="fade-up" data-aos-delay="200">
                                            <span class="count">35+</span>
                                            <p>Service Points</p>
                                        </div>
                                        <!-- About Count End -->
                                    </div>
                                    <div class="col-lg-3 col-6">
                                        <!-- About Count Start -->
                                        <div class="single-count" data-aos="fade-up" data-aos-delay="300">
                                            <span class="count">252+</span>
                                            <p>Expert Technicians</p>
                                        </div>
                                        <!-- About Count End -->
                                    </div>
                                    <div class="col-lg-3 col-6">
                                        <!-- About Count Start -->
                                        <div class="single-count" data-aos="fade-up" data-aos-delay="400">
                                            <span class="count">110+</span>
                                            <p>Awards & Recognition</p>
                                        </div>
                                        <!-- About Count End -->
                                    </div>
                                </div>
                            </div>
                            <!-- About Count End -->
                        </div>
                    </div>

                </div>
                <!-- About Wrapper End -->

            </div>
        </div>
        <!-- About Section End -->

        <!-- Why Choose Section Start -->
        <div class="section section-padding-02">
            <div class="container">

                <!-- Why Choose Wrapper Start -->
                <div class="choose-wrapper">
                    <div class="row align-items-center gx-xl-0">
                        <div class="col-lg-5">
                            <!-- Why Choose Content Start -->
                            <div class="choose-content" data-aos="fade-right" data-aos-delay="300">
                                <!-- Section Title Start -->
                                <div class="section-title">
                                    <h5 class="sub-title">Why Choose Us</h5>
                                    <h2 class="main-title">Trust and Service is our Priority</h2>
                                </div>
                                <!-- Section Title End -->

                                <p>We specialize in Hybrid, Electric, and Fuel vehicles with modern equipment and certified technicians. Our commitment to quality ensures your vehicle receives the best care possible.</p>

                                 <img src="assets/images/choose/choose.png" alt="Choose NR Auto Hybrid" width="600" height="500">
                            </div>
                            <!-- Why Choose Content End -->
                        </div>
                        <div class="col-lg-7">
                            <!-- Why Choose Items Wrapper Start -->
                            <div class="choose-items-wrapper">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">

                                        <!-- Single Choose Item Start -->
                                        <div class="single-choose-item" data-aos="fade-up" data-aos-delay="200">
                                            <div class="item-icon">
                                                <img src="assets/images/choose/icon-1.svg" alt="Icon">
                                            </div>
                                            <div class="item-content">
                                                <h4 class="title">Latest Equipment</h4>
                                                <p>Modern diagnostic tools and equipment for accurate service</p>
                                            </div>
                                        </div>
                                        <!-- Single Choose Item End -->

                                    </div>
                                    <div class="col-sm-6">

                                        <!-- Single Choose Item Start -->
                                        <div class="single-choose-item" data-aos="fade-up" data-aos-delay="400">
                                            <div class="item-icon">
                                                <img src="assets/images/choose/icon-3.svg" alt="Icon">
                                            </div>
                                            <div class="item-content">
                                                <h4 class="title">Expert Technicians</h4>
                                                <p>Certified professionals with extensive hybrid vehicle experience</p>
                                            </div>
                                        </div>
                                        <!-- Single Choose Item End -->

                                    </div>
                                    <div class="col-sm-6">

                                        <!-- Single Choose Item Start -->
                                        <div class="single-choose-item" data-aos="fade-up" data-aos-delay="200">
                                            <div class="item-icon">
                                                <img src="assets/images/choose/icon-2.svg" alt="Icon">
                                            </div>
                                            <div class="item-content">
                                                <h4 class="title">Quality Services</h4>
                                                <p>Comprehensive maintenance and repair with quality parts</p>
                                            </div>
                                        </div>
                                        <!-- Single Choose Item End -->

                                    </div>
                                    <div class="col-sm-6">

                                        <!-- Single Choose Item Start -->
                                        <div class="single-choose-item" data-aos="fade-up" data-aos-delay="400">
                                            <div class="item-icon">
                                                <img src="assets/images/choose/icon-4.svg" alt="Icon">
                                            </div>
                                            <div class="item-content">
                                                <h4 class="title">Fast Service</h4>
                                                <p>Efficient turnaround time without compromising quality</p>
                                            </div>
                                        </div>
                                        <!-- Single Choose Item End -->

                                    </div>
                                </div>
                            </div>
                            <!-- Why Choose Items Wrapper End -->
                        </div>
                    </div>
                </div>
                <!-- Why Choose Wrapper End -->

            </div>
        </div>
        <!-- Why Choose Section End -->

        <!-- Call to Action Section Start -->
        <div class="section section-padding-02">
            <div class="container">

                <!-- Call to Action Wrapper Start -->
                <div class="call-to-action-wrapper">

                    <!-- Call to Action Content Start -->
                    <div class="call-to-action-content">
                        <div class="content-wrapper">
                            <!-- Section Title Start -->
                            <div class="section-title section-title-white">
                                <h5 class="sub-title">Emergency Calls 24/7 </h5>
                                <h2 class="main-title">+94 77 721 1639</h2>
                            </div>
                            <!-- Section Title End -->
                            <p>Professional hybrid and electric vehicle service available round the clock. Our expert team is ready to assist you with any automotive needs, ensuring your vehicle receives the highest quality care.</p>
                            <a href="contact.html" class="btn btn-custom-01 btn-hover-white">Get a Quote</a>
                        </div>
                        <img class="shape" src="assets/images/call-to-action.png" alt="Call to Action">
                    </div>
                    <!-- Call to Action Content End -->

                    <!-- Call to Action Images Start -->
                    <div class="call-to-action-images" style="background-image: url(assets/images/call-to-action-bg-2.webp);"></div>
                    <!-- Call to Action Images End -->

                </div>
                <!-- Call to Action Wrapper End -->

            </div>
        </div>
        <!-- Call to Action Section End -->

        <!-- Brand Section Start -->
        <div class="section section-padding">
            <div class="container">

                <!-- Section Title Start -->
                <div class="section-title text-center" data-aos="fade-up">
                    <h5 class="sub-title">Vehicle Brands We Service</h5>
                    <h2 class="main-title">Trusted by Major Brands</h2>
                </div>
                <!-- Section Title End -->

                <!-- Brand Wrapper Start -->
                <div class="brand-wrapper brand-active">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <!-- Single Brand Start -->
                                <div class="single-brand">
                                    <img src="assets/images/brand/honda.png" alt="Honda">
                                </div>
                                <!-- Single Brand End -->
                            </div>
                            <div class="swiper-slide">
                                <!-- Single Brand Start -->
                                <div class="single-brand">
                                    <img src="assets/images/brand/suzuki.png" alt="Suzuki">
                                </div>
                                <!-- Single Brand End -->
                            </div>
                            <div class="swiper-slide">
                                <!-- Single Brand Start -->
                                <div class="single-brand">
                                    <img src="assets/images/brand/lexus.png" alt="Lexus">
                                </div>
                                <!-- Single Brand End -->
                            </div>
                            <div class="swiper-slide">
                                <!-- Single Brand Start -->
                                <div class="single-brand">
                                    <img src="assets/images/brand/benz.png" alt="Mercedes-Benz">
                                </div>
                                <!-- Single Brand End -->
                            </div>
                            <div class="swiper-slide">
                                <!-- Single Brand Start -->
                                <div class="single-brand">
                                   <img src="assets/images/brand/toyota1.png" alt="Toyota" width="120" height="90">
                                </div>
                                <!-- Single Brand End -->
                            </div>
                            <div class="swiper-slide">
                                <!-- Single Brand Start -->
                                <div class="single-brand">
                                   <img src="assets/images/brand/nissan.png" alt="Nissan" width="103" height="79">
                                </div>
                                <!-- Single Brand End -->
                            </div>
                            <div class="swiper-slide">
                                <!-- Single Brand Start -->
                                <div class="single-brand">
                                   <img src="assets/images/brand/daihatsu.png" alt="Daihatsu" width="103" height="79">
                                </div>
                                <!-- Single Brand End -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Brand Wrapper End -->

            </div>
        </div>
        <!-- Brand Section End -->

        <script>
// Custom JavaScript to make the brand carousel move slowly and continuously
document.addEventListener('DOMContentLoaded', function() {
    const brandCarousel = document.querySelector('.brand-active .swiper-container');
    
    if (brandCarousel) {
        const brandSwiper = new Swiper(brandCarousel, {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            speed: 3000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            },
            allowTouchMove: false,
            freeMode: true,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                }
            }
        });
    }
});
</script>

        <?php
      include 'include/footer.inc.php'; 
     
?> 

        <!--Back To Start-->
        <a href="#" class="back-to-top">
            <i class="icofont-simple-up"></i>
        </a>
        <!--Back To End-->

    </div>

    <!-- JS -->
    <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/plugins.min.js"></script>
    <script src="assets/js/main.js"></script>

</body>

</html>