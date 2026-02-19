import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Appointment from "../appointment/Appointment";
import "./Header.css";

const MODAL_CLOSE_ANIMATION_MS = 320;

const Header = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentModalClosing, setAppointmentModalClosing] = useState(false);

  const closeAppointmentModal = () => {
    setShowAppointmentModal(false);
    setAppointmentModalClosing(true);
  };

  useEffect(() => {
    if (!appointmentModalClosing) return;
    const id = setTimeout(() => setAppointmentModalClosing(false), MODAL_CLOSE_ANIMATION_MS);
    return () => clearTimeout(id);
  }, [appointmentModalClosing]);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <p>Call us: <a href="tel:+94772166306">+94 77 216 6306</a></p>
              </div>

                  {/* <span className="mb-0">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Thalawathugoda, Sri Lanka.
                  </span> */}

                <span className="mb-0 px-3 py-1 rounded">
                  <i className="far fa-clock me-2"></i>
                  Monday - Saturday: 8:30 am - 6:30 pm
                </span>
              </div>

              <div className="header-top-social d-flex align-items-center gap-3">
                <a href="https://web.facebook.com/greenauto.lk" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/greenauto.lk?igsh=cDR4ZGducHk1Nmhi" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://wa.me/94772166306" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.tiktok.com/@greensroqj7?lang=en-GB&is_from_webapp=1&sender_device=mobile&sender_web_id=7607352033860322836" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
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

                <button onClick={() => setShowAppointmentModal(true)} className="btn btn-primary">
                  <i className="far fa-calendar-alt me-2"></i>
                  Book Appointment
                </button>

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
            <a href="https://web.facebook.com/greenauto.lk" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/greenauto.lk?igsh=cDR4ZGducHk1Nmhi" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/94772166306" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.tiktok.com/@greensroqj7?lang=en-GB&is_from_webapp=1&sender_device=mobile&sender_web_id=7607352033860322836" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
          </div>
          {/* Header Social Links End */}

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

          {/* Book Appointment Button Start - same as CallToAction */}
          <div className="mobile-quote-btn">
            <button 
              onClick={() => {
                setShowAppointmentModal(true);
                const offcanvas = document.getElementById('offcanvasExample');
                const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
                if (bsOffcanvas) {
                  bsOffcanvas.hide();
                }
              }} 
              className="btn btn-primary w-100"
            >
              <i className="far fa-calendar-alt me-2"></i>
              Book Appointment
            </button>
          </div>
          {/* Book Appointment Button End */}
        </div>
      </div>

      {/* Appointment Modal - same structure as CallToAction for consistent position */}
      {(showAppointmentModal || appointmentModalClosing) && (
        <>
          <div className={`modal fade show d-block quote-modal${appointmentModalClosing ? ' modal--closing' : ''}`} tabIndex="-1" role="dialog" style={{ zIndex: 1050 }}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body p-4">
                  <Appointment onClose={closeAppointmentModal} />
                </div>
              </div>
            </div>
          </div>
          <div className={`modal-backdrop fade show quote-modal-backdrop${appointmentModalClosing ? ' modal-backdrop--closing' : ''}`} onClick={closeAppointmentModal} style={{ zIndex: 1040 }}></div>
        </>
      )}
    </>
  );
};

export default Header;
