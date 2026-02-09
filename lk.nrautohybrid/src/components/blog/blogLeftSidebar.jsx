import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const BlogLeftSidebar = () => {
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
                <h2 className="main-title">Latest <br /> Blog Post</h2>
              </div>
              {/* Section Title End */}

              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Blog</li>
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

      {/* Blog Section Start */}
      <div className="section section-padding">
        <div className="container">

          {/* Blog Wrapper Start */}
          <div className="blog-wrapper-02">
            <div className="row flex-row-reverse">
              <div className="col-lg-8">

                <div className="row">
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="200">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-01.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> Albert Ross</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">Anti-lock Brake Servicing is very important for your vehical</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="400">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-02.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> Robert Smith</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">Don&apos;t do these 4 things if you want your car to retain its value</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="200">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-03.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> Cristopher Lopez</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">Full car Diagnostic is important for every year maintainance</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="400">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-04.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> Stephen Fleming</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">5 Tips to get best performance for your car AC and Light</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="200">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-05.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> Albert Ross</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">5 things every car owner needs to know for better performance</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="400">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-06.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> David Morgan</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">Upgrade Your Car Lights for Maximum Safety</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="200">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-07.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> Alan Donald</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">Latest interior design concept for modern Vehicals</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                  <div className="col-md-6">
                    {/* Single Blog Start */}
                    <div className="single-blog" data-aos="fade-up" data-aos-delay="400">
                      <div className="blog-image">
                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/blog-08.webp" alt="Blog" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="meta">
                          <li> <i className="fa fa-calendar"></i> 28 May, 2023</li>
                          <li> <i className="fa fa-user-o"></i> Thomas Jayson</li>
                        </ul>
                        <h3 className="title"><Link to="/blog-details-right-sidebar">Why you need to wash your car deeply every week?</Link></h3>
                        <Link to="/blog-details-right-sidebar" className="more">+ Read more</Link>
                      </div>
                    </div>
                    {/* Single Blog End */}
                  </div>
                </div>

                {/* Page Pagination Start */}
                <div className="page-pagination">
                  <ul className="pagination justify-content-center">
                    <li><Link to="#"><i className="fa fa-angle-left"></i></Link></li>
                    <li><Link className="active" to="#">1</Link></li>
                    <li><Link to="#">2</Link></li>
                    <li><Link to="#">3</Link></li>
                    <li><Link to="#">4</Link></li>
                    <li>...</li>
                    <li><Link to="#">15</Link></li>
                    <li><Link to="#"><i className="fa fa-angle-right"></i></Link></li>
                  </ul>
                </div>
                {/* Page Pagination End */}
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
                        <li><Link to="#">Anti Lock Brake Servicing <span>(25)</span></Link></li>
                        <li><Link to="#">Car Wash Service <span>(38)</span></Link></li>
                        <li><Link to="#">Entire Engine Servicing <span>(45)</span></Link></li>
                        <li><Link to="#">Change Oil and Filter <span>(22)</span></Link></li>
                        <li><Link to="#">Battery Replacement <span>(18)</span></Link></li>
                        <li><Link to="#">Tire Change and Repair <span>(33)</span></Link></li>
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
          {/* Blog Wrapper End */}

        </div>
      </div>
      {/* Blog Section End */}

      <Footer />

      {/* Back To Start */}
      <Link to="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </Link>
      {/* Back To End */}
    </>
  );
};

export default BlogLeftSidebar;