import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Checkout = () => {
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
                <h5 className="sub-title">Checkout</h5>
                <h2 className="main-title">Shopping <br /> Checkout</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Checkout</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-3.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Checkout Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Checkout Wrapper Start */}
          <div className="checkout-wrapper">

            {/* Checkout Info Start */}
            <div className="checkout-info">
              <p className="info-header error"><i className="fa fa-exclamation-circle"></i> <strong>Error:</strong> Username is required.</p>
            </div>
            {/* Checkout Info End */}

            {/* Checkout Info Start */}
            <div className="checkout-info">
              <p className="info-header"> <i className="fa fa-exclamation-circle"></i> Returning customer? <a data-bs-toggle="collapse" href="#login">Click here to login</a></p>

              <div className="collapse" id="login">
                <div className="card-body">
                  <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                  <form action="#">

                    <div className="row">
                      <div className="col-lg-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Username or email *</label>
                          <input type="email" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-lg-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Password</label>
                          <input type="password" />
                        </div>
                        {/* Single Form End */}
                      </div>
                    </div>

                    <div className="single-form d-flex align-items-center">
                      <button className="btn btn-custom-01">Login</button>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Remember Me</label>
                      </div>
                    </div>
                    <div className="forget">
                      <a href="#">Lost Your Password</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Checkout Info End */}

            {/* Checkout Info Start */}
            <div className="checkout-info">
              <p className="info-header"> <i className="fa fa-exclamation-circle"></i> Have a coupon? <a data-bs-toggle="collapse" href="#coupon">Click here to enter your code</a></p>

              <div className="collapse" id="coupon">
                <div className="card-body">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <input type="email" placeholder="Coupon code" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-lg-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <button className="btn btn-primary">Login</button>
                        </div>
                        {/* Single Form End */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Checkout Info End */}

            <form action="#">
              <div className="row">
                <div className="col-lg-7">
                  {/* Checkout Form Start */}
                  <div className="checkout-form">
                    <div className="checkout-title">
                      <h4 className="title">Billing details</h4>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">First name *</label>
                          <input type="text" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Last name *</label>
                          <input type="text" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Company name</label>
                          <input type="text" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-select2">
                          <label className="form-label">Country *</label>

                          <div className="form-select2">
                            <select className="select2">
                              <option value="0">Select a country…</option>
                              <option value="1">Bangladesh</option>
                              <option value="2">Canada</option>
                              <option value="3">Colombia</option>
                              <option value="4">Indonesia</option>
                              <option value="5">Italy</option>
                              <option value="6">Pakistan</option>
                              <option value="7">Turkey</option>
                            </select>
                          </div>
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Street address *</label>
                          <input type="text" placeholder="House number and street name" />
                          <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Town / City *</label>
                          <input type="text" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-select2">
                          <label className="form-label">District *</label>

                          <div className="form-select2">
                            <select className="select2">
                              <option value="">Select an option…</option>
                              <option value="BAG">Bagerhat</option>
                              <option value="BAN">Bandarban</option>
                              <option value="BAR">Barguna</option>
                              <option value="BARI">Barisal</option>
                              <option value="BHO">Bhola</option>
                              <option value="BOG">Bogra</option>
                              <option value="BRA">Brahmanbaria</option>
                              <option value="CHA">Chandpur</option>
                              <option value="CHI">Chittagong</option>
                              <option value="CHU">Chuadanga</option>
                              <option value="COM">Comilla</option>
                              <option value="COX">Cox's Bazar</option>
                              <option value="DHA">Dhaka</option>
                              <option value="DIN">Dinajpur</option>
                              <option value="FAR">Faridpur </option>
                              <option value="FEN">Feni</option>
                              <option value="GAI">Gaibandha</option>
                              <option value="GAZI">Gazipur</option>
                              <option value="GOP">Gopalganj</option>
                              <option value="HAB">Habiganj</option>
                              <option value="JAM">Jamalpur</option>
                              <option value="JES">Jessore</option>
                              <option value="JHA">Jhalokati</option>
                              <option value="JHE">Jhenaidah</option>
                              <option value="JOY">Joypurhat</option>
                              <option value="KHA">Khagrachhari</option>
                              <option value="KHU">Khulna</option>
                              <option value="KIS">Kishoreganj</option>
                              <option value="KUR">Kurigram</option>
                              <option value="KUS">Kushtia</option>
                              <option value="LAK">Lakshmipur</option>
                              <option value="LAL">Lalmonirhat</option>
                              <option value="MAD">Madaripur</option>
                              <option value="MAG">Magura</option>
                              <option value="MAN">Manikganj </option>
                              <option value="MEH">Meherpur</option>
                              <option value="MOU">Moulvibazar</option>
                              <option value="MUN">Munshiganj</option>
                              <option value="MYM">Mymensingh</option>
                              <option value="NAO">Naogaon</option>
                              <option value="NAR">Narail</option>
                              <option value="NARG">Narayanganj</option>
                              <option value="NARD">Narsingdi</option>
                              <option value="NAT">Natore</option>
                              <option value="NAW">Nawabganj</option>
                              <option value="NET">Netrakona</option>
                              <option value="NIL">Nilphamari</option>
                              <option value="NOA">Noakhali</option>
                              <option value="PAB">Pabna</option>
                              <option value="PAN">Panchagarh</option>
                              <option value="PAT">Patuakhali</option>
                              <option value="PIR">Pirojpur</option>
                              <option value="RAJB">Rajbari</option>
                              <option value="RAJ">Rajshahi</option>
                              <option value="RAN">Rangamati</option>
                              <option value="RANP">Rangpur</option>
                              <option value="SAT">Satkhira</option>
                              <option value="SHA">Shariatpur</option>
                              <option value="SHE">Sherpur</option>
                              <option value="SIR">Sirajganj</option>
                              <option value="SUN">Sunamganj</option>
                              <option value="SYL">Sylhet</option>
                              <option value="TAN">Tangail</option>
                              <option value="THA">Thakurgaon</option>
                            </select>
                          </div>
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Postcode / ZIP *</label>
                          <input type="text" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Phone *</label>
                          <input type="text" />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-sm-12">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <label className="form-label">Email address *</label>
                          <input type="email" />
                        </div>
                        {/* Single Form End */}
                      </div>
                    </div>

                    <div className="form-check checkout-checkbox">
                      <input type="checkbox" className="form-check-input" id="account" />
                      <label className="form-check-label" htmlFor="account"> Create an account?</label>
                    </div>

                    <div className="checkout-account">
                      <div className="single-form">
                        <label className="form-label">Create account Password *</label>
                        <input type="password" placeholder="Password" className="form-control" />
                      </div>
                    </div>

                    <div className="form-check checkout-checkbox">
                      <input type="checkbox" className="form-check-input" id="shipping" />
                      <label className="form-check-label" htmlFor="shipping">Ship to a different address?</label>
                    </div>

                    <div className="checkout-shipping">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="single-form">
                            <label className="form-label">First name *</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="single-form">
                            <label className="form-label">Last name *</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <label className="form-label">Company name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-select2">
                            <label className="form-label">Country *</label>

                            <div className="form-select2">
                              <select className="select2">
                                <option value="0">Select a country…</option>
                                <option value="1">Bangladesh</option>
                                <option value="2">Canada</option>
                                <option value="3">Colombia</option>
                                <option value="4">Indonesia</option>
                                <option value="5">Italy</option>
                                <option value="6">Pakistan</option>
                                <option value="7">Turkey</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <label className="form-label">Street address *</label>
                            <input type="text" className="form-control" placeholder="House number and street name" />
                            <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <label className="form-label">Town / City *</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-select2">
                            <label className="form-label">District *</label>

                            <div className="form-select2">
                              <select className="select2">
                                <option value="">Select an option…</option>
                                <option value="BAG">Bagerhat</option>
                                <option value="BAN">Bandarban</option>
                                <option value="BAR">Barguna</option>
                                <option value="BARI">Barisal</option>
                                <option value="BHO">Bhola</option>
                                <option value="BOG">Bogra</option>
                                <option value="BRA">Brahmanbaria</option>
                                <option value="CHA">Chandpur</option>
                                <option value="CHI">Chittagong</option>
                                <option value="CHU">Chuadanga</option>
                                <option value="COM">Comilla</option>
                                <option value="COX">Cox's Bazar</option>
                                <option value="DHA">Dhaka</option>
                                <option value="DIN">Dinajpur</option>
                                <option value="FAR">Faridpur </option>
                                <option value="FEN">Feni</option>
                                <option value="GAI">Gaibandha</option>
                                <option value="GAZI">Gazipur</option>
                                <option value="GOP">Gopalganj</option>
                                <option value="HAB">Habiganj</option>
                                <option value="JAM">Jamalpur</option>
                                <option value="JES">Jessore</option>
                                <option value="JHA">Jhalokati</option>
                                <option value="JHE">Jhenaidah</option>
                                <option value="JOY">Joypurhat</option>
                                <option value="KHA">Khagrachhari</option>
                                <option value="KHU">Khulna</option>
                                <option value="KIS">Kishoreganj</option>
                                <option value="KUR">Kurigram</option>
                                <option value="KUS">Kushtia</option>
                                <option value="LAK">Lakshmipur</option>
                                <option value="LAL">Lalmonirhat</option>
                                <option value="MAD">Madaripur</option>
                                <option value="MAG">Magura</option>
                                <option value="MAN">Manikganj </option>
                                <option value="MEH">Meherpur</option>
                                <option value="MOU">Moulvibazar</option>
                                <option value="MUN">Munshiganj</option>
                                <option value="MYM">Mymensingh</option>
                                <option value="NAO">Naogaon</option>
                                <option value="NAR">Narail</option>
                                <option value="NARG">Narayanganj</option>
                                <option value="NARD">Narsingdi</option>
                                <option value="NAT">Natore</option>
                                <option value="NAW">Nawabganj</option>
                                <option value="NET">Netrakona</option>
                                <option value="NIL">Nilphamari</option>
                                <option value="NOA">Noakhali</option>
                                <option value="PAB">Pabna</option>
                                <option value="PAN">Panchagarh</option>
                                <option value="PAT">Patuakhali</option>
                                <option value="PIR">Pirojpur</option>
                                <option value="RAJB">Rajbari</option>
                                <option value="RAJ">Rajshahi</option>
                                <option value="RAN">Rangamati</option>
                                <option value="RANP">Rangpur</option>
                                <option value="SAT">Satkhira</option>
                                <option value="SHA">Shariatpur</option>
                                <option value="SHE">Sherpur</option>
                                <option value="SIR">Sirajganj</option>
                                <option value="SUN">Sunamganj</option>
                                <option value="SYL">Sylhet</option>
                                <option value="TAN">Tangail</option>
                                <option value="THA">Thakurgaon</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <label className="form-label">Postcode / ZIP *</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="single-form">
                      <label className="form-label">Order notes (optional)</label>
                      <textarea name="message" className="form-control" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                  </div>
                  {/* Checkout Form End */}
                </div>
                <div className="col-lg-5">
                  {/* Checkout Sidebar Start */}
                  <div className="checkout-sidebar">
                    <div className="checkout-sidebar-inner">
                      <div className="checkout-sidebar-content">
                        <div className="checkout-title">
                          <h4 className="title">Your order</h4>
                        </div>

                        <div className="checkout-product">
                          <ul className="checkout-product-list">
                            <li>
                              <span className="name">Originals Kaval Windbreaker Winter Jacket x 1</span>
                              <span className="price">$28.72</span>
                            </li>
                            <li>
                              <span className="name">Originals Kaval Windbreaker Winter Jacket x 1</span>
                              <span className="price">$35.72</span>
                            </li>
                            <li>
                              <span className="name">Originals Kaval Windbreaker Winter Jacket x 1</span>
                              <span className="price">$28.72</span>
                            </li>
                          </ul>
                        </div>

                        <div className="checkout-total">
                          <ul className="checkout-total-list">
                            <li>
                              <span className="name">Subtotal</span>
                              <span className="price">$93.16</span>
                            </li>
                            <li>
                              <span className="name">Shipping</span>
                              <span className="price">$10.00</span>
                            </li>
                            <li>
                              <span className="name">Total</span>
                              <span className="price">$103.16</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="checkout-sidebar-content">
                        <div className="checkout-payment">
                          <ul className="payment-list">
                            <li>
                              <div className="single-payment">
                                <div className="payment-radio radio">
                                  <input type="radio" name="radio" id="bank" defaultChecked />
                                  <label htmlFor="bank"><span></span> Direct bank transfer</label>

                                  <div className="payment-details">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-payment">
                                <div className="payment-radio radio">
                                  <input type="radio" name="radio" id="check" />
                                  <label htmlFor="check"><span></span> Check payments</label>

                                  <div className="payment-details">
                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-payment">
                                <div className="payment-radio radio">
                                  <input type="radio" name="radio" id="cash" />
                                  <label htmlFor="cash"><span></span> Cash on delivery</label>

                                  <div className="payment-details">
                                    <p>Pay with cash upon delivery.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-payment">
                                <div className="payment-radio radio">
                                  <input type="radio" name="radio" id="paypal" />
                                  <label htmlFor="paypal"><span></span> Paypal <img className="payment" src="/assets/images/payment-2.png" alt="" /> <a href="#">What is PayPal?</a></label>

                                  <div className="payment-details">
                                    <p>Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>

                          <div className="checkout-btn">
                            <a className="btn btn-primary btn-hover-dark d-block" href="#">Place Order</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Checkout Sidebar End */}
                </div>
              </div>
            </form>

          </div>
          {/* Checkout Wrapper End */}

        </div>
      </div>
      {/* Checkout Section End */}

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default Checkout;