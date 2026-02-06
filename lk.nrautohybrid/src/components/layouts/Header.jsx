import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header Section Start */}
      <div className="section header-section">

        {/* Header Top */}
        <div className="header-top d-none d-lg-block">
          <div className="container">
            <div className="header-top-wrapper">
              <div className="header-top-info">
                <p>328D, Marid Drive, Ackloand</p>
                <p>Call us: <a href="tel:+12025256214">+12(025) 256 214</a></p>
              </div>

              <div className="header-top-btn">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Header Main */}
        <div className={`header-main ${isSticky ? 'sticky' : ''}`}>
          <div className="container">
            <div className="header-main-wrapper">

              {/* Logo */}
              <div className="header-logo">
                <Link to="/">
                  <img src="/assets/images/logo.png" alt="Logo" />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="primary-menu d-none d-lg-block">
                <ul className="nav-menu">

                  <li><Link to="/">Home</Link></li>

                  <li>
                    <a href="#">Services</a>
                    <ul className="sub-menu">
                      <li><Link to="/service">Services</Link></li>
                      <li><Link to="/service-details">Services Details</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li><a href="/shop-grid">Shop Grid</a></li>
                      <li><a href="/shop-left-sidebar">Shop left Sidebar</a></li>
                      <li><a href="/shop-right-sidebar">Shop Right Sidebar</a></li>
                      <li><a href="/product-details-left-sidebar">Product Details Left Sidebar</a></li>
                      <li><a href="/product-details-right-sidebar">Product Details Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages </a>
                    <ul className="sub-menu">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/cart">Cart</a></li>
                      <li><a href="/compare">Compare</a></li>
                      <li><a href="/wishlist">Wishlist</a></li>
                      <li><a href="/empty-cart">Empty Cart</a></li>
                      <li><a href="/checkout">Checkout</a></li>
                      <li><a href="/my-account">My Account</a></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Register</Link></li>
                      <li><a href="/project-gallery">Project Gallery</a></li>
                      <li><a href="/project-details">Project Details</a></li>
                      <li><a href="/our-team">Team</a></li>
                      <li><a href="/team-profile">Team Profile</a></li>
                      <li><a href="/faq">FAQ</a></li>
                      <li><a href="/404-error">404 Error</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li><a href="/blog-grid">Blog Grid</a></li>
                      <li><a href="/blog-left-sidebar">Blog Left Sidebar</a></li>
                      <li><a href="/blog-right-sidebar">Blog Right Sidebar</a></li>
                      <li><a href="/blog-details-left-sidebar">Blog Details Left Sidebar</a></li>
                      <li><a href="/blog-details-right-sidebar">Blog Details Right Sidebar</a></li>
                    </ul>
                  </li>

                  <li><Link to="/contact">Contact</Link></li>

                </ul>
              </div>

              {/* Header Meta */}
              <div className="header-meta">

                <div className="meta-dropdown dropdown">
                  <button className="toggle" data-bs-toggle="dropdown">
                    <i className="icofont-shopping-cart"></i>
                    <span className="count">3</span>
                  </button>
                  <div className="dropdown-menu dropdown-cart">
                    {/* Cart Content Start */}
                    <div className="cart-content">
                      <ul>
                        <li>
                          {/* Single Cart Item Start */}
                          <div className="single-cart-item">
                            <div className="cart-thumb">
                              <img src="/assets/images/mini-cart/cart-1.jpg" alt="Cart" />
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="cart-item-content">
                              <h6 className="product-name"><a href="/product-details-left-sidebar">Madden by Steve Madden Cale 6</a></h6>
                              <span className="product-price">$19.12</span>
                              <div className="attributes-content">
                                <span><strong>Color:</strong> White </span>
                              </div>
                              <button className="cart-remove"><i className="icofont-close-line"></i></button>
                            </div>
                          </div>
                          {/* Single Cart Item End */}
                        </li>
                        <li>
                          {/* Single Cart Item Start */}
                          <div className="single-cart-item">
                            <div className="cart-thumb">
                              <img src="/assets/images/mini-cart/cart-2.jpg" alt="Cart" />
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="cart-item-content">
                              <h6 className="product-name"><a href="/product-details-left-sidebar">New Balance Fresh Foam LAZR v1 Sport</a> </h6>
                              <span className="product-price">$19.12</span>
                              <div className="attributes-content">
                                <span><strong>Color:</strong> White </span>
                              </div>
                              <button className="cart-remove"><i className="icofont-close-line"></i></button>
                            </div>
                          </div>
                          {/* Single Cart Item End */}
                        </li>
                        <li>
                          {/* Single Cart Item Start */}
                          <div className="single-cart-item">
                            <div className="cart-thumb">
                              <img src="/assets/images/mini-cart/cart-3.jpg" alt="Cart" />
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="cart-item-content">
                              <h6 className="product-name"><a href="/product-details-left-sidebar">Water and Wind Resistant Insulated Jacket</a></h6>
                              <span className="product-price">$19.12</span>
                              <div className="attributes-content">
                                <span><strong>Color:</strong> White </span>
                              </div>
                              <button className="cart-remove"><i className="icofont-close-line"></i></button>
                            </div>
                          </div>
                          {/* Single Cart Item End */}
                        </li>
                      </ul>
                    </div>
                    {/* Cart Content End */}

                    {/* Cart Price Start */}
                    <div className="cart-price">
                      <div className="cart-subtotals">
                        <div className="price-inline">
                          <span className="label">Subtotal</span>
                          <span className="value">$42.70</span>
                        </div>
                        <div className="price-inline">
                          <span className="label">Shipping</span>
                          <span className="value">$7.00</span>
                        </div>
                        <div className="price-inline">
                          <span className="label">Taxes</span>
                          <span className="value">$0.00</span>
                        </div>
                      </div>
                      <div className="cart-total">
                        <div className="price-inline">
                          <span className="label">Total</span>
                          <span className="value">$49.70</span>
                        </div>
                      </div>
                    </div>
                    {/* Cart Price Start */}

                    <div className="checkout-btn">
                      <a href="/checkout" className="btn btn-outline-dark btn-hover-primary d-block">Checkout</a>
                    </div>
                  </div>
                </div>

                <div className="header-search d-none d-lg-block">
                  <form action="#">
                    <input type="text" placeholder="Search" />
                    <button><i className="icofont-search-2"></i></button>
                  </form>
                </div>

                <div className="header-toggle d-lg-none">
                  <button className="menu-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
          {/* Header top Info Start */}
          <div className="header-top-info">
            <p>328D, Marid Drive, Ackloand</p>
            <p>Call us: <a href="tel:+12025256214">+12(025) 256 214</a></p>
          </div>
          {/* Header top Info End */}

          {/* Header top Button Start */}
          <div className="header-top-btn">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
          {/* Header top Button End */}

          {/* Header Search Start */}
          <div className="header-search">
            <form action="#">
              <input type="text" placeholder="Search" />
              <button><i className="icofont-search-2"></i></button>
            </form>
          </div>
          {/* Header Search End */}

          {/* Mobile Menu Start */}
          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li>
                <a href="#">Services</a>
                <ul className="sub-menu">
                  <li><Link to="/service">Services</Link></li>
                  <li><Link to="/service-details">Services Details</Link></li>
                </ul>
              </li>
              <li>
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li><a href="/shop-grid">Shop Grid</a></li>
                  <li><a href="/shop-left-sidebar">Shop left Sidebar</a></li>
                  <li><a href="/shop-right-sidebar">Shop Right Sidebar</a></li>
                  <li><a href="/product-details-left-sidebar">Product Details Left Sidebar</a></li>
                  <li><a href="/product-details-right-sidebar">Product Details Right Sidebar</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Pages </a>
                <ul className="sub-menu">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/cart">Cart</a></li>
                  <li><a href="/compare">Compare</a></li>
                  <li><a href="/wishlist">Wishlist</a></li>
                  <li><a href="/empty-cart">Empty Cart</a></li>
                  <li><a href="/checkout">Checkout</a></li>
                  <li><a href="/my-account">My Account</a></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><a href="/project-gallery">Project Gallery</a></li>
                  <li><a href="/project-details">Project Details</a></li>
                  <li><a href="/our-team">Team</a></li>
                  <li><a href="/team-profile">Team Profile</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/404-error">404 Error</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li><a href="/blog-grid">Blog Grid</a></li>
                  <li><a href="/blog-left-sidebar">Blog Left Sidebar</a></li>
                  <li><a href="/blog-right-sidebar">Blog Right Sidebar</a></li>
                  <li><a href="/blog-details-left-sidebar">Blog Details Left Sidebar</a></li>
                  <li><a href="/blog-details-right-sidebar">Blog Details Right Sidebar</a></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* Mobile Menu End */}
        </div>
      </div>
    </>
  );
};

export default Header;
