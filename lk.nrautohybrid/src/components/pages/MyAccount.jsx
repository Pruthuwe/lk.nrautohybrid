import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const MyAccount = () => {
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
                <h5 className="sub-title">My Account</h5>
                <h2 className="main-title">My Account</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">My Account</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-2.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* My Account Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* My Account Wrapper Start */}
          <div className="my-account-wrapper">

            <div className="row">
              <div className="col-xl-3 col-md-4">
                {/* My Account Menu Start */}
                <div className="my-account-menu">
                  <ul className="nav account-menu-list flex-column">
                    <li>
                      <a className="active" data-bs-toggle="pill" href="#pills-dashboard"><i className="fa fa-tachometer"></i> Dashboard</a>
                    </li>
                    <li>
                      <a data-bs-toggle="pill" href="#pills-order"><i className="fa fa-shopping-cart"></i> Order</a>
                    </li>
                    <li>
                      <a data-bs-toggle="pill" href="#pills-download"><i className="fa fa-cloud-download"></i> Download</a>
                    </li>
                    <li>
                      <a data-bs-toggle="pill" href="#pills-payment"><i className="fa fa-credit-card"></i> Payment Method</a>
                    </li>
                    <li>
                      <a data-bs-toggle="pill" href="#pills-address"><i className="fa fa-map-marker"></i> Address</a>
                    </li>
                    <li>
                      <a data-bs-toggle="pill" href="#pills-account"><i className="fa fa-user"></i> Account Details</a>
                    </li>
                    <li>
                      <Link to="/login"><i className="fa fa-sign-out"></i> Logout</Link>
                    </li>
                  </ul>
                </div>
                {/* My Account Menu End */}
              </div>
              <div className="col-xl-9 col-md-8">
                {/* Tab content start */}
                <div className="tab-content my-account-tab">

                  <div className="tab-pane fade show active" id="pills-dashboard">
                    {/* My Account Dashboard start */}
                    <div className="my-account-dashboard account-wrapper">
                      <h4 className="account-title">Dashboard</h4>
                      <div className="welcome-dashboard">
                        <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong> <Link to="/login">Logout</Link> )</p>
                      </div>
                      <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                    </div>
                    {/* My Account Dashboard End */}
                  </div>

                  <div className="tab-pane fade" id="pills-order">
                    {/* My Account Order Start */}
                    <div className="my-account-order account-wrapper">
                      <h4 className="account-title">Orders</h4>
                      <div className="account-table text-center table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="no">No</th>
                              <th className="name">Name</th>
                              <th className="date">Date</th>
                              <th className="status">Status</th>
                              <th className="total">Total</th>
                              <th className="action">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Mostarizing Oil</td>
                              <td>Aug 22, 2020</td>
                              <td>Pending</td>
                              <td>$100</td>
                              <td><a href="#">View</a></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Katopeno Altuni</td>
                              <td>July 22, 2020</td>
                              <td>Approved</td>
                              <td>$45</td>
                              <td><a href="#">View</a></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Murikhete Paris</td>
                              <td>June 22, 2020</td>
                              <td>On Hold</td>
                              <td>$99</td>
                              <td><a href="#">View</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* My Account Order End */}
                  </div>

                  <div className="tab-pane fade" id="pills-download">
                    {/* My Account Download Start */}
                    <div className="my-account-download account-wrapper">
                      <h4 className="account-title">Download</h4>
                      <div className="account-table text-center mt-30 table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="name">Product</th>
                              <th className="date">Date</th>
                              <th className="status">Expire</th>
                              <th className="action">Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Mostarizing Oil</td>
                              <td>Aug 22, 2020</td>
                              <td>Yes</td>
                              <td><a href="#">Download File</a></td>
                            </tr>
                            <tr>
                              <td>Katopeno Altuni</td>
                              <td>July 22, 2020</td>
                              <td>Never</td>
                              <td><a href="#">Download File</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* My Account Download End */}
                  </div>

                  <div className="tab-pane fade" id="pills-payment">
                    {/* My Account payment Start */}
                    <div className="my-account-payment account-wrapper">
                      <h4 className="account-title">Payment Method</h4>
                      <p>You Can't Saved Your Payment Method yet.</p>
                    </div>
                    {/* My Account payment End */}
                  </div>

                  <div className="tab-pane fade" id="pills-address">
                    {/* My Account Address End */}
                    <div className="my-account-address">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="account-wrapper">
                            <h4 className="account-title">Billing address</h4>
                            <div className="account-address">
                              <h6 className="name">Alex Tuntuni</h6>
                              <p>1355 Market St, Suite 900 <br /> San Francisco, CA 94103</p>
                              <p>Mobile: (123) 456-7890</p>
                              <a className="btn btn-primary btn-hover-dark" href="#"><i className="fa fa-edit"></i> Edit Address</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="account-wrapper">
                            <h4 className="account-title">Shipping address</h4>
                            <div className="account-address">
                              <h6 className="name">Alex Tuntuni</h6>
                              <p>1355 Market St, Suite 900 <br /> San Francisco, CA 94103</p>
                              <p>Mobile: (123) 456-7890</p>
                              <a className="btn btn-primary btn-hover-dark" href="#"><i className="fa fa-edit"></i> Edit Address</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* My Account Address End */}
                  </div>

                  <div className="tab-pane fade" id="pills-account">
                    {/* My Account Details End */}
                    <div className="my-account-details account-wrapper">
                      <h4 className="account-title">Account Details</h4>

                      <div className="account-details">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="single-form">
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-form">
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single-form">
                              <label className="form-label">Display Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single-form">
                              <label className="form-label">Email address</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single-form">
                              <h5 className="title">Password change</h5>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single-form">
                              <label className="form-label">Current Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-form">
                              <label className="form-label">New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-form">
                              <label className="form-label">Confirm Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-form">
                              <button className="btn btn-primary btn-hover-dark">Save Change</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* My Account Details End */}
                  </div>
                </div>
                {/* Tab content End */}
              </div>
            </div>

          </div>
          {/* My Account Wrapper End */}

        </div>
      </div>
      {/* My Account Section End */}

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default MyAccount;