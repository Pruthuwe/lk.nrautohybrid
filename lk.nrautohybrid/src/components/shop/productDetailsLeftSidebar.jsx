import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const ProductDetailsLeftSidebar = () => {
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
                <h2 className="main-title">Product Details</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/shop-grid">Shop</Link></li>
                <li className="breadcrumb-item active">Details</li>
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
            <div className="row flex-row-reverse">
              <div className="col-lg-8">
                {/* Product Details Start */}
                <div className="product-details">

                  <div className="row gx-lg-0">
                    <div className="col-md-5">
                      {/* Product Details Image Start */}
                      <div className="product-details-image product-details-active">
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
                          <div className="swiper-button-prev"><i className="icofont-rounded-left"></i></div>
                          <div className="swiper-button-next"><i className="icofont-rounded-right"></i></div>
                        </div>

                      </div>
                      {/* Product Details Image End */}
                    </div>
                    <div className="col-md-7">
                      {/* Product Details Content Start */}
                      <div className="product-details-content">
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
                            <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="icofont-shopping-cart"></i></button></li>
                            <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></button></li>
                            <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to compare"><i className="fa fa-random"></i></button></li>
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
                      {/* Product Details Content End */}
                    </div>
                  </div>

                  {/* Product Details Tabs Start */}
                  <div className="product-details-tabs">
                    <ul className="nav">
                      <li><button className="active" data-bs-toggle="tab" data-bs-target="#description">Description</button></li>
                      <li><button data-bs-toggle="tab" data-bs-target="#information">Information</button></li>
                      <li><button data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button></li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="description">
                        {/* Description Start */}
                        <div className="description">
                          <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because is pain, but because occasionally circumstances occur in which toil and pain can procure Car servicin rationally encounter consequences extremely painful. Nor again is the there anyone who loves or some of the pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues </p>
                          <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain </p>
                        </div>
                        {/* Description End */}
                      </div>
                      <div className="tab-pane fade" id="information">
                        {/* Information Start */}
                        <div className="information">
                          <table className="table">
                            <tbody>
                              <tr>
                                <th scope="row">Color</th>
                                <td>Black, Light Brown</td>
                              </tr>
                              <tr>
                                <th scope="row">Aliquid</th>
                                <td>similique, doloribus, Illum</td>
                              </tr>
                              <tr>
                                <th scope="row">Recusandae</th>
                                <td>officiis, ducimus, placeat</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Information End */}
                      </div>
                      <div className="tab-pane fade" id="reviews">
                        {/* Review Start */}
                        <div className="reviews">

                          <div className="reviews-comment">

                            <h4 className="reviews-title">02 Review</h4>

                            {/* Review Start */}
                            <div className="single-review">
                              <div className="review-author">
                                <img src="/assets/images/author/author-13.jpg" alt="author" />
                              </div>
                              <div className="review-content">
                                <h4 className="name">Alfred Rasel</h4>
                                <span className="date"><i className="fa fa-calendar"></i> 10 May, 2023</span>
                                <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequence that are extremely painful. </p>
                              </div>
                            </div>
                            {/* Review End */}

                            {/* Review Start */}
                            <div className="single-review">
                              <div className="review-author">
                                <img src="/assets/images/author/author-14.jpg" alt="author" />
                              </div>
                              <div className="review-content">
                                <h4 className="name">Alfred Rasel</h4>
                                <span className="date"><i className="fa fa-calendar"></i> 10 May, 2023</span>
                                <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequence that are extremely painful. </p>
                              </div>
                            </div>
                            {/* Review End */}

                          </div>

                          <div className="reviews-form">
                            <h4 className="reviews-title">Add a review</h4>

                            <div className="form-wrapper">
                              <form action="#">
                                <div className="row">
                                  <div className="col-md-6">
                                    {/* Single Review Start */}
                                    <div className="single-form">
                                      <input type="text" placeholder="Name" />
                                    </div>
                                    {/* Single Review End */}
                                  </div>
                                  <div className="col-md-6">
                                    {/* Single Review Start */}
                                    <div className="single-form">
                                      <input type="email" placeholder="Email" />
                                    </div>
                                    {/* Single Review End */}
                                  </div>
                                  <div className="col-md-12">
                                    {/* Single Form Start */}
                                    <div className="reviews-rating">
                                      <label>Rating:</label>
                                      <ul id="rating" className="rating">
                                        <li className="star" title='Poor' data-value='1'><i className="icofont-star"></i></li>
                                        <li className="star" title='Poor' data-value='2'><i className="icofont-star"></i></li>
                                        <li className="star" title='Poor' data-value='3'><i className="icofont-star"></i></li>
                                        <li className="star" title='Poor' data-value='4'><i className="icofont-star"></i></li>
                                        <li className="star" title='Poor' data-value='5'><i className="icofont-star"></i></li>
                                      </ul>
                                    </div>
                                    {/* Single Form End */}
                                  </div>
                                  <div className="col-md-12">
                                    {/* Single Review Start */}
                                    <div className="single-form">
                                      <textarea placeholder="Write Review here"></textarea>
                                    </div>
                                    {/* Single Review End */}
                                  </div>
                                  <div className="col-md-12">
                                    {/* Single Review Start */}
                                    <div className="single-form">
                                      <button className="btn btn-custom-01">Post Review</button>
                                    </div>
                                    {/* Single Review End */}
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>

                        </div>
                        {/* Review End */}
                      </div>
                    </div>
                  </div>
                  {/* Product Details Tabs End */}

                  {/* Related Product End */}
                  <div className="related-products">

                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="main-title">Related Products</h2>
                    </div>
                    {/* Section Title End */}

                    <div className="row">
                      <div className="col-sm-6">
                        {/* Single Product Start */}
                        <div className="single-product">
                          <div className="product-image">
                            <span className="lable">25%</span>

                            <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-4.webp" alt="Product" /></Link>

                            <ul className="product-action">
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="icofont-shopping-cart"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="icofont-eye"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></button></li>
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
                      <div className="col-sm-6">
                        {/* Single Product Start */}
                        <div className="single-product">
                          <div className="product-image">
                            <span className="lable">35%</span>

                            <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-5.webp" alt="Product" /></Link>

                            <ul className="product-action">
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="icofont-shopping-cart"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="icofont-eye"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></button></li>
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
                      <div className="col-sm-6">
                        {/* Single Product Start */}
                        <div className="single-product">
                          <div className="product-image">
                            <span className="lable new">New</span>

                            <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-6.webp" alt="Product" /></Link>

                            <ul className="product-action">
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="icofont-shopping-cart"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="icofont-eye"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></button></li>
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
                      <div className="col-sm-6">
                        {/* Single Product Start */}
                        <div className="single-product">
                          <div className="product-image">
                            <span className="lable new">New</span>

                            <Link to="/product-details-right-sidebar"><img src="/assets/images/shop/shop-7.webp" alt="Product" /></Link>

                            <ul className="product-action">
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="icofont-shopping-cart"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#quickview"><i className="icofont-eye"></i></button></li>
                              <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></button></li>
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
                    </div>
                  </div>
                  {/* Related Product End */}

                </div>
                {/* Product Details End */}
              </div>
              <div className="col-lg-4">
                {/* Sidebar Start */}
                <div className="sidebar-03">

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar-02">
                    <div className="widget-title">
                      <h3 className="title">Search</h3>
                    </div>

                    <div className="widget-search">
                      <input type="text" placeholder="Search Here" />
                      <button><i className="fa fa-search"></i></button>
                    </div>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar-02">
                    <div className="widget-title">
                      <h3 className="title">Categories</h3>
                    </div>

                    <div className="widget-link">
                      <ul className="link">
                        <li><Link to="#">17 Inch Rim 8 Lug <span>(25)</span></Link></li>
                        <li><Link to="#">Car Engine <span>(38)</span></Link></li>
                        <li><Link to="#">Disk Brake <span>(45)</span></Link></li>
                        <li><Link to="#">Stereo Audio System <span>(22)</span></Link></li>
                        <li><Link to="#">Car Battery <span>(18)</span></Link></li>
                        <li><Link to="#">Streering <span>(33)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar-02">
                    <div className="widget-title">
                      <h3 className="title">Filter by Price</h3>
                    </div>

                    <div className="widget-price">
                      <div id="slider-range"></div>
                      <div className="price">
                        <span>Price:</span>
                        <input type="text" disabled id="amount" />
                        <button>Filter</button>
                      </div>
                    </div>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar-02">
                    <div className="widget-title">
                      <h3 className="title">Materials</h3>
                    </div>

                    <div className="widget-link">
                      <ul className="link">
                        <li><Link to="#">Plastic <span>(25)</span></Link></li>
                        <li><Link to="#">Metal <span>(38)</span></Link></li>
                        <li><Link to="#">Fiber <span>(22)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar">
                    <Link className="banner" to="#"><img src="/assets/images/banner-2.webp" alt="Banner" /></Link>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar-02">
                    <div className="widget-title">
                      <h3 className="title">Tags</h3>
                    </div>

                    <ul className="tags">
                      <li><Link to="#">Automobile</Link></li>
                      <li><Link to="#">Car Repair</Link></li>
                      <li><Link to="#">Car</Link></li>
                      <li><Link to="#">Engine</Link></li>
                      <li><Link to="#">Auto Repair</Link></li>
                      <li><Link to="#">Car Wash</Link></li>
                      <li><Link to="#">Mechanics</Link></li>
                      <li><Link to="#">Oil Change</Link></li>
                      <li><Link to="#">Wheels</Link></li>
                    </ul>
                  </div>
                  {/* Widget Sidebar End */}

                </div>
                {/* Sidebar End */}
              </div>
            </div>
          </div>
          {/* Shop Wrapper End */}

        </div>
      </div>
      {/* Shop Section End */}

      <Footer />

      {/* Back To Start */}
      <Link to="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
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
                      <div className="swiper-button-prev"><i className="icofont-rounded-left"></i></div>
                      <div className="swiper-button-next"><i className="icofont-rounded-right"></i></div>
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
                        <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart"><i className="icofont-shopping-cart"></i></button></li>
                        <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></button></li>
                        <li><button data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to compare"><i className="fa fa-random"></i></button></li>
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

export default ProductDetailsLeftSidebar;