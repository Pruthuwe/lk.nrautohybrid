import React, { useState } from 'react';
import Appointment from '../../appointment/Appointment';

const CallToAction = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  return (
    <>
      <div className="section section-padding-02">
        <div className="container">
          {/* Call to Action Wrapper Start */}
          <div className="call-to-action-wrapper">
            {/* Call to Action Content Start */}
            <div className="call-to-action-content">
              <div className="content-wrapper">
                {/* Section Title Start */}
                <div className="section-title section-title-white">
                  <h5 className="sub-title">Emergency Calls 24/7</h5>
                  <h2 className="main-title">+94 77 216 6306</h2>
                </div>
                {/* Section Title End */}
                <p>Car servicing rationally encounter consequences extremely painful. Nor again is there anyone who loves or pursues of more than a quality servicing is very important</p>
                <button onClick={() => setShowAppointmentModal(true)} className="btn btn-custom-01">
                  <i className="icofont-ui-calendar me-2"></i>
                  Book Appointment
                </button>
              </div>
              <img className="shape" src="/assets/images/call-to-action.png" alt="Call to Action" />
            </div>
            {/* Call to Action Content End */}

            {/* Call to Action Images Start */}
            <div 
              className="call-to-action-images" 
              style={{ backgroundImage: 'url(/assets/images/call-to-action-bg.webp)' }}
            ></div>
            {/* Call to Action Images End */}
          </div>
          {/* Call to Action Wrapper End */}
        </div>
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{zIndex: 1050}}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body p-4">
                  <Appointment 
                    onClose={() => setShowAppointmentModal(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={() => setShowAppointmentModal(false)} style={{zIndex: 1040}}></div>
        </>
      )}
    </>
  );
};

export default CallToAction;
