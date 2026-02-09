import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const BlogDetailsRightSidebar = () => {
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
                <h5 className="sub-title">Blog</h5>
                <h2 className="main-title">Blog <br /> Details</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/blog-left-sidebar">Blog</Link></li>
                <li className="breadcrumb-item active">Blog Details</li>
              </ul>
            </div>
            {/* Page Banner Content End */}

            {/* Page Banner Images Start */}
            <div className="page-banner-images">
              <img src="/assets/images/page-banner.webp" alt="Page Banner" />
            </div>
            {/* Page Banner Images End */}

          </div>
          {/* Page Banner Wrapper End */}
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Blog Details Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Blog Details Wrapper Start */}
          <div className="blog-details-wrapper">
            <div className="row">
              <div className="col-lg-8">
                {/* Blog Details Content Start */}
                <div className="blog-details-content">
                  <div className="details-images">
                    <img src="/assets/images/blog/blog-details.jpg" alt="Blog Details" />
                  </div>
                  <ul className="meta">
                    <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                    <li> <i className="fa fa-user-o"></i> Albert Ross</li>
                  </ul>
                  <h2 className="title">Anti-lock Brake Servicing is very important for your Vehical</h2>
                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because is pain, but because occasionally circumstances occur in which toil and pain can procure Car servicin rationally encounter consequences extremely painful. Nor again is the there anyone who loves or some of the pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues </p>

                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. who loves or pursues or desires to obtain pain </p>

                  <blockquote className="blockquote" style={{backgroundImage: 'url(/assets/images/blog/blockquote-bg.jpg)'}}>
                    <p>Car servicing rationally encounter consequences extremely painful. Nor again is there anyone who loves or pursues of more than a quality servicing is very important than most of the effective way to solve the problem by great servicing </p>
                  </blockquote>

                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. who loves or pursues or desires to obtain pain </p>

                  <div className="description-img">
                    <div className="dec-img">
                      <img src="/assets/images/blog/details-dec-1.webp" alt="Details" />
                    </div>
                    <div className="dec-img">
                      <img src="/assets/images/blog/details-dec-2.webp" alt="Details" />
                    </div>
                  </div>

                  <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves or pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, but because occasionally circumstances occur in which toil and pain can procure</p>

                </div>
                {/* Blog Details Content End */}

                {/* Blog Details Tags & Share Start */}
                <div className="blog-details-tags-share">
                  <div className="blog-details-tags">
                    <span className="label">Tags:</span>
                    <ul className="tags">
                      <li><a href="#">Automobile</a></li>
                      <li><a href="#">Repari</a></li>
                      <li><a href="#">Car Wash</a></li>
                    </ul>
                  </div>
                  <div className="blog-details-share">
                    <span className="label">Share:</span>
                    <ul className="social">
                      <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                      <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
                {/* Blog Details Tags & Share End */}

                {/* Blog Details Next & Previews Start */}
                <div className="blog-details-next-previews">
                  <div className="blog-details-next">
                    <a href="#">
                      <i className="fa fa-angle-left"></i>
                      <span>Don&apos;t do these 4 things if you want your car to retain its value</span>
                    </a>
                  </div>
                  <div className="blog-details-previews">
                    <a href="#">
                      <span>Latest Interior design concept for moder Vehicals</span>
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                {/* Blog Details Next & Previews End */}

                {/* Blog Details Comment Start */}
                <div className="blog-details-comment">
                  <div className="comment-items">
                    <h3 className="title">02 Comments</h3>
                    <ul>
                      <li>
                        {/* Blog Details Comment Start */}
                        <div className="single-comment">
                          <div className="comment-image">
                            <img src="/assets/images/author/author-17.webp" alt="author" />
                          </div>
                          <div className="comment-content">
                            <h4 className="name">Alfred Rasel</h4>
                            <ul className="meta">
                              <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                              <li> <i className="fa fa-clock-o"></i> 12.45 PM</li>
                            </ul>
                            <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequence that are extremely painful. loves or pursues or desires to obtain pain </p>
                            <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a>
                          </div>
                        </div>
                        {/* Blog Details Comment End */}
                      </li>
                      <li>
                        {/* Blog Details Comment Start */}
                        <div className="single-comment">
                          <div className="comment-image">
                            <img src="/assets/images/author/author-18.webp" alt="author" />
                          </div>
                          <div className="comment-content">
                            <h4 className="name">Christina Lopez</h4>
                            <ul className="meta">
                              <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                              <li> <i className="fa fa-clock-o"></i> 12.45 PM</li>
                            </ul>
                            <p>Car servicing rationally encounter consequences extremely painful. Nor again is the there anyone who loves pursues take a trivial example, which of us undertakes chooses pleasure rationally encounter consequence that are extremely painful. loves or pursues or desires to obtain pain </p>
                            <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a>
                          </div>
                        </div>
                        {/* Blog Details Comment End */}
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form">
                    <h3 className="title">Leave a Comments</h3>

                    <div className="form-wrapper">
                      <form action="#">
                        <div className="row">
                          <div className="col-md-4">
                            {/* Single Form Start */}
                            <div className="single-form">
                              <input type="text" placeholder="Name" />
                            </div>
                            {/* Single Form End */}
                          </div>
                          <div className="col-md-4">
                            {/* Single Form Start */}
                            <div className="single-form">
                              <input type="email" placeholder="Email" />
                            </div>
                            {/* Single Form End */}
                          </div>
                          <div className="col-md-4">
                            {/* Single Form Start */}
                            <div className="single-form">
                              <input type="text" placeholder="Number" />
                            </div>
                            {/* Single Form End */}
                          </div>
                          <div className="col-md-12">
                            {/* Single Form Start */}
                            <div className="single-form">
                              <textarea placeholder="Write message here"></textarea>
                            </div>
                            {/* Single Form End */}
                          </div>
                          <div className="col-md-12">
                            {/* Single Form Start */}
                            <div className="single-form">
                              <button className="btn btn-custom-01">Post Comment</button>
                            </div>
                            {/* Single Form End */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Blog Details Comment End */}

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
                        <li><a href="#">Anti Lock Brake Servicing <span>(25)</span></a></li>
                        <li><a href="#">Car Wash Service <span>(38)</span></a></li>
                        <li><a href="#">Entire Engine Servicing <span>(45)</span></a></li>
                        <li><a href="#">Change Oil and Filter <span>(22)</span></a></li>
                        <li><a href="#">Battery Replacement <span>(18)</span></a></li>
                        <li><a href="#">Tire Change and Repair <span>(33)</span></a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar text-center">
                    <Link className="banner" to="#"><img src="/assets/images/banner-1.webp" alt="Banner" /></Link>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar-02">
                    <div className="widget-title">
                      <h3 className="title">Recent Post</h3>
                    </div>

                    <div className="widget-post">
                      {/* Single Post Start */}
                      <div className="single-post">
                        <div className="post-images">
                          <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-01.webp" alt="Blog" /></Link>
                        </div>
                        <div className="post-content">
                          <span className="date"><i className="fa fa-calendar"></i> 12 May, 2023</span>
                          <h4 className="title"><Link to="/blog-details-right-sidebar">Proper Servicing can improve performance</Link></h4>
                        </div>
                      </div>
                      {/* Single Post End */}
                      {/* Single Post Start */}
                      <div className="single-post">
                        <div className="post-images">
                          <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-04.webp" alt="Blog" /></Link>
                        </div>
                        <div className="post-content">
                          <span className="date"><i className="fa fa-calendar"></i> 12 May, 2023</span>
                          <h4 className="title"><Link to="/blog-details-right-sidebar">Hydrolic Break system is very important</Link></h4>
                        </div>
                      </div>
                      {/* Single Post End */}
                      {/* Single Post Start */}
                      <div className="single-post">
                        <div className="post-images">
                          <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-07.webp" alt="Blog" /></Link>
                        </div>
                        <div className="post-content">
                          <span className="date"><i className="fa fa-calendar"></i> 12 May, 2023</span>
                          <h4 className="title"><Link to="/blog-details-right-sidebar">Checking Tire condition and Replace system</Link></h4>
                        </div>
                      </div>
                      {/* Single Post End */}
                    </div>
                  </div>
                  {/* Widget Sidebar End */}

                  {/* Widget Sidebar Start */}
                  <div className="widget-sidebar-02">
                    <div className="widget-title">
                      <h3 className="title">Tags</h3>
                    </div>

                    <ul className="tags">
                      <li><a href="#">Automobile</a></li>
                      <li><a href="#">Car Repair</a></li>
                      <li><a href="#">Car</a></li>
                      <li><a href="#">Engine</a></li>
                      <li><a href="#">Auto Repair</a></li>
                      <li><a href="#">Car Wash</a></li>
                      <li><a href="#">Mechanics</a></li>
                      <li><a href="#">Oil Change</a></li>
                      <li><a href="#">Wheels</a></li>
                    </ul>
                  </div>
                  {/* Widget Sidebar End */}

                </div>
                {/* Sidebar End */}
              </div>
            </div>
          </div>
          {/* Blog Details Wrapper End */}

        </div>
      </div>
      {/* Blog Details Section End */}

      <Footer />

      {/* Back To Start */}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      {/* Back To End */}
    </>
  );
};

export default BlogDetailsRightSidebar;