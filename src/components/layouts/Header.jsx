import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GetaQuote from "../quote/getaQuote";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Search content database - Only pages accessible through header navigation
  const searchContent = [
    { title: 'Home', url: '/', description: 'Green Auto - Expert Vehicle Repair Services', keywords: 'home main index landing page welcome get a quote appointment contact us' },
    { title: 'About Us', url: '/about', description: 'Learn about Green Auto and our expertise in vehicle repairs', keywords: 'about company history team experience expertise background information' },
    { title: 'Service', url: '/service', description: 'Our specialized repair services and maintenance', keywords: 'services repairs maintenance fix turbo abs hybrid engine diagnostics' },
    { title: 'Our Jobs', url: '/our-jobs', description: 'View our completed projects and gallery', keywords: 'projects gallery work jobs portfolio completed past showcase' },
    { title: 'Team', url: '/team', description: 'Meet our expert mechanics and technicians', keywords: 'team mechanics staff experts technicians professionals people' },
    { title: 'Contact', url: '/contact', description: 'Get in touch with us - Phone, Email, Location', keywords: 'contact phone email location address kurunegala sri lanka reach us' }
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
      setShowSearchResults(false);
      setSearchQuery('');
      navigate(searchResults[0].url);
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

  // Remove white space on right when offcanvas menu opens (clear immediately on click so no flash during open)
  useEffect(() => {
    const clearBodyPadding = () => {
      document.body.style.setProperty('padding-right', '0', 'important');
      document.body.style.setProperty('overflow', 'hidden', 'important');
      document.body.style.setProperty('margin-right', '0', 'important');
      document.documentElement.style.setProperty('padding-right', '0', 'important');
      document.documentElement.style.setProperty('overflow-x', 'hidden', 'important');
      const root = document.getElementById('root');
      if (root) {
        root.style.setProperty('overflow-x', 'hidden', 'important');
        root.style.setProperty('max-width', '100%', 'important');
      }
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.style.setProperty('width', '100%', 'important');
        backdrop.style.setProperty('max-width', '100vw', 'important');
        backdrop.style.setProperty('right', '0', 'important');
        backdrop.style.setProperty('left', '0', 'important');
      }
    };

    const offcanvasEl = document.getElementById('offcanvasExample');
    const menuToggle = document.querySelector('.menu-toggle[data-bs-toggle="offcanvas"][data-bs-target="#offcanvasExample"]');
    if (!offcanvasEl) return;

    // Clear as soon as menu STARTS to open
    const onShow = () => {
      clearBodyPadding();
      requestAnimationFrame(clearBodyPadding);
      setTimeout(clearBodyPadding, 0);
    };
    const onShown = () => {
      clearBodyPadding();
      setTimeout(clearBodyPadding, 10);
    };

    // Clear in next task after toggle click (runs after Bootstrap adds padding) so no white space during transition
    const onToggleClick = () => {
      setTimeout(clearBodyPadding, 0);
      requestAnimationFrame(clearBodyPadding);
      requestAnimationFrame(() => requestAnimationFrame(clearBodyPadding));
    };

    const observer = new MutationObserver(() => {
      if (document.body.classList.contains('modal-open') || document.body.style.paddingRight) {
        clearBodyPadding();
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });

    offcanvasEl.addEventListener('show.bs.offcanvas', onShow);
    offcanvasEl.addEventListener('shown.bs.offcanvas', onShown);
    if (menuToggle) {
      menuToggle.addEventListener('click', onToggleClick);
    }

    return () => {
      offcanvasEl.removeEventListener('show.bs.offcanvas', onShow);
      offcanvasEl.removeEventListener('shown.bs.offcanvas', onShown);
      if (menuToggle) {
        menuToggle.removeEventListener('click', onToggleClick);
      }
      observer.disconnect();
    };
  }, []);

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

                  <li><Link to="/service" className={location.pathname === '/service' ? 'active' : ''}>Service</Link></li>

                  <li><Link to="/our-jobs" className={location.pathname === '/our-jobs' ? 'active' : ''}>Our Jobs</Link></li>

                  <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Link></li>

                  <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                </ul>
              </div>

              {/* Header Meta */}
              <div className="header-meta d-flex align-items-center gap-3">

                <button onClick={() => setShowQuoteModal(true)} className="btn btn-outline-primary">Get a Quote</button>

                <div className="header-search d-none d-lg-block">
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
                    <div className="search-results-dropdown">
                      {searchResults.length > 0 ? (
                        <>
                          <div className="search-results-dropdown__header">
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
                              className="search-results-dropdown__item"
                            >
                              <div className="search-results-dropdown__item-title">
                                {result.title}
                              </div>
                              <div className="search-results-dropdown__item-description">
                                {result.description}
                              </div>
                            </Link>
                          ))}
                        </>
                      ) : (
                        <div className="search-results-dropdown__no-results">
                          <i className="icofont-search-2"></i>
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
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
          {/* Header top Info Start */}
          <div className="header-top-info">
            <p>Kurunegala, Sri Lanka</p>
            <p>Call us: <a href="tel:+94772166306">+94 77 216 6306</a></p>
          </div>
          {/* Header top Info End */}

          {/* Header Social Links Start */}
          <div className="header-top-social d-flex align-items-center justify-content-center gap-3">
            <a href="https://web.facebook.com/greenauto.lk"><i className="icofont-facebook"></i></a>
            <a href="#"><i className="icofont-instagram"></i></a>
            <a href="https://wa.me/94772166306"><i className="icofont-whatsapp"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
          {/* Header Social Links End */}

          {/* Header Search Start */}
          <div className="header-search">
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
                onBlur={() => {
                  // Delay to allow clicking on search results
                  setTimeout(() => setShowSearchResults(false), 200);
                }}
              />
              <button type="submit"><i className="icofont-search-2"></i></button>
            </form>
            
            {/* Mobile Search Results */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="search-results-dropdown">
                <div className="search-results-dropdown__header">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </div>
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    to={result.url}
                    onClick={() => {
                      setShowSearchResults(false);
                      setSearchQuery('');
                      // Close the offcanvas
                      const offcanvas = document.getElementById('offcanvasExample');
                      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                      if (bsOffcanvas) {
                        bsOffcanvas.hide();
                      }
                    }}
                    className="search-results-dropdown__item"
                  >
                    <div className="search-results-dropdown__item-title">
                      {result.title}
                    </div>
                    <div className="search-results-dropdown__item-description">
                      {result.description}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Header Search End */}

          {/* Mobile Menu Start */}
          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => {
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }}>Home</Link></li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => {
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }}>About Us</Link></li>
              <li><Link to="/service" className={location.pathname === '/service' ? 'active' : ''} onClick={() => {
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }}>Service</Link></li>
              <li><Link to="/our-jobs" className={location.pathname === '/our-jobs' ? 'active' : ''} onClick={() => {
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }}>Our Jobs</Link></li>
              <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''} onClick={() => {
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }}>Team</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => {
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }}>Contact</Link></li>
            </ul>
          </div>
          {/* Mobile Menu End */}

          {/* Get a Quote Button Start */}
          <div className="mobile-quote-btn">
            <button 
              onClick={() => {
                setShowQuoteModal(true);
                // Close the offcanvas
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }} 
              className="btn btn-primary w-100"
            >
              Get a Quote
            </button>
          </div>
          {/* Get a Quote Button End */}
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <>
          <div className="modal fade show d-block quote-modal" tabIndex="-1" role="dialog">
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
          <div className="modal-backdrop fade show quote-modal-backdrop" onClick={() => setShowQuoteModal(false)}></div>
        </>
      )}
    </>
  );
};

export default Header;
