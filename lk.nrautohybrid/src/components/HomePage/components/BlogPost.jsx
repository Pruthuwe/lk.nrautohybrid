import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ image, date, author, title, link, delay }) => (
  <div className="col-lg-4 col-md-6">
    <div className="single-blog" data-aos="fade-up" data-aos-delay={delay}>
      <div className="blog-image">
        <Link to={link}>
          <img src={image} alt="Blog" />
        </Link>
      </div>
      <div className="blog-content">
        <ul className="meta">
          <li><i className="fa fa-calendar"></i> {date}</li>
          <li><i className="fa fa-user-o"></i> {author}</li>
        </ul>
        <h3 className="title">
          <Link to={link}>{title}</Link>
        </h3>
        <Link to={link} className="more">+ Read more</Link>
      </div>
    </div>
  </div>
);

export default BlogPost;
