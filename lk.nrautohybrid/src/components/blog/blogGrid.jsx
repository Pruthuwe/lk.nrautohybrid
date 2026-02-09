import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const BlogGrid = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: '/assets/images/blog/blog-01.webp',
      date: '28 May, 2023',
      author: 'Albert Ross',
      title: 'Anti-lock Brake Servicing is very important for your vehical',
      link: '/blog-details-right-sidebar',
      delay: 200
    },
    {
      id: 2,
      image: '/assets/images/blog/blog-02.webp',
      date: '28 May, 2023',
      author: 'Thomas Jayson',
      title: 'Don\'t do these 4 things if you want your car to retain its value',
      link: '/blog-details-right-sidebar',
      delay: 400
    },
    {
      id: 3,
      image: '/assets/images/blog/blog-03.webp',
      date: '28 May, 2023',
      author: 'Robert Smith',
      title: 'Full car Diagnostic is important for every year maintainance',
      link: '/blog-details-right-sidebar',
      delay: 600
    },
    {
      id: 4,
      image: '/assets/images/blog/blog-04.webp',
      date: '28 May, 2023',
      author: 'Cristopher Lopez',
      title: '5 Tips to get best performance for your car AC and Light',
      link: '/blog-details-right-sidebar',
      delay: 200
    },
    {
      id: 5,
      image: '/assets/images/blog/blog-05.webp',
      date: '28 May, 2023',
      author: 'Alan Donald',
      title: '5 things every car owner needs to know for better performance',
      link: '/blog-details-right-sidebar',
      delay: 400
    },
    {
      id: 6,
      image: '/assets/images/blog/blog-06.webp',
      date: '28 May, 2023',
      author: 'Stephen Fleming',
      title: 'Upgrade Your Car Lights for Maximum Safety',
      link: '/blog-details-right-sidebar',
      delay: 600
    },
    {
      id: 7,
      image: '/assets/images/blog/blog-07.webp',
      date: '28 May, 2023',
      author: 'Albert Ross',
      title: 'Latest interior design concept for modern Vehicals',
      link: '/blog-details-right-sidebar',
      delay: 200
    },
    {
      id: 8,
      image: '/assets/images/blog/blog-08.webp',
      date: '28 May, 2023',
      author: 'David Morgan',
      title: 'Why you need to wash your car deeply every week?',
      link: '/blog-details-right-sidebar',
      delay: 400
    },
    {
      id: 9,
      image: '/assets/images/blog/blog-09.webp',
      date: '28 May, 2023',
      author: 'Albert Ross',
      title: 'Proper Servicing of car engine can improve the performance',
      link: '/blog-details-right-sidebar',
      delay: 600
    }
  ];

  return (
    <>
      <Header />

      {/* Page Banner Section Start */}
      <div className="section page-banner-section" style={{ backgroundImage: 'url(/assets/images/page-banner-bg.webp)' }}>
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

      {/* Shop Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Blog Wrapper Start */}
          <div className="blog-wrapper-02">
            <div className="row">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6">
                  {/* Single Blog Start */}
                  <div className="single-blog" data-aos="fade-up" data-aos-delay={post.delay}>
                    <div className="blog-image">
                      <Link to={post.link}>
                        <img src={post.image} alt="Blog" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <ul className="meta">
                        <li><i className="fa fa-calendar"></i> {post.date}</li>
                        <li><i className="fa fa-user-o"></i> {post.author}</li>
                      </ul>
                      <h3 className="title">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <Link to={post.link} className="more">+ Read more</Link>
                    </div>
                  </div>
                  {/* Single Blog End */}
                </div>
              ))}
            </div>
          </div>
          {/* Blog Wrapper End */}

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
      </div>
      {/* Shop Section End */}

      <Footer />

      {/*Back To Start*/}
      <Link to="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </Link>
      {/*Back To End*/}
    </>
  );
};

export default BlogGrid;
