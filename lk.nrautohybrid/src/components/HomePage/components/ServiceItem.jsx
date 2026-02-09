import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ delay, title, link, children }) => (
  <div className="col-lg-4 col-sm-6">
    <div className="single-service" data-aos="fade-up" data-aos-delay={delay}>
      <h4 className="title">
        <Link to={link}>{title}</Link>
      </h4>
      <Link to={link} className="more">Lean more</Link>
      <div className="service-icon">
        {children}
      </div>
    </div>
  </div>
);

export default ServiceItem;
