import React from 'react';

const Testimonial = ({ author, name, text }) => (
  <div className="single-testimonials">
    <img className="author" src={author} alt="Author" />
    <h3 className="name">{name}</h3>
    <p>{text}</p>
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
    </div>
  </div>
);

export default Testimonial;
