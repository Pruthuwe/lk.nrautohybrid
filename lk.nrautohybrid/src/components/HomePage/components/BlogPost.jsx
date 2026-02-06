import React from 'react';

const BlogPost = ({ image, date, author, title, link, delay }) => (
  <div className="col-lg-4 col-md-6">
    <div className="single-blog" data-aos="fade-up" data-aos-delay={delay}>
      <div className="blog-image">
        <a href={link}>
          <img src={image} alt="Blog" />
        </a>
      </div>
      <div className="blog-content">
        <ul className="meta">
          <li><i className="fa fa-calendar"></i> {date}</li>
          <li><i className="fa fa-user-o"></i> {author}</li>
        </ul>
        <h3 className="title">
          <a href={link}>{title}</a>
        </h3>
        <a href={link} className="more">+ Read more</a>
      </div>
    </div>
  </div>
);

export default BlogPost;
