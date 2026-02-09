import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Cart = () => {
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
                <h5 className="sub-title">Cart</h5>
                <h2 className="main-title">Shopping <br /> Cart</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Cart</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner-4.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Cart Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Cart Wrapper Start */}
          <div className="cart-wrapper">
            {/* Cart Table Start */}
            <div className="cart-table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="Product-thumb">Image</th>
                    <th className="Product-info">Product Information</th>
                    <th className="Product-quantity">Quantity</th>
                    <th className="Product-total-price">Total Price</th>
                    <th className="Product-action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="Product-thumb">
                      <img src="/assets/images/mini-cart/cart-1.webp" alt="Cart" />
                    </td>
                    <td className="Product-info">
                      <h6 className="name"><Link to="/product-details-right-sidebar">Originals Kaval Windbreaker Winter Jacket</Link></h6>
                      <div className="product-prices">
                        <span className="regular-price">$35.90</span>
                        <span className="sale-price">$28.72</span>
                        <span className="discount-percentage">Save 20%</span>
                      </div>
                      <div className="product-size-color">
                        <p>Size: <span>S</span></p>
                        <p>Color: <span>White</span></p>
                      </div>
                    </td>
                    <td className="quantity">
                      <div className="product-quantity d-inline-flex">
                        <button type="button" className="sub">-</button>
                        <input type="text" defaultValue="1" />
                        <button type="button" className="add">+</button>
                      </div>
                    </td>
                    <td className="Product-total-price">
                      <span className="price">$28.72</span>
                    </td>
                    <td className="Product-action">
                      <button className="remove"><i className="fa fa-trash-o"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="Product-thumb">
                      <img src="/assets/images/mini-cart/cart-2.webp" alt="cart" />
                    </td>
                    <td className="Product-info">
                      <h6 className="name"><Link to="/product-details-right-sidebar">Originals Kaval Windbreaker Winter Jacket</Link></h6>
                      <div className="product-prices">
                        <span className="sale-price">$35.72</span>
                      </div>
                      <div className="product-size-color">
                        <p>Size: <span>S</span></p>
                        <p>Color: <span>White</span></p>
                      </div>
                    </td>
                    <td className="quantity">
                      <div className="product-quantity d-inline-flex">
                        <button type="button" className="sub">-</button>
                        <input type="text" defaultValue="1" />
                        <button type="button" className="add">+</button>
                      </div>
                    </td>
                    <td className="Product-total-price">
                      <span className="price">$28.72</span>
                    </td>
                    <td className="Product-action">
                      <button className="remove"><i className="fa fa-trash-o"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="Product-thumb">
                      <img src="/assets/images/mini-cart/cart-3.webp" alt="Cart" />
                    </td>
                    <td className="Product-info">
                      <h6 className="name"><Link to="/product-details-right-sidebar">Originals Kaval Windbreaker Winter Jacket</Link></h6>
                      <div className="product-prices">
                        <span className="sale-price">$28.72</span>
                      </div>
                      <div className="product-size-color">
                        <p>Size: <span>S</span></p>
                        <p>Color: <span>White</span></p>
                      </div>
                    </td>
                    <td className="quantity">
                      <div className="product-quantity d-inline-flex">
                        <button type="button" className="sub">-</button>
                        <input type="text" defaultValue="1" />
                        <button type="button" className="add">+</button>
                      </div>
                    </td>
                    <td className="Product-total-price">
                      <span className="price">$28.72</span>
                    </td>
                    <td className="Product-action">
                      <button className="remove"><i className="fa fa-trash-o"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Cart Table End */}

            {/* Cart btn Start */}
            <div className="cart-btn d-flex flex-wrap justify-content-between">
              <div className="left-btn">
                <Link to="/shop-grid-left-sidebar" className="btn btn-dark btn-hover-primary">Continue Shopping</Link>
              </div>
              <div className="right-btn">
                <a href="#" className="btn btn-outline-dark">Clear Cart</a>
                <a href="#" className="btn btn-outline-dark">Update Cart</a>
              </div>
            </div>
            {/* Cart btn Start */}
          </div>
          {/* Cart Wrapper End */}

          <div className="row">
            <div className="col-lg-4">
              {/* Cart Shipping Start */}
              <div className="cart-shipping">
                <div className="cart-title">
                  <h4 className="title">Calculate Shipping</h4>
                  <p>Estimate your shipping fee *</p>
                </div>
                <div className="cart-form">
                  <p>Calculate shipping</p>
                  <form action="#">
                    <div className="single-select2">
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
                    <div className="single-select2">
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
                    <div className="single-form">
                      <input className="form-control" type="text" placeholder="Postcode/ziip" />
                    </div>
                    <div className="single-form">
                      <button className="btn btn-dark btn-hover-primary">Update totals</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Cart Shipping End */}
            </div>
            <div className="col-lg-4">
              {/* Cart Shipping Start */}
              <div className="cart-shipping">
                <div className="cart-title">
                  <h4 className="title">Coupon Code</h4>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="cart-form">
                  <form action="#">
                    <div className="single-form">
                      <input className="form-control" type="text" placeholder="Enter your coupon code.." />
                    </div>
                    <div className="single-form">
                      <button className="btn btn-dark btn-hover-primary">Apply Coupon</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Cart Shipping End */}
            </div>
            <div className="col-lg-4">
              {/* Cart Totals Start */}
              <div className="cart-totals">
                <div className="cart-title">
                  <h4 className="title">Cart totals</h4>
                </div>
                <div className="cart-total-table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <p className="value">Subtotal</p>
                        </td>
                        <td>
                          <p className="price">£600.00</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="value">Shipping</p>
                        </td>
                        <td>
                          <ul className="shipping-list">
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio1" defaultChecked />
                              <label htmlFor="radio1"><span></span> Flat Rate</label>
                            </li>
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio2" />
                              <label htmlFor="radio2"><span></span> Free Shipping</label>
                            </li>
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio3" />
                              <label htmlFor="radio3"><span></span> Local Pickup</label>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="value">Total</p>
                        </td>
                        <td>
                          <p className="price">£600.00</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cart-total-btn mt-20">
                  <Link to="/checkout" className="btn btn-dark btn-hover-primary btn-block">Proceed To Checkout</Link>
                </div>
              </div>
              {/* Cart Totals End */}
            </div>
          </div>

        </div>
      </div>
      {/* Cart Section End */}

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default Cart;