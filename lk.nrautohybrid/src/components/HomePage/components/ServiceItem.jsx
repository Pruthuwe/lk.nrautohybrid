import React from 'react';

const ServiceItem = ({ delay, title, link, children }) => (
  <div className="col-lg-4 col-sm-6">
    <div className="single-service" data-aos="fade-up" data-aos-delay={delay}>
      <h4 className="title">
        <a href={link}>{title}</a>
      </h4>
      <a href={link} className="more">Lean more</a>
      <div className="service-icon">
        {children}
      </div>
    </div>
  </div>
);

export default ServiceItem;
