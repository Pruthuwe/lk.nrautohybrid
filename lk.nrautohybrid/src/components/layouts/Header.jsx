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
                <p>
                  Call us: <a href="tel:+12025256214">+12 (025) 256 214</a>
                </p>
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
                    <span>Services</span>
                    <ul className="sub-menu">
                      <li><Link to="/service">Services</Link></li>
                      <li><Link to="/service-details">Service Details</Link></li>
                    </ul>
                  </li>

                  <li>
                    <span>Shop</span>
                    <ul className="sub-menu">
                      <li><Link to="/shop-grid">Shop Grid</Link></li>
                      <li><Link to="/shop-left-sidebar">Shop Left Sidebar</Link></li>
                      <li><Link to="/shop-right-sidebar">Shop Right Sidebar</Link></li>
                    </ul>
                  </li>

                  <li>
                    <span>Pages</span>
                    <ul className="sub-menu">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/cart">Cart</Link></li>
                      <li><Link to="/checkout">Checkout</Link></li>
                      <li><Link to="/my-account">My Account</Link></li>
                      <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                  </li>

                  <li>
                    <span>Blog</span>
                    <ul className="sub-menu">
                      <li><Link to="/blog-grid">Blog Grid</Link></li>
                      <li><Link to="/blog-details">Blog Details</Link></li>
                    </ul>
                  </li>

                  <li><Link to="/contact">Contact</Link></li>

                </ul>
              </div>

              {/* Header Meta */}
              <div className="header-meta">

                {/* Cart Icon */}
                <div className="meta-dropdown dropdown">
                  <button className="toggle" data-bs-toggle="dropdown">
                    <i className="icofont-shopping-cart"></i>
                    <span className="count">3</span>
                  </button>
                </div>

                {/* Search */}
                <div className="header-search d-none d-lg-block">
                  <form>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>

                {/* Mobile Toggle */}
                <div className="header-toggle d-lg-none">
                  <button
                    className="menu-toggle"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileMenu"
                  >
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
      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/shop-grid">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
