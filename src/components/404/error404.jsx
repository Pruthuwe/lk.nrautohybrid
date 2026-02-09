import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Error404 = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="error-404-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="error-404-content">
                  <h1 className="display-1 text-primary mb-4">404</h1>
                  <h2 className="h3 mb-3">Oops! Page Not Found</h2>
                  <p className="lead mb-4">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                  </p>
                  <Link to="/" className="btn btn-primary btn-lg">
                    <i className="fas fa-home me-2"></i>
                    Go Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Error404;
