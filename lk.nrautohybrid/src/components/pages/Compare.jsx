import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Compare = () => {
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
                <h5 className="sub-title">Compare</h5>
                <h2 className="main-title">Compare</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Compare</li>
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

      {/* Compare Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Compare Wrapper Start */}
          <div className="compare-wrapper table-responsive">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>
                    <a href="#">Remove all products</a>
                  </th>
                  <td>
                    <div className="compare-product">
                      <div className="pack-product-container">
                        <div className="thumb-mask">
                          <Link to="/product-details-right-sidebar">
                            <img src="/assets/images/shop/shop-4.webp" alt="" />
                          </Link>
                        </div>
                        <div className="desc-box">
                          <Link className="product-name" to="/product-details-right-sidebar">New Balance Fresh Foam Kaymin</Link>
                          <div className="product-reviews">
                            <div className="review-star">
                              <div className="star" style={{width: "80%"}}></div>
                            </div>
                          </div>
                          <div className="product-prices">
                            <span className="old-price">$35.90</span>
                            <span className="sale-price">$28.72</span>
                            <span className="discount-percentage">Save 20%</span>
                          </div>

                          <div className="product-cart">
                            <button className="btn btn-custom-01">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                      <button className="compare-remove">Remove</button>
                    </div>
                  </td>
                  <td>
                    <div className="compare-product">
                      <div className="pack-product-container">
                        <div className="thumb-mask">
                          <Link to="/product-details-right-sidebar">
                            <img src="/assets/images/shop/shop-5.webp" alt="" />
                          </Link>
                        </div>
                        <div className="desc-box">
                          <Link className="product-name" to="/product-details-right-sidebar">Trans-Weight Hooded Wind and Water...</Link>
                          <div className="product-reviews">
                            <div className="review-star">
                              <div className="star" style={{width: "80%"}}></div>
                            </div>
                          </div>
                          <div className="product-prices">
                            <span className="sale-price">$10.00</span>
                          </div>

                          <div className="product-cart">
                            <button className="btn btn-custom-01">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                      <button className="compare-remove">Remove</button>
                    </div>
                  </td>
                  <td>
                    <div className="compare-product">
                      <div className="pack-product-container">
                        <div className="thumb-mask">
                          <Link to="/product-details-right-sidebar">
                            <img src="/assets/images/shop/shop-6.webp" alt="" />
                          </Link>
                        </div>
                        <div className="desc-box">
                          <Link className="product-name" to="/product-details-right-sidebar">Originals Kaval Windbreaker Winter Jacket</Link>
                          <div className="product-reviews">
                            <div className="review-star">
                              <div className="star" style={{width: "80%"}}></div>
                            </div>
                          </div>
                          <div className="product-prices">
                            <span className="sale-price">$19.72</span>
                          </div>

                          <div className="product-cart">
                            <button className="btn btn-custom-01">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                      <button className="compare-remove">Remove</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Compositions</th>
                  <td>Wool</td>
                  <td>Elastane</td>
                  <td>Polyester</td>
                </tr>
                <tr>
                  <th>Paper Type</th>
                  <td>Doted</td>
                  <td>Ruled</td>
                  <td>Plain</td>
                </tr>
                <tr>
                  <th>Color</th>
                  <td>Black</td>
                  <td>White</td>
                  <td>Black</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>M</td>
                  <td>XL</td>
                  <td>L</td>
                </tr>
                <tr>
                  <th>Frame Size</th>
                  <td>80x120cm</td>
                  <td>40x60cm</td>
                  <td>40x60cm</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Compare Wrapper End */}

        </div>
      </div>
      {/* Compare Section End */}

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/*Back To End*/}

    </div>
  );
};

export default Compare;