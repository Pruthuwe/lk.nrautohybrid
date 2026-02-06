import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const RegisterPage = () => {
  return (
    <>
      <Header />

      {/* Page Banner Section Start */}
      <div className="section page-banner-section" style={{backgroundImage: 'url(/assets/images/page-banner-bg.png)'}}>
        <div className="container">
          {/* Page Banner Wrapper Start */}
          <div className="page-banner-wrapper">

            {/* Page Banner Content Start */}
            <div className="page-banner-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Register</h5>
                <h2 className="main-title">Registration <br /> Form</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">Register</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-3.png" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Login & Register Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Register & Login Wrapper Start */}
          <div className="register-login-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-xl-5">
                {/* Register & Login Form Start */}
                <div className="register-login-form">
                  <h3 className="title">Registration <span>Now</span></h3>

                  <div className="form-wrapper">
                    <form action="#">
                      {/* Single Form Start */}
                      <div className="single-form">
                        <input type="text" placeholder="Name" />
                      </div>
                      {/* Single Form End */}
                      {/* Single Form Start */}
                      <div className="single-form">
                        <input type="email" placeholder="Email" />
                      </div>
                      {/* Single Form End */}
                      {/* Single Form Start */}
                      <div className="single-form">
                        <input type="password" placeholder="Password" />
                      </div>
                      {/* Single Form End */}
                      {/* Single Form Start */}
                      <div className="single-form">
                        <input type="password" placeholder="Confirm Password" />
                      </div>
                      {/* Single Form End */}
                      {/* Single Form Start */}
                      <div className="single-form">
                        <button className="btn btn-custom-01 w-100">Create an account</button>
                        <a className="btn btn-custom-02 w-100" href="#">Sign up with Google</a>
                      </div>
                      {/* Single Form End */}
                      <p>Already have an account? <a href="/login">Log in instead!</a></p>
                    </form>
                  </div>
                </div>
                {/* Register & Login Form End */}
              </div>
            </div>
          </div>
          {/* Register & Login Wrapper End */}

        </div>
      </div>
      {/* Login & Register Section End */}

      <Footer />

      {/* Back To Start */}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/* Back To End */}
    </>
  );
};

export default RegisterPage;
