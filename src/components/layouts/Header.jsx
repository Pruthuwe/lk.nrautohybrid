import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GetaQuote from "../quote/getaQuote";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const location = useLocation();

  // Search content database
  const searchContent = [
    { title: 'Home', url: '/', description: 'Green Auto - Expert Vehicle Repair Services', keywords: 'home main index landing page' },
    { title: 'About Us', url: '/about', description: 'Learn about Green Auto and our expertise in vehicle repairs', keywords: 'about company history team experience expertise background' },
    { title: 'Services', url: '/service-details', description: 'Our specialized repair services and maintenance', keywords: 'services repairs maintenance fix' },
    { title: 'Turbocharger Repairs', url: '/service-details', description: 'Expert turbo repair, maintenance and boost performance', keywords: 'turbo turbocharger boost repair performance engine power' },
    { title: 'ABS Repairs', url: '/service-details', description: 'Anti-lock brake system repairs and diagnostics', keywords: 'abs brakes anti-lock safety brake system diagnostics' },
    { title: 'Dual Clutch Repairs', url: '/service-details', description: 'Specialized dual clutch transmission repairs DCT', keywords: 'dual clutch transmission gearbox dct automatic manual' },
    { title: 'Hybrid System Repairs', url: '/service-details', description: 'Hybrid vehicle battery and system repairs', keywords: 'hybrid electric battery ev system repairs maintenance' },
    { title: 'Engine Diagnostics', url: '/service-details', description: 'Complete engine diagnostics and repair services', keywords: 'engine diagnostics check light problem repair' },
    { title: 'Our Jobs', url: '/project-gallery', description: 'View our completed projects and gallery', keywords: 'projects gallery work jobs portfolio completed past' },
    { title: 'Our Team', url: '/our-team', description: 'Meet our expert mechanics and technicians', keywords: 'team mechanics staff experts technicians professionals' },
    { title: 'Contact Us', url: '/contact', description: 'Get in touch with us - Phone, Email, Location', keywords: 'contact phone email location address kurunegala sri lanka reach' },
    { title: 'Appointment', url: '/', description: 'Book an appointment for vehicle service', keywords: 'appointment booking schedule service reserve time slot' },
    { title: 'Emergency Service', url: '/contact', description: '24/7 Emergency vehicle repair service', keywords: 'emergency 24/7 urgent immediate help roadside' },
    { title: 'FAQ', url: '/faq', description: 'Frequently asked questions and answers', keywords: 'faq questions help support answers common' },
    { title: 'Latest Equipment', url: '/about', description: 'Modern tools and latest technology for repairs', keywords: 'equipment tools technology modern latest advanced' },
    { title: 'Quality Service', url: '/', description: 'Trusted and reliable vehicle service', keywords: 'quality service trust reliable best professional' },
    { title: 'Vehicle Brands', url: '/', description: 'We service Toyota, Honda, Nissan, Kia, Suzuki and more', keywords: 'toyota honda nissan kia suzuki mitsubishi mazda subaru brands cars vehicles' }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim().length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const queryWords = lowerQuery.split(' ').filter(word => word.length > 0);
    
    // Score and filter results
    const scoredResults = searchContent.map(item => {
      let score = 0;
      const itemText = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
      
      // Exact title match gets highest score
      if (item.title.toLowerCase().includes(lowerQuery)) {
        score += 10;
      }
      
      // Description match
      if (item.description.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }
      
      // Keywords match
      if (item.keywords.toLowerCase().includes(lowerQuery)) {
        score += 3;
      }
      
      // Individual word matches
      queryWords.forEach(word => {
        if (itemText.includes(word)) {
          score += 1;
        }
      });
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8); // Limit to top 8 results

    setSearchResults(scoredResults);
    setShowSearchResults(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      window.location.href = searchResults[0].url;
      setShowSearchResults(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleClickOutside = (event) => {
      if (showSearchResults && !event.target.closest('.header-search')) {
        setShowSearchResults(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchResults]);

  return (
    <>
      {/* Header Section Start */}
      <div className="section header-section">

        {/* Header Top */}
        <div className="header-top d-none d-lg-block">
          <div className="container">
            <div className="header-top-wrapper d-flex justify-content-between align-items-center">
              <div className="header-top-info d-flex align-items-center gap-4">
              <div className="header-top-info">
                <p>Kurunegala, Sri Lanka</p>
                <p>Call us: <a href="tel:+12025256214">+94 77 216 6306</a></p>
              </div>

                  {/* <span className="mb-0">
                    <i className="icofont-location-pin me-2"></i>
                    Thalawathugoda, Sri Lanka.
                  </span> */}

                <span className="mb-0 px-3 py-1 rounded">
                  <i className="icofont-clock-time me-2"></i>
                  Monday - Saturday: 8:30 am - 6:30 pm
                </span>
              </div>

              <div className="header-top-social d-flex align-items-center gap-3">
                <a href="https://web.facebook.com/greenauto.lk"><i className="icofont-facebook"></i></a>
                <a href="#"><i className="icofont-instagram"></i></a>
                <a href="https://wa.me/94772166306"><i className="icofont-whatsapp"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
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

                  <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>

                  <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>

                  <li><Link to="/service-details" className={location.pathname === '/service-details' ? 'active' : ''}>Service</Link></li>

                  <li><Link to="/project-gallery" className={location.pathname === '/project-gallery' ? 'active' : ''}>Our Jobs</Link></li>

                  <li><Link to="/our-team" className={location.pathname === '/our-team' ? 'active' : ''}>Team</Link></li>

                  <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                </ul>
              </div>

              {/* Header Meta */}
              <div className="header-meta d-flex align-items-center gap-3">

                <button onClick={() => setShowQuoteModal(true)} className="btn btn-outline-primary">Get a Quote</button>

                <div className="header-search d-none d-lg-block" style={{ position: 'relative' }}>
                  <form onSubmit={handleSearchSubmit}>
                    <input 
                      type="text" 
                      placeholder="Search" 
                      className="form-control border-primary" 
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                  
                  {/* Search Results Dropdown */}
                  {showSearchResults && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to bottom, #000000, #4a4a4a)',
                        border: '1px solid #333',
                        borderRadius: '5px',
                        marginTop: '5px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                        zIndex: 1000,
                        maxHeight: '400px',
                        overflowY: 'auto'
                      }}
                    >
                      {searchResults.length > 0 ? (
                        <>
                          <div style={{
                            padding: '8px 16px',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            borderBottom: '1px solid #555',
                            fontSize: '12px',
                            color: '#ddd',
                            fontWeight: '500'
                          }}>
                            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                          </div>
                          {searchResults.map((result, index) => (
                            <Link
                              key={index}
                              to={result.url}
                              onClick={() => {
                                setShowSearchResults(false);
                                setSearchQuery('');
                              }}
                              style={{
                                display: 'block',
                                padding: '12px 16px',
                                textDecoration: 'none',
                                color: '#ffffff',
                                borderBottom: index < searchResults.length - 1 ? '1px solid #555' : 'none',
                                transition: 'background-color 0.2s'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              <div style={{ fontWeight: '600', marginBottom: '4px', color: '#00d4ff' }}>
                                {result.title}
                              </div>
                              <div style={{ fontSize: '14px', color: '#cccccc' }}>
                                {result.description}
                              </div>
                            </Link>
                          ))}
                        </>
                      ) : (
                        <div style={{
                          padding: '20px 16px',
                          textAlign: 'center',
                          color: '#aaa'
                        }}>
                          <i className="icofont-search-2" style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}></i>
                          No results found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  )}
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
          <div className="header-search" style={{ position: 'relative' }}>
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
              />
              <button type="submit"><i className="icofont-search-2"></i></button>
            </form>
            
            {/* Mobile Search Results */}
            {showSearchResults && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to bottom, #000000, #4a4a4a)',
                  border: '1px solid #333',
                  borderRadius: '5px',
                  marginTop: '5px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                  zIndex: 1000,
                  maxHeight: '400px',
                  overflowY: 'auto'
                }}
              >
                {searchResults.length > 0 ? (
                  <>
                    <div style={{
                      padding: '8px 16px',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      borderBottom: '1px solid #555',
                      fontSize: '12px',
                      color: '#ddd',
                      fontWeight: '500'
                    }}>
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </div>
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        to={result.url}
                        onClick={() => {
                          setShowSearchResults(false);
                          setSearchQuery('');
                        }}
                        style={{
                          display: 'block',
                          padding: '12px 16px',
                          textDecoration: 'none',
                          color: '#ffffff',
                          borderBottom: index < searchResults.length - 1 ? '1px solid #555' : 'none'
                        }}
                      >
                        <div style={{ fontWeight: '600', marginBottom: '4px', color: '#00d4ff' }}>
                          {result.title}
                        </div>
                        <div style={{ fontSize: '14px', color: '#cccccc' }}>
                          {result.description}
                        </div>
                      </Link>
                    ))}
                  </>
                ) : (
                  <div style={{
                    padding: '20px 16px',
                    textAlign: 'center',
                    color: '#aaa'
                  }}>
                    <i className="icofont-search-2" style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}></i>
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
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

      {/* Quote Modal */}
      {showQuoteModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{zIndex: 1050}}>
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body p-4">
                  <GetaQuote 
                    onClose={() => setShowQuoteModal(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={() => setShowQuoteModal(false)} style={{zIndex: 1040}}></div>
        </>
      )}
    </>
  );
};

export default Header;
