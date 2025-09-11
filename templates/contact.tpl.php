<?php
      include 'include/header.inc.php'; 
     
?> 




        <!-- Page Banner Section Start -->
        <div class="section page-banner-section" style="background-image: url(assets/images/page-banner-bg.png);">
            <div class="container">
                <!-- Page Banner Wrapper Start -->
                <div class="page-banner-wrapper">

                    <!-- Page Banner Content Start -->
                    <div class="page-banner-content">

                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h5 class="sub-title">Connect</h5>
                            <h2 class="main-title">Connect <br> with us</h2>
                        </div>
                        <!-- Section Title End -->

                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Connect</li>
                        </ul>
                    </div>
                    <!-- Page Banner Content End -->

                    <!-- Page Banner Images Start -->
                    <div class="page-banner-images">
                        <img src="assets/images/page-banner-3.png" alt="Page Banner">
                    </div>
                    <!-- Page Banner Images End -->

                </div>
                <!-- Page Banner Wrapper End -->
            </div>
        </div>
        <!-- Page Banner Section End -->

        <!-- Contact Section Start -->
        <div class="section section-padding-02">
            <div class="container">

                <!-- Contact Wrapper Start -->
                <div class="contact-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <!-- Contact Image Start -->
                            <div class="contact-image" data-aos="fade-right" data-aos-delay="300">
                                <img src="assets/images/contact.jpg" alt="Contact">
                            </div>
                            <!-- Contact Image End -->
                        </div>
                        <div class="col-lg-6">
                            <!-- Contact Content Start -->
                            <div class="contact-content" data-aos="fade-left" data-aos-delay="300">
                                <h2 class="title">Contact information</h2>
                                <p class="sub-title">You can connect with us</p>

                                <div class="content-info">
                                    <div class="row gx-md-5">
                                        <div class="col-md-6">
                                            <!-- Single Info Start -->
                                            <div class="single-info">
                                                <h4 class="info-title">Find us here</h4>
                                                <p>328D, Marid Drive, West City Bulex Tower, Ackland</p>
                                            </div>
                                            <!-- Single Info End -->
                                        </div>
                                        <div class="col-md-6">
                                            <!-- Single Info Start -->
                                            <div class="single-info">
                                                <h4 class="info-title">Call us</h4>
                                                <p><a href="tel:+99123456789">+99 123 456 789</a></p>
                                                <p><a href="tel:+99123456789">+99 123 456 789</a></p>
                                            </div>
                                            <!-- Single Info End -->
                                        </div>
                                        <div class="col-md-6">
                                            <!-- Single Info Start -->
                                            <div class="single-info">
                                                <h4 class="info-title">Web Info</h4>
                                                <p><a href="mailto:info@carserv.com">info@carserv.com</a></p>
                                                <p><a href="mailto:www.carserv.com">www.carserv.com</a></p>
                                            </div>
                                            <!-- Single Info End -->
                                        </div>
                                        <div class="col-md-6">
                                            <!-- Single Info Start -->
                                            <div class="single-info">
                                                <h4 class="info-title">Also Follow us</h4>
                                                <ul class="social">
                                                    <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                            <!-- Single Info End -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Contact Content End -->
                        </div>
                    </div>
                </div>
                <!-- Contact Wrapper End -->

            </div>
        </div>
        <!-- Contact Section End -->

        <!-- Contact Section End -->
        <div class="section section-padding">
            <div class="container">

                <!-- Contact Section End -->
                <div class="contact-form-wrapper text-center" data-aos="fade-up" data-aos-delay="300">
                    <h3 class="title">Get in Touch</h3>

                    <div class="form-wrapper">
                        <form id="contact-form" action="assets/php/contact.php" method="POST">
                            <div class="row">
                                <div class="col-md-4">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input type="text" placeholder="Name" name="name">
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-4">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input type="email" placeholder="Email" name="email">
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-4">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input type="text" placeholder="Number" name="phone">
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <textarea placeholder="Write message here" name="message"></textarea>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <p class="form-message"></p>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <button class="btn btn-custom-01">Sand message</button>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <!-- Contact Section End -->

            </div>
        </div>
        <!-- Contact Section End -->

 <?php
      include 'include/footer.inc.php'; 
     
?> 
        <!-- Footer Section End -->

        <!--Back To Start-->
        <a href="#" class="back-to-top">
            <i class="icofont-simple-up"></i>
        </a>
        <!--Back To End-->

    </div>

    <!-- JS
    ============================================ -->

    <!-- Modernizer & jQuery JS -->
    <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>

    <!-- Bootstrap JS -->
    <!-- <script src="assets/js/plugins/popper.min.js"></script>
    <script src="assets/js/plugins/bootstrap.min.js"></script> -->

    <!-- Plugins JS -->
    <!-- <script src="assets/js/plugins/swiper-bundle.min.js"></script>
    <script src="assets/js/plugins/jquery-ui.min.js"></script>
    <script src="assets/js/plugins/select2.min.js"></script>
    <script src="assets/js/plugins/ajax-contact.js"></script>
    <script src="assets/js/plugins/aos.js"></script> -->

    <!--====== Use the minified version files listed below for better performance and remove the files listed above ======-->
    <script src="assets/js/plugins.min.js"></script>


    <!-- Main JS -->
    <script src="assets/js/main.js"></script>

</body>

</html>