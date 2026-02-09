import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Wishlist = () => {
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
                <h5 className="sub-title">Wishlist</h5>
                <h2 className="main-title">Shopping <br /> wishlist</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Wishlist</li>
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
            <div className="cart-table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="Product-thumb">Image</th>
                    <th className="Product-info">Product Information</th>
                    <th className="Product-quantity">Quantity</th>
                    <th className="Product-total-price">Total Price</th>
                    <th className="Product-add-cart">Add to Cart</th>
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
                        <span className="old-price">$35.90</span>
                        <span className="sale-price">$28.72</span>
                        <span className="discount-percentage">Save 20%</span>
                      </div>
                      <div className="product-size-color">
                        <p>Size <span>S</span></p>
                        <p>Color <span>White</span></p>
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
                    <td className="Product-add-cart">
                      <a href="#" className="btn btn-custom-01">Add to Cart</a>
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
                        <p>Size <span>S</span></p>
                        <p>Color <span>White</span></p>
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
                    <td className="Product-add-cart">
                      <a href="#" className="btn btn-custom-01">Add to Cart</a>
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
                        <p>Size <span>S</span></p>
                        <p>Color <span>White</span></p>
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
                    <td className="Product-add-cart">
                      <a href="#" className="btn btn-custom-01">Add to Cart</a>
                    </td>
                    <td className="Product-action">
                      <button className="remove"><i className="fa fa-trash-o"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Cart Wrapper End */}

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

export default Wishlist;