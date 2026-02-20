import React, { useState, useEffect } from 'react';

const LOCATIONS = [
  { value: 'Kurunegala', label: 'Kurunegala' },
  { value: 'Thalawathugoda', label: 'Thalawathugoda' }
];

const Appointment = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    vehicleType: '',
    serviceType: '',
    date: '',
    time: ''
  });

  const [bookedSlots, setBookedSlots] = useState([]);

  // Generate time slots from 8:30 AM to 6:30 PM (1 per hour)
  // All slots reset daily - past date bookings are automatically cleared
  const timeSlots = [
    '08:30 AM',
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '01:30 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM'
  ];

  // Parse slot string "08:30 AM" to minutes since midnight (for comparison with current time)
  const parseSlotToMinutes = (slotStr) => {
    const match = slotStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return 0;
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const period = match[3].toUpperCase();
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  // Get current time in minutes since midnight (local time)
  const getCurrentMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  // For today only: time slots that are after current time (cannot book past slots)
  const isSlotInPastForToday = (slot) => {
    const todayStr = new Date().toISOString().split('T')[0];
    if (formData.date !== todayStr) return false;
    return parseSlotToMinutes(slot) <= getCurrentMinutes();
  };

  // Slots to show in dropdown: for today, only future slots; for other dates, all slots
  const visibleTimeSlots = formData.date
    ? (formData.date === new Date().toISOString().split('T')[0]
        ? timeSlots.filter(slot => !isSlotInPastForToday(slot))
        : timeSlots)
    : timeSlots;

  // Load booked appointments from localStorage
  useEffect(() => {
    const loadBookedSlots = () => {
      const stored = localStorage.getItem('bookedAppointments');
      if (stored) {
        const allAppointments = JSON.parse(stored);
        
        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];
        
        // Filter appointments: keep only today and future dates
        const validAppointments = allAppointments.filter(appointment => {
          return appointment.date >= today;
        });
        
        // Update localStorage with cleaned data
        localStorage.setItem('bookedAppointments', JSON.stringify(validAppointments));
        setBookedSlots(validAppointments);
      }
    };
    loadBookedSlots();
  }, []);

  // Get booked time slots for selected date and location
  const getBookedTimesForDate = (date, location) => {
    if (!date) return [];
    return bookedSlots
      .filter(slot => {
        if (slot.date !== date) return false;
        if (!location) return true;
        // Legacy appointments without location block all locations
        return slot.location === location || slot.location == null || slot.location === '';
      })
      .map(slot => slot.time);
  };

  // Check if a time slot is available for the selected date and location
  const isTimeSlotAvailable = (time) => {
    if (!formData.date) return true;
    const location = formData.location || null;
    const bookedTimes = getBookedTimesForDate(formData.date, location);
    return !bookedTimes.includes(time);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const next = { ...formData, [name]: value };
    const nextDate = name === 'date' ? value : formData.date;
    const nextLocation = name === 'location' ? value : formData.location;
    // When location or date changes, clear time if current selection becomes invalid
    if ((name === 'location' || name === 'date') && formData.time) {
      const bookedTimes = getBookedTimesForDate(nextDate, nextLocation);
      if (bookedTimes.includes(formData.time)) next.time = '';
      // If booking for today, clear time if it's now in the past
      const todayStr = new Date().toISOString().split('T')[0];
      if (nextDate === todayStr && formData.time && parseSlotToMinutes(formData.time) <= getCurrentMinutes()) {
        next.time = '';
      }
    }
    setFormData(next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.location || !formData.date || !formData.time) {
      alert('Please fill in all required fields (Name, Phone, Location, Date, Time)');
      return;
    }

    // If booking for today, cannot book a time slot that has already passed
    const todayStr = new Date().toISOString().split('T')[0];
    if (formData.date === todayStr && parseSlotToMinutes(formData.time) <= getCurrentMinutes()) {
      alert('Cannot book a time slot that has already passed. Please select a future time.');
      return;
    }

    // Check if time slot is still available
    if (!isTimeSlotAvailable(formData.time)) {
      alert('Sorry! This time slot has already been booked for the selected date. Please choose a different time slot.');
      return;
    }

    // Save appointment to localStorage (including location for slot availability)
    const newAppointment = {
      id: Date.now(),
      location: formData.location,
      date: formData.date,
      time: formData.time,
      name: formData.name,
      phone: formData.phone,
      vehicleType: formData.vehicleType,
      serviceType: formData.serviceType,
      bookedAt: new Date().toISOString()
    };

    const updatedBookedSlots = [...bookedSlots, newAppointment];
    localStorage.setItem('bookedAppointments', JSON.stringify(updatedBookedSlots));
    setBookedSlots(updatedBookedSlots);

    // Format date to readable format
    const dateObj = new Date(formData.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Format the WhatsApp message with better emoji handling
    const message = `*New Appointment Request*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}

*Service Details:*${formData.vehicleType ? `
Vehicle Type: ${formData.vehicleType}` : ''}${formData.serviceType ? `
Service Type: ${formData.serviceType}` : ''}

*Appointment Schedule:*
Location: ${formData.location}
Date: ${formattedDate}
Time: ${formData.time}

Please confirm this appointment. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (remove + and any spaces)
    const whatsappNumber = '94772166306';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Appointment booked! Redirecting to WhatsApp...');
    
    // Close modal
    if (onClose) {
      onClose();
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="appointment-form">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Book an Appointment</h3>
        {onClose && (
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose}
            aria-label="Close"
          ></button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="location" className="form-label">
              Location <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              {LOCATIONS.map((loc) => (
                <option key={loc.value} value={loc.value}>{loc.label}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="vehicleType" className="form-label">
              Vehicle Type
            </label>
            <select
              className="form-select"
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value="">Select Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="Truck">Truck</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="serviceType" className="form-label">
              Service Type
            </label>
            <select
              className="form-select"
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">Select Service Type</option>
              <option value="General Service">General Service</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Brake Service">Brake Service</option>
              <option value="Tire Service">Tire Service</option>
              <option value="Engine Repair">Engine Repair</option>
              <option value="AC Service">AC Service</option>
              <option value="Body Work">Body Work</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="date" className="form-label">
              Preferred Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="time" className="form-label">
              Preferred Time <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              disabled={!formData.date || !formData.location}
            >
              <option value="">
                {!formData.location
                  ? 'Please select a location first'
                  : !formData.date
                    ? 'Please select a date first'
                    : 'Select Time Slot'}
              </option>
              {visibleTimeSlots.map((slot, index) => {
                const available = isTimeSlotAvailable(slot);
                return (
                  <option key={index} value={slot} disabled={!available}>
                    {slot} {!available ? '(Booked)' : '(Available)'}
                  </option>
                );
              })}
            </select>
            {formData.date && formData.location && (
              <small className="text-muted">
                {getBookedTimesForDate(formData.date, formData.location).length} of {visibleTimeSlots.length} slots booked for this date at {formData.location}
                {formData.date === new Date().toISOString().split('T')[0]}
              </small>
            )}
          </div>

          <div className="col-12 mb-3">
            <p className="text-muted small mb-0">
              <i className="far fa-clock me-2"></i>
              Business Hours: Monday - Saturday, 8:30 AM - 6:30 PM
            </p>
            <p className="text-info small mb-0 mt-1">
              <i className="fas fa-info-circle me-2"></i>
              Only available time slots are shown for the selected date
            </p>
            <p className="text-success small mb-0 mt-1">
              <i className="fas fa-sync-alt me-2"></i>
              All time slots reset daily - each day starts fresh!
            </p>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-custom-01 w-100">
              <i className="fab fa-whatsapp me-2"></i>
              Book Appointment via WhatsApp
            </button>
          </div>
        </div>
      </form>

      <div className="mt-3 text-center">
        <p className="text-muted small mb-0">
          You will be redirected to WhatsApp to confirm your appointment
        </p>
      </div>
    </div>
  );
};

export default Appointment;
