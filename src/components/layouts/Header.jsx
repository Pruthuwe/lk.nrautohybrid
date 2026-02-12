import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

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
                <p>Kurunegala, Sri Lanka</p>
                <p>Call us: <a href="tel:+12025256214">+94 77 216 6306</a></p>
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
                  <img src="/assets/images/logo-1.png" alt="Logo" />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="primary-menu d-none d-lg-block">
                <ul className="nav-menu">

                  <li><Link to="/">Home</Link></li>

                  <li>
                    <a href="#">Services</a>
                    <ul className="sub-menu">
                      <li><Link to="/service" className={location.pathname === '/service' ? 'active' : ''}>Services</Link></li>
                      <li><Link to="/service-details" className={location.pathname === '/service-details' ? 'active' : ''}>Services Details</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li><Link to="/shop-grid" className={location.pathname === '/shop-grid' ? 'active' : ''}>Shop Grid</Link></li>
                      <li><Link to="/shop-left-sidebar" className={location.pathname === '/shop-left-sidebar' ? 'active' : ''}>Shop left Sidebar</Link></li>
                      <li><Link to="/shop-right-sidebar" className={location.pathname === '/shop-right-sidebar' ? 'active' : ''}>Shop Right Sidebar</Link></li>
                      <li><Link to="/product-details-left-sidebar" className={location.pathname === '/product-details-left-sidebar' ? 'active' : ''}>Product Details Left Sidebar</Link></li>
                      <li><Link to="/product-details-right-sidebar" className={location.pathname === '/product-details-right-sidebar' ? 'active' : ''}>Product Details Right Sidebar</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages </a>
                    <ul className="sub-menu">
                      <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                      <li><Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link></li>
                      <li><Link to="/compare" className={location.pathname === '/compare' ? 'active' : ''}>Compare</Link></li>
                      <li><Link to="/wishlist" className={location.pathname === '/wishlist' ? 'active' : ''}>Wishlist</Link></li>
                      <li><Link to="/empty-cart" className={location.pathname === '/empty-cart' ? 'active' : ''}>Empty Cart</Link></li>
                      <li><Link to="/checkout" className={location.pathname === '/checkout' ? 'active' : ''}>Checkout</Link></li>
                      <li><Link to="/my-account" className={location.pathname === '/my-account' ? 'active' : ''}>My Account</Link></li>
                      <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
                      <li><Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>Register</Link></li>
                      <li><Link to="/project-gallery" className={location.pathname === '/project-gallery' ? 'active' : ''}>Project Gallery</Link></li>
                      <li><Link to="/project-details" className={location.pathname === '/project-details' ? 'active' : ''}>Project Details</Link></li>
                      <li><Link to="/our-team" className={location.pathname === '/our-team' ? 'active' : ''}>Team</Link></li>
                      <li><Link to="/team-profile" className={location.pathname === '/team-profile' ? 'active' : ''}>Team Profile</Link></li>
                      <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link></li>
                      <li><Link to="/404" className={location.pathname === '/404' ? 'active' : ''}>404 Error</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li><Link to="/blog-grid" className={location.pathname === '/blog-grid' ? 'active' : ''}>Blog Grid</Link></li>
                      <li><Link to="/blog-left-sidebar" className={location.pathname === '/blog-left-sidebar' ? 'active' : ''}>Blog Left Sidebar</Link></li>
                      <li><Link to="/blog-right-sidebar" className={location.pathname === '/blog-right-sidebar' ? 'active' : ''}>Blog Right Sidebar</Link></li>
                      <li><Link to="/blog-details-left-sidebar" className={location.pathname === '/blog-details-left-sidebar' ? 'active' : ''}>Blog Details Left Sidebar</Link></li>
                      <li><Link to="/blog-details-right-sidebar" className={location.pathname === '/blog-details-right-sidebar' ? 'active' : ''}>Blog Details Right Sidebar</Link></li>
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
                              <h6 className="product-name"><Link to="/product-details-left-sidebar">Madden by Steve Madden Cale 6</Link></h6>
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
                              <h6 className="product-name"><Link to="/product-details-left-sidebar">New Balance Fresh Foam LAZR v1 Sport</Link> </h6>
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
                              <h6 className="product-name"><Link to="/product-details-left-sidebar">Water and Wind Resistant Insulated Jacket</Link></h6>
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
                      <Link to="/checkout" className="btn btn-outline-dark btn-hover-primary d-block">Checkout</Link>
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
                  <li><Link to="/service" className={location.pathname === '/service' ? 'active' : ''}>Services</Link></li>
                  <li><Link to="/service-details" className={location.pathname === '/service-details' ? 'active' : ''}>Services Details</Link></li>
                </ul>
              </li>
              <li>
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li><Link to="/shop-grid" className={location.pathname === '/shop-grid' ? 'active' : ''}>Shop Grid</Link></li>
                  <li><Link to="/shop-left-sidebar" className={location.pathname === '/shop-left-sidebar' ? 'active' : ''}>Shop left Sidebar</Link></li>
                  <li><Link to="/shop-right-sidebar" className={location.pathname === '/shop-right-sidebar' ? 'active' : ''}>Shop Right Sidebar</Link></li>
                  <li><Link to="/product-details-left-sidebar" className={location.pathname === '/product-details-left-sidebar' ? 'active' : ''}>Product Details Left Sidebar</Link></li>
                  <li><Link to="/product-details-right-sidebar" className={location.pathname === '/product-details-right-sidebar' ? 'active' : ''}>Product Details Right Sidebar</Link></li>
                </ul>
              </li>
              <li>
                <a href="#">Pages </a>
                <ul className="sub-menu">
                  <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                  <li><Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link></li>
                  <li><Link to="/compare" className={location.pathname === '/compare' ? 'active' : ''}>Compare</Link></li>
                  <li><Link to="/wishlist" className={location.pathname === '/wishlist' ? 'active' : ''}>Wishlist</Link></li>
                  <li><Link to="/empty-cart" className={location.pathname === '/empty-cart' ? 'active' : ''}>Empty Cart</Link></li>
                  <li><Link to="/checkout" className={location.pathname === '/checkout' ? 'active' : ''}>Checkout</Link></li>
                  <li><Link to="/my-account" className={location.pathname === '/my-account' ? 'active' : ''}>My Account</Link></li>
                  <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
                  <li><Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>Register</Link></li>
                  <li><Link to="/project-gallery" className={location.pathname === '/project-gallery' ? 'active' : ''}>Project Gallery</Link></li>
                  <li><Link to="/project-details" className={location.pathname === '/project-details' ? 'active' : ''}>Project Details</Link></li>
                  <li><Link to="/our-team" className={location.pathname === '/our-team' ? 'active' : ''}>Team</Link></li>
                  <li><Link to="/team-profile" className={location.pathname === '/team-profile' ? 'active' : ''}>Team Profile</Link></li>
                  <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link></li>
                  <li><Link to="/404-error" className={location.pathname === '/404-error' ? 'active' : ''}>404 Error</Link></li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li><Link to="/blog-grid" className={location.pathname === '/blog-grid' ? 'active' : ''}>Blog Grid</Link></li>
                  <li><Link to="/blog-left-sidebar" className={location.pathname === '/blog-left-sidebar' ? 'active' : ''}>Blog Left Sidebar</Link></li>
                  <li><Link to="/blog-right-sidebar" className={location.pathname === '/blog-right-sidebar' ? 'active' : ''}>Blog Right Sidebar</Link></li>
                  <li><Link to="/blog-details-left-sidebar" className={location.pathname === '/blog-details-left-sidebar' ? 'active' : ''}>Blog Details Left Sidebar</Link></li>
                  <li><Link to="/blog-details-right-sidebar" className={location.pathname === '/blog-details-right-sidebar' ? 'active' : ''}>Blog Details Right Sidebar</Link></li>
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
