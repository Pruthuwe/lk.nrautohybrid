import React from 'react';

const ChooseItem = ({ delay, icon, title, description }) => (
  <div className="col-sm-6">
    <div className="single-choose-item" data-aos="fade-up" data-aos-delay={delay}>
      <div className="item-icon">
        <img src={icon} alt="Icon" />
      </div>
      <div className="item-content">
        <h4 className="title">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ChooseItem;
