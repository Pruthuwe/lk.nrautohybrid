import React from 'react';
import { Link } from 'react-router-dom';

const WorkStep = ({ number, image, title, delay }) => (
  <div className="col-lg-3 col-sm-6">
    <div className="single-work" data-aos="fade-up" data-aos-delay={delay}>
      <span className="number">{number}</span>
      <div className="content-wrapper">
        <img src={image} alt="Work" />
        <h4 className="title"><Link to="#">{title}</Link></h4>
      </div>
    </div>
  </div>
);

export default WorkStep;
