import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetaQuote = ({ onClose }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    
    const formData = new FormData(e.target);
    
    try {
      console.log('Submitting form data...');
      console.log('Form fields:', Object.fromEntries(formData.entries()));
      
      const response = await fetch('/assets/php/getaquote.php', {
        method: 'POST',
        body: formData
      });
      
      const responseText = await response.text();
      console.log('Server response status:', response.status);
      console.log('Server response:', responseText);
      
      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'Thank you! Your quote request has been sent successfully. We will contact you soon.' 
        });
        e.target.reset();
        // Client-side redirect so Contact page content loads correctly (no full page reload)
        setTimeout(() => {
          onClose?.();
          navigate('/contact', { replace: true });
        }, 3000);
      } else {
        setMessage({ 
          type: 'error', 
          text: responseText || 'Failed to send quote request. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      setMessage({ 
        type: 'error', 
        text: 'Network error: ' + error.message + '. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-modal">
      <div className="quote-header d-flex justify-content-between align-items-center mb-4 pb-3 pt-4 border-bottom">
        <h4 className="mb-0 fw-bold">Get A Quote</h4>
        <button 
          type="button"
          className="btn-close" 
          title="Close"
          onClick={onClose}
        ></button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Message Display */}
        {message.text && (
          <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
            <i className={`${message.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle'} me-2`}></i>
            {message.text}
          </div>
        )}

        {/* Vehicle Information */}
        <div className="mb-4 pt-2">
          <h6 className="fw-bold mb-3 text-dark">
            <i className="fas fa-car text-primary me-2"></i>
            Vehicle Information
          </h6>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="vehicleType" className="form-label small mb-2">Vehicle Type <span className="text-primary">*</span></label>
              <select className="form-select" id="vehicleType" name="vehicleType" required>
                <option value="">Select Vehicle Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
                <option value="van">Van</option>
                <option value="truck">Truck</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="vehicleBrand" className="form-label small mb-2">Vehicle Brand <span className="text-primary">*</span></label>
              <select className="form-select" id="vehicleBrand" name="vehicleBrand" required>
                <option value="">Select Brand</option>
                <option value="toyota">Toyota</option>
                <option value="nissan">Nissan</option>
                <option value="honda">Honda</option>
                <option value="mazda">Mazda</option>
                <option value="suzuki">Suzuki</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="subaru">Subaru</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="vehicleModel" className="form-label small mb-2">Vehicle Model</label>
              <input
                type="text"
                className="form-control"
                id="vehicleModel"
                name="vehicleModel"
                placeholder="e.g., Corolla, Civic"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="serviceNeeded" className="form-label small mb-2">Service Needed <span className="text-primary">*</span></label>
              <select className="form-select" id="serviceNeeded" name="serviceNeeded" required>
                <option value="">Select Service</option>
                <option value="hybrid-battery">Hybrid Battery Service</option>
                <option value="hybrid-system">Hybrid System Diagnostics</option>
                <option value="battery-replacement">Battery Replacement</option>
                <option value="inverter-repair">Inverter Repair</option>
                <option value="general-maintenance">General Maintenance</option>
                <option value="electrical-repair">Electrical Repair</option>
                <option value="engine-repair">Engine Repair</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-4 pt-1">
          <h6 className="fw-bold mb-3 text-dark">
            <i className="fas fa-user text-primary me-2"></i>
            Contact Information
          </h6>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="yourName" className="form-label small mb-2">Your Name <span className="text-primary">*</span></label>
              <input
                type="text"
                className="form-control"
                id="yourName"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label small mb-2">Phone Number <span className="text-primary">*</span></label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="emailAddress" className="form-label small mb-2">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                name="email"
                placeholder="Enter your email (optional)"
              />
            </div>
          </div>
        </div>

        {/* Additional Message */}
        <div className="mb-4 pt-1">
          <label htmlFor="additionalMessage" className="form-label small mb-2">Additional Message</label>
          <textarea
            className="form-control"
            id="additionalMessage"
            name="message"
            rows="4"
            placeholder="Tell us more about your requirements (optional)"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn w-100 py-3 text-white fw-bold d-flex justify-content-center align-items-center" 
          style={{backgroundColor: '#0046e2', border: 'none'}}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane me-2"></i>
              Submit Quote Request
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GetaQuote;
