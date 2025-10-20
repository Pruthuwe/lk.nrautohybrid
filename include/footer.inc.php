<style>
   /* Professional copyright styling */
    .copyright-text {
        text-align: center;
    }

    .copyright-text a {
        transition: opacity 0.3s ease;
    }

    .copyright-text a:hover {
        opacity: 0.8;
    }

    /* Responsive adjustments */
    @media screen and (max-width: 768px) {
        .copyright-text {
            font-size: 12px;
            gap: 10px;
        }

        .copyright-text span {
            width: 100%;
        }
    }

    @media screen and (max-width: 480px) {
        .copyright-text {
            flex-direction: column;
            gap: 75px;
        }

        .copyright-text span {
            font-size: 11px;
            text-align: center;
        }
    }
    /* Scroll to top button styles */
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #d094ea 0%, #d094ea 100%);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1 0 01;
        /* Higher than WhatsApp button */
        box-shadow: 0 4px 20px rgba(208, 148, 234, 0.4);
    }

    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .scroll-to-top:hover {
        background: linear-gradient(135deg, #d094ea 0%, #d094ea 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(208, 148, 234, 0.6);
    }

    .scroll-to-top:active {
        transform: translateY(0);
    }

    .scroll-to-top svg {
        width: 20px;
        height: 20px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .scroll-to-top:hover svg {
        transform: translateY(-2px);
    }

    /* Floating WhatsApp Button */
    .whatsapp-float {
        position:
            fixed;
        bottom: 100px;
        /* Positioned above scroll-to-top button */
        right: 30px;
        z-index: 1000;
        opacity: 0;
        transform: scale(0);
        animation: fadeInScale 0.6s ease-out 1s forwards;
    }

    .whatsapp-btn {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #25d366, #128c7e);
        border-radius: 50%;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        text-decoration: none;
    }

    .whatsapp-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
    }

    .whatsapp-btn:active {
        transform: scale(0.95);
    }

    .whatsapp-icon {
        width: 30px;
        height: 30px;
        fill: white;
        z-index: 2;
        transition: transform 0.3s ease;
    }

    .whatsapp-btn:hover .whatsapp-icon {
        transform: scale(1.1);
    }

    /* Pulse animation */
    .whatsapp-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        background: rgba(37, 211, 102, 0.3);
        animation: pulse 2s infinite;
    }

    /* Tooltip with barbershop styling */
    .whatsapp-tooltip {
        position: absolute;
        right: 65px;
        top: 50%;
        transform: translateY(-50%);
        background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
        color: #d094ea;
        border: 2px solid #d094ea;
        padding: 8px 12px;
        border-radius: 20px;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        opacity: 0;
        transform: translateY(-50%) translateX(10px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
    }

    .whatsapp-tooltip::after {
        content: '';
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid #d094ea;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    .whatsapp-float:hover .whatsapp-tooltip {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
    }

    /* Animations */
    @keyframes fadeInScale {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @key frames pulse {
        0% {

            transform: scale(1);
            opacity: 1;
        }

        50% {

            transform: scale(1.2);
            opacity: 0.7;
        }

        100% {
            transform: scale(1.4);
            opacity: 0;
        }

    }

    /* Responsive design for Mobile and Tablet */
    @med ia screen and (max-width: 1024px) {

        /* Tablet styles */
        .whatsapp-float {
            bottom: 95px;
            right: 30px;
        }

        .scroll-to-top {
            bottom: 30px;
            right: 30px;
        }

        .whatsapp-tooltip {
            right: 65px;
            font-size: 12px;
            padding: 6px 10px;

            max-width: 150px;
        }
    }

    @media screen and (max-width: 768px) {

        /* Mobile styles - Stack vertically on right side */
        .whatsapp-float {
            bottom: 90px;
            right: 20px;
        }

        .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
        }

        .scroll-to-top svg {
            width: 18px;
            height: 18px;
        }

        .whatsapp-btn {
            width: 55px;
            height: 55px;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-icon {
            width: 32px;
            height: 32px;
        }

        .whatsapp-tooltip {
            right: 65px;
            font-size: 11px;
            padding: 6px 8px;
            max-width: 120px;
            border-radius: 15px;
        }

        .whatsapp-tooltip::after {
            border-left-width: 6px;
            border-top-width: 6px;

            border-bottom-width: 6px;
            right: -6px;
        }
    }

    @media screen and (max-width: 480px) {

        /* Small mobile styles */
        .whatsapp-float {
            bottom: 85px;
            right: 15px;
        }

        .scroll-to-top {
            bottom: 15px;
            right: 15px;
            width: 42px;
            height: 42px;
        }

        .scroll-to-top svg {
            width: 16px;
            height: 16px;
        }

        .whatsapp-btn {
            width: 50px;
            height: 50px;
        }


        .whatsapp-icon {
            width: 28px;
            height: 28px;
        }


        .whatsapp-tooltip {
            display: none;
            /* Hide tooltip on very small screens */
        }
    }

    @media screen and (max-width: 360px) {

        /* Very small mobile styles */
        .whatsapp-float {
            bottom: 80px;
            right: 10px;
        }

        .scroll-to-top {
            bottom: 10px;
            right: 10px;
            width: 40px;
            height: 40px;
        }

        .scroll-to-top svg {
            width: 14px;
            height: 14px;
        }

        .whatsapp-btn {
            width: 48px;
            height: 48px;
        }

        .whatsapp-icon {
            width: 26px;
            height: 26px;
        }
    }


    /* Ensure buttons stay above other content */
    .whatsapp-float,
    .scroll-to-top {
        pointer-events: auto;
    }

    /* Fix touch targets for mobile */
    @media (hover: none) and (pointer: coarse) {

        .whatsapp-btn,
        .scroll-to-top {
            min-width: 44px;
            min-height: 44px;
        }
    }
</style>
<!-- Footer Section Start -->
<div class="section footer-section" style="background-image: url(assets/images/footer-bg.webp);">

    <!-- Footer Widget Start -->
    <div class="footer-widget-section section-padding">
        <div class="container">

            <!-- Footer Widget Wrapper Start -->
            <div class="footer-widget-wrapper">
                <div class="row">
                    <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">

                        <!-- Footer Widget Start -->
                        <div class="footer-widget" data-aos="fade-up" data-aos-delay="100">
                            <a class="footer-logo" href="#"><img src="assets/images/NR-Logo2.png" alt="Logo"></a>
                            <p>Trusted and reliable service is our to main goal extremely painful. again a there anyone
                                loves our chooses</p>

                            <div class="widget-info">
                                <h6 class="title">Contact info</h6>
                                <p>280 SS Dias Mawatha, Diwulapitiya, <br> Boralasgamuwa, Boralasgamuwa, Srilanka</p>
                                <p><span>Phone</span>: +94 77 721 1639</p>
                                <p><span>Email</span>: info@nrautohybrid.lk</p>
                            </div>
                        </div>
                        <!-- Footer Widget End -->

                    </div>
                    <div class="col-lg-6 order-md-3 order-lg-2">

                        <!-- Footer Link End -->
                        <div class="footer-link-wrapper">

                            <!-- Footer Widget Start -->
                            <div class="footer-widget" data-aos="fade-up" data-aos-delay="200">
                                <h3 class="footer-widget-title">Quick Links</h3>

                                <ul class="widget-link">
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="service.html">Our Services</a></li>
                                    <li><a href="our-team.html">Our Mechanics</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog Post</a></li>
                                    <li><a href="login.html">Login/Register</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <!-- Footer Widget End -->

                            <!-- Footer Widget Start -->
                            <div class="footer-widget" data-aos="fade-up" data-aos-delay="300">
                                <h3 class="footer-widget-title">Information</h3>

                                <ul class="widget-link">
                                    <li><a href="contact.html">Book Appointment</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Payment</a></li>
                                    <li><a href="#">Emergency Call</a></li>
                                    <li><a href="#">Tracking Service</a></li>
                                </ul>
                            </div>
                            <!-- Footer Widget End -->

                        </div>
                        <!-- Footer Link End -->

                    </div>
                    <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">

                        <!-- Footer Widget Start -->
                        <div class="footer-widget" data-aos="fade-up" data-aos-delay="400">
                            <h3 class="footer-widget-title">Information</h3>

                            <div class="widget-subscribe">
                                <p>Subscribe our Newsletter to get latest update, offers and promotions </p>

                                <div class="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Enter Email">
                                        <button><i class="fa fa-paper-plane-o"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="widget-opening">
                                <h6 class="title">Opening Hour</h6>

                                <p>Monday to Friday <i class="fa fa-long-arrow-right"></i> 9.30 am to 11.30 pm</p>
                                <p>Saturday to Sunday <i class="fa fa-long-arrow-right"></i> 10.30 am to 8 pm</p>
                            </div>
                        </div>
                        <!-- Footer Widget End -->

                    </div>
                </div>
            </div>
            <!-- Footer Widget Wrapper End -->

        </div>
    </div>
    <!-- Footer Widget End -->

    <!-- Footer Copyright End -->
  <div class="footer-copyright-section">
    <div class="container">
        <!-- Copyright Wrapper Start -->
        <div class="copyright-wrapper">
            <div class="copyright-text" style="color: white; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 20px;">
                <span style="font-size: 14px; font-weight: 500;">
                    Made with ❤️ by <a href="https://deviitor.com/" style="color: white; text-decoration: none; font-weight: 600;">Deviitor.D&D</a>
                </span>
                <span style="font-size: 14px; font-weight: 500;">
                    &copy; 2025 <a href="#" style="color: white; text-decoration: none; font-weight: 600;">NR Auto Hybrid</a>. All rights reserved.
                </span>
            </div>

            <div class="copyright-social">
                <a href="#" class="instagram-icon" aria-label="Follow us on Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="facebook-icon" aria-label="Follow us on Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="tiktok-icon" aria-label="Follow us on TikTok">
                    <i class="fab fa-tiktok"></i>
                </a>
            </div>
        </div>
        <!-- Copyright Wrapper End -->
    </div>
</div>
    <!-- Footer Copyright End -->
    <!-- WhatsApp Floating Button -->
    <div class="whatsapp-float">
        <a href="https://wa.me/+94763571659?text=Hi%20NR-Auto%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank" class="whatsapp-btn" aria-label="Contact us on WhatsApp">
            <svg class="whatsapp-icon" viewBox="0 0 24 24">
                <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
            </svg>
            <div class="whatsapp-tooltip">
                Book your appointment!
            </div>
        </a>
    </div>

</div>