import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const EmptyCart = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />

      {/* Page Banner Section Start */}
      <div className="section page-banner-section" style={{backgroundImage: "url(/assets/images/page-banner-bg.webp)"}}>
        <div className="container">
          {/* Page Banner Wrapper Start */}
          <div className="page-banner-wrapper">

            {/* Page Banner Content Start */}
            <div className="page-banner-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Empty Cart</h5>
                <h2 className="main-title">Shopping <br /> Empty Cart</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Empty Cart</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-4.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Cart Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Empty Cart Start */}
          <div className="empty-cart text-center">
            <h2 className="empty-cart-title">There are no more items in your cart</h2>
            <div className="empty-cart-img">
              <img src="/assets/images/cart.png" alt="" />
            </div>
            <p>Your cart is currently empty!</p>
            <Link to="/shop-left-sidebar" className="btn btn-custom-01"><i className="fa fa-angle-left"></i> Continue browsing</Link>
          </div>
          {/* Empty Cart End */}

        </div>
      </div>
      {/* Cart Section End */}

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default EmptyCart;