import React from 'react';
import BlogPost from './BlogPost';

const BlogSection = () => (
  <div className="section section-padding-02">
    <div className="container">
      {/* Blog Wrapper Start */}
      <div className="blog-wrapper">
        {/* Section Title Start */}
        <div className="section-title">
          <h5 className="sub-title">Our V Blog</h5>
          <h2 className="main-title">Latest V Blog</h2>
          <p>
            Trusted and reliable service is our main goal extremely <br /> painful. Nor again is there anyone who loves
          </p>
        </div>
        {/* Section Title End */}

        {/* Blog Items Start */}
        <div className="blog-items">
          <div className="row">
            <BlogPost 
              image="/assets/images/blog/blog-01.webp"
              date="28 May, 2023"
              author="Albert Ross"
              title="Anti-lock Brake Servicing is very important for your vehical"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              delay="200"
            />
            <BlogPost 
              image="/assets/images/blog/blog-02.webp"
              date="28 May, 2023"
              author="Albert Ross"
              title="Don't do these 4 things if you want your car to retain its value"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              delay="400"
            />
            <BlogPost 
              image="/assets/images/blog/blog-03.webp"
              date="28 May, 2023"
              author="Albert Ross"
              title="Full car Diagnostic is important for every year maintainance"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              delay="600"
            />
          </div>
        </div>
        {/* Blog Items End */}

      </div>
      {/* Blog Wrapper End */}
    </div>
  </div>
);

export default BlogSection;
