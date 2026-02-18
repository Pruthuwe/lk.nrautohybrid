import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const ShopGrid = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      {/* Page Banner Section Start */}
      <div className="section page-banner-section" style={{backgroundImage: 'url(/assets/images/page-banner-bg.webp)'}}>
        <div className="container">
          {/* Page Banner Wrapper Start */}
          <div className="page-banner-wrapper">

            {/* Page Banner Content Start */}
            <div className="page-banner-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h5 className="sub-title">Shop</h5>
                <h2 className="main-title">Our <br /> Product</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Shop</li>
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

      {/* Shop Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Shop Wrapper Start */}
          <div className="shop-wrapper">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="200">
                  <div className="product-image">
                    <span className="lable">25%</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-1.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">17 inch Rim 8 Lug</Link></h3>
                    <div className="price">
                      <span className="sale-price">$215</span>
                      <span className="regular-price">$350</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="400">
                  <div className="product-image">
                    <span className="lable new">New</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-2.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">Bilano V29 Engine</Link></h3>
                    <div className="price">
                      <span className="sale-price">$3550</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="600">
                  <div className="product-image">
                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-3.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">Turbo Turbocharger</Link></h3>
                    <div className="price">
                      <span className="regular-price">$235</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="200">
                  <div className="product-image">
                    <span className="lable">25%</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-4.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">BR-TX805 Disc Brake</Link></h3>
                    <div className="price">
                      <span className="sale-price">$125</span>
                      <span className="regular-price">$210</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="400">
                  <div className="product-image">
                    <span className="lable">35%</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-5.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">Stereo Audio System</Link></h3>
                    <div className="price">
                      <span className="sale-price">$180</span>
                      <span className="regular-price">$270</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="600">
                  <div className="product-image">
                    <span className="lable new">New</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-6.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">Stylish Steering</Link></h3>
                    <div className="price">
                      <span className="sale-price">$230</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="200">
                  <div className="product-image">
                    <span className="lable new">New</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-7.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">Air Intake Kit</Link></h3>
                    <div className="price">
                      <span className="sale-price">$420</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="400">
                  <div className="product-image">
                    <span className="lable">55%</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-8.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">Rearview Mirror</Link></h3>
                    <div className="price">
                      <span className="sale-price">$75</span>
                      <span className="regular-price">$80</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Single Product Start */}
                <div className="single-product" data-aos="fade-up" data-aos-delay="600">
                  <div className="product-image">
                    <span className="lable">25%</span>

                    <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-9.webp" alt="Product" /></Link>

                    <ul className="product-action">
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="fas fa-eye"></i></button></li>
                      <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="name"><Link to="/product-details-right-sidebar">Sulex Multipayer </Link></h3>
                    <div className="price">
                      <span className="sale-price">$135</span>
                      <span className="regular-price">$245</span>
                    </div>
                  </div>
                </div>
                {/* Single Product End */}
              </div>
            </div>
          </div>
          {/* Shop Wrapper End */}

          {/* Page Pagination Start */}
          <div className="page-pagination">
            <ul className="pagination justify-content-center">
              <li><Link to="#"><i className="fas fa-angle-left"></i></Link></li>
              <li><Link className="active" to="#">1</Link></li>
              <li><Link to="#">2</Link></li>
              <li><Link to="#">3</Link></li>
              <li><Link to="#">4</Link></li>
              <li>...</li>
              <li><Link to="#">15</Link></li>
              <li><Link to="#"><i className="fas fa-angle-right"></i></Link></li>
            </ul>
          </div>
          {/* Page Pagination End */}

        </div>
      </div>
      {/* Shop Section End */}

      <Footer />

      {/* Back To Start */}
      <Link to="#" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </Link>
      {/* Back To End */}

      {/* Quick View */}
      <div className="modal fade" id="quickview">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            {/* Modal Body  */}
            <div className="modal-body">

              <div className="row gx-lg-0">
                <div className="col-md-5">
                  {/* Product Quick View Image Start */}
                  <div className="product-quickview-image product-quickview-active">
                    <span className="lable">25%</span>

                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="/assets/images/shop/product-details-01.jpg" alt="Product Details" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/shop/product-details-02.jpg" alt="Product Details" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/shop/product-details-03.jpg" alt="Product Details" />
                        </div>
                      </div>
                      <div className="swiper-button-prev"><i className="fas fa-chevron-left"></i></div>
                      <div className="swiper-button-next"><i className="fas fa-chevron-right"></i></div>
                    </div>

                  </div>
                  {/* Product Quick View Image End */}
                </div>
                <div className="col-md-7">
                  {/* Product Quick View Content Start */}
                  <div className="product-quickview-content">
                    <h3 className="title">17 inch Rim 8 Lug</h3>

                    <div className="price-rating">
                      <div className="price">
                        <span className="sale-price">$215</span>
                        <span className="regular-price">$350</span>
                      </div>
                      <div className="rating">
                        <div className="rating-star">
                          <div className="star" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    </div>

                    <p>Car servicing rationally consequences extremely painful is the there anyone who loves or pursues take a trivial undertakes chooses pleasure rationally encounter </p>

                    <div className="product-label">
                      <div className="single-label">
                        <p>Stock: <span>Instock</span></p>
                      </div>
                      <div className="single-label">
                        <p>SKU: <span>3FRF54V7</span></p>
                      </div>
                    </div>

                    <div className="product-quantity-action">
                      <div className="product-quantity d-inline-flex">
                        <button type="button" className="sub">-</button>
                        <input type="text" defaultValue="1" />
                        <button type="button" className="add">+</button>
                      </div>
                      <ul className="product-action">
                        <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button></li>
                        <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button></li>
                        <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to compare"><i className="fas fa-random"></i></button></li>
                      </ul>
                    </div>

                    <div className="product-categories-tags">
                      <div className="product-categories">
                        <span className="label">Categories:</span>
                        <ul>
                          <li><Link to="#">Autoparts</Link></li>
                          <li><Link to="#">Repari</Link></li>
                          <li><Link to="#">Servicing</Link></li>
                        </ul>
                      </div>
                      <div className="product-tags">
                        <span className="label">tags:</span>
                        <ul>
                          <li><Link to="#">Auto Servicing</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Product Quick View Content End */}
                </div>
              </div>
            </div>
            {/* Modal Body End */}

          </div>
        </div>
      </div>
      {/* Quick View */}
    </>
  );
};

export default ShopGrid;