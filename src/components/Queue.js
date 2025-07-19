import React, { useState } from "react";


const Queue = ({ addToQueue, currentQueue }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: "",
  });

  // Check if booking is currently available
  const isBookingAvailable = () => {
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(10, 0, 0, 0); // 10:00 AM
    const closeTime = new Date();
    closeTime.setHours(18, 30, 0, 0); // 6:30 PM

    return now >= openTime && now <= closeTime;
  };

  // Services data for barbering only
  const services = [
    {
      name: "Adult Haircut",
      desc: "Professional haircut with styling for adults",
      price: "₦1,500",
      category: "barbering",
    },
    {
      name: "Beard Trim",
      desc: "Beard shaping and trim with hot towel",
      price: "₦1,000",
      category: "barbering",
    },
    {
      name: "Kids Haircut",
      desc: "Professional haircut for children under 12",
      price: "₦700",
      category: "barbering",
    },
  ];
  const times = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
  ];

  // Function to check if a time slot has passed
  const isTimePassed = (timeSlot) => {
    const now = new Date();
    const [time, period] = timeSlot.split(" ");
    const [hours, minutes] = time.split(":").map(Number);

    let hour24 = hours;
    if (period === "PM" && hours !== 12) {
      hour24 += 12;
    } else if (period === "AM" && hours === 12) {
      hour24 = 0;
    }

    const slotTime = new Date();
    slotTime.setHours(hour24, minutes, 0, 0);

    return now > slotTime;
  };

  // Pagination handlers
  const totalPages = currentQueue ? Math.ceil(currentQueue.length / itemsPerPage) : 0;
  
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };
  
  const getCurrentPageItems = () => {
    if (!currentQueue || currentQueue.length === 0) return [];
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return currentQueue.slice(startIndex, endIndex);
  };

  // Handlers
  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    // Check if current time is within business hours (10 AM - 6:30 PM)
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(10, 0, 0, 0); // 10:00 AM
    const closeTime = new Date();
    closeTime.setHours(18, 30, 0, 0); // 6:30 PM

    if (now < openTime) {
      alert("Online booking opens at 10:00 AM. Please try again later.");
      return;
    }

    if (now > closeTime) {
      alert(
        "Online booking is closed for today. Booking is available from 10:00 AM to 6:30 PM."
      );
      return;
    }

    // Validate required fields with specific error messages
    if (!userInfo.firstName || !userInfo.firstName.trim()) {
      alert("Please enter your first name to proceed with booking.");
      return;
    }

    if (!userInfo.lastName || !userInfo.lastName.trim()) {
      alert("Please enter your last name to proceed with booking.");
      return;
    }

    if (!selectedTime) {
      alert("Please select a preferred time for your appointment.");
      return;
    }

    // Check if selected time has passed
    if (isTimePassed(selectedTime)) {
      alert(
        "The selected time slot has already passed. Please choose a different time."
      );
      setSelectedTime(null); // Clear the invalid selection
      return;
    }

    if (!selectedService) {
      alert("Please select a service for your appointment.");
      return;
    }

    if (!userInfo.phone || !userInfo.phone.trim()) {
      alert("Please enter your phone number for booking confirmation.");
      return;
    }

    const booking = {
      id: Date.now(),
      time: selectedTime,
      service: selectedService,
      customer: userInfo,
      timestamp: new Date().toISOString(),
      type: "online",
    };

    addToQueue(booking);

    // Reset form
    setSelectedTime(null);
    setSelectedService(null);
    setUserInfo({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      notes: "",
    });

    alert(
      "Booking confirmed for today! You will receive a confirmation shortly."
    );
  };

  return (
    <div className="queue-booking-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Book Your Appointment</h1>
          <p className="page-subtitle">How It Works</p>
        </div>

        {/* How It Works Steps */}
        <div className="how-it-works-section">
          <div className="how-it-works-grid">
            <div className="how-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Choose Your Service</h4>
                <p>Select from our range of professional beauty services</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Select Preferred Time</h4>
                <p>Pick a time slot that works best for your schedule</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Complete Booking</h4>
                <p>Fill in your details and confirm your appointment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-layout">
          {/* Booking Form */}
          <div className="booking-panel">
            {/* Booking Availability Indicator */}
            <div className="booking-availability-indicator">
              {isBookingAvailable() ? (
                <span className="availability-status available">
                  🟢 Booking Available
                </span>
              ) : (
                <span className="availability-status unavailable">
                  🔴 Booking Currently Unavailable
                </span>
              )}
            </div>

            {/* Preferred Time Section */}
            <section className="booking-section">
              <h3>Preferred Time</h3>
              <div className="time-grid">
                {times.map((time) => {
                  const isPassed = isTimePassed(time);
                  return (
                    <button
                      key={time}
                      className={`time-btn ${
                        selectedTime === time ? "selected" : ""
                      }${isPassed ? " disabled" : ""}`}
                      onClick={() => !isPassed && setSelectedTime(time)}
                      disabled={isPassed}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Mobile Collapsible Sections */}
            <div className="mobile-sections">
              <div className="mobile-section">
                <h3>📅 Schedule Your Visit</h3>
                <div className="mobile-booking-form">
                  {/* Booking Status */}
                  <div className="booking-status">
                    {isBookingAvailable() ? (
                      <div className="status-open">
                        <span className="status-indicator">🟢</span>
                        <span>We're Open - Book Now!</span>
                      </div>
                    ) : (
                      <div className="status-closed">
                        <span className="status-indicator">🔴</span>
                        <span>Currently Closed - Book for Tomorrow</span>
                      </div>
                    )}
                  </div>

                  {/* Time Selection */}
                  <section className="booking-section">
                    <h3>Preferred Time</h3>
                    <div className="time-grid">
                      {times.map((time) => (
                        <button
                          key={time}
                          className={`time-btn${
                            selectedTime === time ? " selected" : ""
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </section>

                  <div className="booking-footer-cta">
                    <button
                      className={`btn btn-book ${
                        isBookingAvailable() ? "btn-primary" : "btn-disabled"
                      }`}
                      onClick={handleBooking}
                      disabled={!isBookingAvailable()}
                    >
                      {isBookingAvailable()
                        ? "Book Appointment"
                        : "Booking Unavailable"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Select a Service */}
            <section className="booking-section">
              <h3>Select Service</h3>

              <div className="service-grid">
                {services.map((service) => (
                  <button
                    key={service.name}
                    className={`service-card${
                      selectedService === service.name ? " selected" : ""
                    } ${service.category}`}
                    onClick={() => setSelectedService(service.name)}
                  >
                    <div className="service-category-badge">
                      {service.category === "barbering" ? "✂️" : "🧵"}
                    </div>
                    <div className="service-title">{service.name}</div>
                    <div className="service-desc">{service.desc}</div>
                    <div className="service-price">{service.price}</div>
                  </button>
                ))}
              </div>
            </section>

            {/* Your Information Section */}
            <section className="booking-section">
              <h3>Your Information</h3>

              <div className="booking-form-grid">
                {/* Section 1: First Name */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={userInfo.firstName}
                      onChange={handleUserInfoChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                </div>

                {/* Section 2: Last Name */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={userInfo.lastName}
                      onChange={handleUserInfoChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                {/* Section 3: Phone Number */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleUserInfoChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Section 4: Email Address */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleUserInfoChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>


              </div>

              <button
                className="booking-btn"
                onClick={handleBooking}
                disabled={!selectedTime || !selectedService}
              >
                Book Appointment
              </button>
            </section>
          </div>

          {/* Waitlist Sidebar */}
          <div className="waitlist-sidebar">
            <div className="waitlist-card">
              <div className="waitlist-header">
                <h3>Current Waitlist</h3>
                <div className="current-time">
                  <span>Current time: {new Date().toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    hour12: true 
                  })}</span>
                  {totalPages > 1 && (
                    <div className="time-controls">
                      <button 
                        className="time-nav" 
                        onClick={handlePrevPage}
                        disabled={currentPage === 0}
                      >
                        ‹
                      </button>
                      <span className="page-indicator">{currentPage + 1}/{totalPages}</span>
                      <button 
                        className="time-nav" 
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages - 1}
                      >
                        ›
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="waitlist-items">
                {currentQueue && currentQueue.length > 0 ? (
                  getCurrentPageItems().map((booking, index) => {
                    const customerName = booking.customer ? 
                      `${booking.customer.firstName} ${booking.customer.lastName}` : 
                      booking.name || 'Unknown';
                    const initials = customerName.split(' ').map(name => name.charAt(0)).join('.');
                    const serviceName = booking.service || 'Service';
                    const appointmentTime = booking.time || booking.timestamp ? 
                      new Date(booking.timestamp).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        hour12: true 
                      }) : 'N/A';
                    // Calculate actual index in the full queue for status determination
                    const actualIndex = currentPage * itemsPerPage + index;
                    const status = actualIndex === 0 ? 'active' : 'waiting';
                    
                    return (
                      <div key={booking.id} className="waitlist-item">
                        <div className="service-info">
                          <h4>{serviceName} - {initials}</h4>
                          <div className="appointment-time">{booking.time || appointmentTime}</div>
                        </div>
                        <span className={`status-badge ${status}`}>
                          {status === 'active' ? 'Active' : 'Waiting'}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="waitlist-item">
                    <div className="service-info">
                      <h4>No appointments booked</h4>
                      <div className="appointment-time">Book your appointment above</div>
                    </div>
                    <span className="status-badge waiting">Empty</span>
                  </div>
                )}
              </div>

              <div className="estimated-wait">
                <p>Estimated Wait Time</p>
                <div className="wait-time">
                  {currentQueue && currentQueue.length > 0 ? 
                    `${currentQueue.length * 15} min` : 
                    '0 min'
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Queue;
