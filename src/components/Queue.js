import React, { useState, useRef } from "react";
import Footer from "./Footer";

const Queue = ({ currentQueue, addToQueue }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const queueListRef = useRef(null);

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

  const getBookingStatus = () => {
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(10, 0, 0, 0); // 10:00 AM
    const closeTime = new Date();
    closeTime.setHours(18, 30, 0, 0); // 6:30 PM

    if (now < openTime) {
      return { status: "closed", message: "Booking opens at 10:00 AM" };
    } else if (now > closeTime) {
      return { status: "closed", message: "Booking closed for today" };
    } else {
      return { status: "open", message: "Booking is currently available" };
    }
  };

  // Services data for both barbering and tailoring
  const services = [
    // Barbering Services
    {
      name: "Adult Haircut",
      desc: "Professional haircut with styling for adults",
      price: "₦8,000",
      category: "barbering",
    },
    {
      name: "Beard Trim",
      desc: "Beard shaping and trim with hot towel",
      price: "₦5,000",
      category: "barbering",
    },
    {
      name: "Kids Haircut",
      desc: "Professional haircut for children under 12",
      price: "₦6,000",
      category: "barbering",
    },

    // Tailoring Services
    {
      name: "Measurements",
      desc: "Professional body measurements for custom clothing",
      price: "₦3,000",
      category: "tailoring",
    },
    {
      name: "Sewing",
      desc: "Custom garment creation and construction",
      price: "₦15,000",
      category: "tailoring",
    },
    {
      name: "Amendments",
      desc: "Clothing alterations and adjustments",
      price: "₦5,000",
      category: "tailoring",
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
    const [time, period] = timeSlot.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) {
      hour24 += 12;
    } else if (period === 'AM' && hours === 12) {
      hour24 = 0;
    }
    
    const slotTime = new Date();
    slotTime.setHours(hour24, minutes, 0, 0);
    
    return now > slotTime;
  };

  // Handlers
  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // Function to convert time string to minutes for sorting
  const timeToMinutes = (timeStr) => {
    if (!timeStr) return 0;

    // Handle walk-in timestamps (already formatted time)
    if (
      timeStr.includes(":") &&
      (timeStr.includes("AM") || timeStr.includes("PM"))
    ) {
      const [time, period] = timeStr.split(" ");
      const [hours, minutes] = time.split(":").map(Number);
      let totalMinutes = minutes;

      if (period === "PM" && hours !== 12) {
        totalMinutes += (hours + 12) * 60;
      } else if (period === "AM" && hours === 12) {
        totalMinutes += 0; // 12 AM is 0 hours
      } else {
        totalMinutes += hours * 60;
      }

      return totalMinutes;
    }

    return 0;
  };

  // Function to sort queue by time
  const getSortedQueue = (queue) => {
    if (!queue || queue.length === 0) return queue;

    return [...queue].sort((a, b) => {
      const timeA =
        a.type === "walkin"
          ? new Date(a.timestamp).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
          : a.time;
      const timeB =
        b.type === "walkin"
          ? new Date(b.timestamp).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
          : b.time;

      return timeToMinutes(timeA) - timeToMinutes(timeB);
    });
  };

  // Carousel scroll functions
  const scrollLeft = () => {
    if (queueListRef.current) {
      queueListRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (queueListRef.current) {
      queueListRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
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
      alert("The selected time slot has already passed. Please choose a different time.");
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
          <p className="page-subtitle">
            Skip the wait and secure your spot with our streamlined booking
            system
          </p>
        </div>

        <div className="booking-layout">
          {/* Left Panel - Booking Form */}
          <div className="booking-panel">
            <div className="panel-header">
              <h2 className="panel-title">📅 Schedule Your Visit</h2>
            </div>

            {/* How It Works */}
            <section className="booking-section">
              <h3>How It Works</h3>
              <div className="how-it-works-grid">
                <div className="how-step">
                  <div className="step-icon">1</div>
                  <div className="step-title">Join Queue</div>
                  <div className="step-desc">
                    Select your service and join our digital queue.
                  </div>
                </div>
                <div className="how-step">
                  <div className="step-icon">2</div>
                  <div className="step-title">Get Updates</div>
                  <div className="step-desc">
                    Receive real-time updates on your position.
                  </div>
                </div>
                <div className="how-step">
                  <div className="step-icon">3</div>
                  <div className="step-title">Arrive on Time</div>
                  <div className="step-desc">
                    Come in when it's almost your turn.
                  </div>
                </div>
                <div className="how-step">
                  <div className="step-icon">4</div>
                  <div className="step-title">Enjoy Your Service</div>
                  <div className="step-desc">
                    Experience premium grooming with minimal wait.
                  </div>
                </div>
              </div>
            </section>

            {/* Booking Status Indicator */}
            <div className={`booking-status ${getBookingStatus().status}`}>
                <span className="status-icon">
                  {getBookingStatus().status === "open" ? "🟢" : "🔴"}
                </span>
                <span className="status-message">
                  {getBookingStatus().message}
                </span>
              </div>

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

                  {/* Service Selection */}
                  <section className="booking-section">
                    <h3>Select Service</h3>
                    <div className="gallery-filters">
                      <button
                        className={`gallery-filter-btn${
                          selectedCategory === "all" ? " active" : ""
                        }`}
                        onClick={() => setSelectedCategory("all")}
                      >
                        All Services
                      </button>
                      <button
                        className={`gallery-filter-btn${
                          selectedCategory === "barbering" ? " active" : ""
                        }`}
                        onClick={() => setSelectedCategory("barbering")}
                      >
                        ✂️ Barbering
                      </button>
                      <button
                        className={`gallery-filter-btn${
                          selectedCategory === "tailoring" ? " active" : ""
                        }`}
                        onClick={() => setSelectedCategory("tailoring")}
                      >
                        🧵 Tailoring
                      </button>
                    </div>

                    <div className="service-grid">
                      {services
                        .filter(
                          (service) =>
                            selectedCategory === "all" ||
                            service.category === selectedCategory
                        )
                        .map((service) => (
                          <button
                            key={service.name}
                            className={`service-card${
                              selectedService === service.name
                                ? " selected"
                                : ""
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

                  {/* User Information */}
                  <section className="booking-section">
                    <h3>Your Information</h3>
                    <div className="user-info-grid">
                      <input
                        name="firstName"
                        placeholder="First Name"
                        value={userInfo.firstName}
                        onChange={handleUserInfoChange}
                      />
                      <input
                        name="lastName"
                        placeholder="Last Name"
                        value={userInfo.lastName}
                        onChange={handleUserInfoChange}
                      />
                      <input
                        name="email"
                        placeholder="Email Address"
                        value={userInfo.email}
                        onChange={handleUserInfoChange}
                      />
                      <input
                        name="phone"
                        placeholder="Phone Number"
                        value={userInfo.phone}
                        onChange={handleUserInfoChange}
                      />
                      <textarea
                        name="notes"
                        placeholder="Special Requests (Optional)"
                        value={userInfo.notes}
                        onChange={handleUserInfoChange}
                        rows="3"
                      ></textarea>
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

              <div className="mobile-section">
                <h3>📋 Current Waitlist</h3>
                <div className="mobile-queue-list">
                  {currentQueue && currentQueue.length > 0 ? (
                    currentQueue.map((item, index) => {
                      const formatTime = (timestamp) => {
                        const date = new Date(timestamp);
                        return date.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });
                      };

                      return (
                        <div
                          key={item.id || index}
                          className="mobile-queue-item"
                        >
                          <div className="mobile-customer-info">
                            <div className="customer-type-icon">
                              {item.type === "walkin" ? "🚶" : "🌐"}
                            </div>
                            <div className="customer-details">
                              <div className="customer-name">{item.name}</div>
                              <div className="customer-service">
                                {item.service}
                              </div>
                              <div className="customer-type-label">
                                {item.type === "walkin" ? "Walk-in" : "Online"}
                              </div>
                            </div>
                            <div className="customer-time">
                              {item.type === "walkin"
                                ? formatTime(item.timestamp)
                                : item.time}
                            </div>
                          </div>
                          {index === 0 && (
                            <div className="current-indicator">
                              <span className="status-badge">
                                Currently Being Served
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="empty-queue"
                      style={{
                        padding: "2rem",
                        textAlign: "center",
                        color: "#6c757d",
                      }}
                    >
                      <p>No one in queue currently - be the first!</p>
                    </div>
                  )}
                </div>
                <div className="queue-footer">
                  <div className="estimated-wait">
                    Current estimated wait time:{" "}
                    {currentQueue && currentQueue.length > 0
                      ? `${currentQueue.length * 30} minutes`
                      : "0 minutes"}
                  </div>
                </div>
              </div>
            </div>

            {/* Select a Time */}
            <section className="booking-section">
              <h3>Preferred Time</h3>
              <div className="time-grid">
                {times.map((time) => {
                  const isPassed = isTimePassed(time);
                  return (
                    <button
                      key={time}
                      className={`time-btn${
                        selectedTime === time ? " selected" : ""
                      }${isPassed ? " disabled" : ""}`}
                      onClick={() => !isPassed && setSelectedTime(time)}
                      disabled={isPassed}
                      title={isPassed ? "This time slot has passed" : ""}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Select a Service */}
            <section className="booking-section">
              <h3>Select Service</h3>

              {/* Service Category Filter */}
              <div className="gallery-filters">
                <button
                  className={`gallery-filter-btn${
                    selectedCategory === "all" ? " active" : ""
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Services
                </button>
                <button
                  className={`gallery-filter-btn${
                    selectedCategory === "barbering" ? " active" : ""
                  }`}
                  onClick={() => setSelectedCategory("barbering")}
                >
                  ✂️ Barbering
                </button>
                <button
                  className={`gallery-filter-btn${
                    selectedCategory === "tailoring" ? " active" : ""
                  }`}
                  onClick={() => setSelectedCategory("tailoring")}
                >
                  🧵 Tailoring
                </button>
              </div>

              <div className="service-grid">
                {services
                  .filter(
                    (service) =>
                      selectedCategory === "all" ||
                      service.category === selectedCategory
                  )
                  .map((service) => (
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

            {/* User Info */}
            <section className="booking-section">
              <h3>Full Name *</h3>
              <div className="user-info-grid">
                <input
                  name="firstName"
                  placeholder="Enter your first name"
                  value={userInfo.firstName}
                  onChange={handleUserInfoChange}
                  required
                />
                <input
                  name="lastName"
                  placeholder="Enter your last name"
                  value={userInfo.lastName}
                  onChange={handleUserInfoChange}
                  required
                />
              </div>
            </section>

            <section className="booking-section">
              <h3>Email Address</h3>
              <input
                name="email"
                placeholder="Enter your email"
                value={userInfo.email}
                onChange={handleUserInfoChange}
              />
            </section>

            <section className="booking-section">
              <h3>Phone Number *</h3>
              <input
                name="phone"
                placeholder="Enter your phone number"
                value={userInfo.phone}
                onChange={handleUserInfoChange}
                required
              />
            </section>

            <section className="booking-section">
              <h3>Special Requests</h3>
              <textarea
                name="notes"
                placeholder="Any special requests or notes for your barber"
                value={userInfo.notes}
                onChange={handleUserInfoChange}
                rows="3"
              ></textarea>
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

          {/* Right Panel - Current Waitlist */}
          <div className="waitlist-panel">
            <div className="panel-header">
              <h2 className="panel-title">📋 Current Waitlist</h2>
              <div className="current-time">
                Current Time:{" "}
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            <div className="queue-carousel-container">
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={scrollLeft}
              >
                ‹
              </button>

              <div className="queue-list" ref={queueListRef}>
                {currentQueue && currentQueue.length > 0 ? (
                  getSortedQueue(currentQueue).map((item, index) => {
                    const formatTime = (timestamp) => {
                      const date = new Date(timestamp);
                      return date.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      });
                    };

                    return (
                      <div
                        key={item.id || index}
                        className={`queue-item ${index === 0 ? "current" : ""}`}
                        data-customer-type={item.type || "online"}
                      >
                        {/* <div className="queue-position">#{index + 1}</div> */}
                        <div className="queue-customer-info">
                          <div
                            className={`customer-type-icon ${
                              item.type || "online"
                            }`}
                          >
                            {item.type === "walkin" ? "🚶" : "🌐"}
                          </div>
                          <div className="customer-details">
                            <div className="customer-name">{item.name}</div>
                            <div className="customer-service">
                              {item.service}
                            </div>
                            <div className="customer-type-label">
                              {item.type === "walkin" ? "Walk-in" : "Online"}
                            </div>
                          </div>
                          <div className="customer-time">
                            {item.type === "walkin"
                              ? formatTime(item.timestamp)
                              : item.time}
                          </div>
                        </div>
                        {index === 0 && (
                          <div className="current-indicator">
                            <span className="status-badge">
                              Currently Being Served
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="empty-queue">
                    <p>No one in queue currently - be the first!</p>
                  </div>
                )}
              </div>

              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={scrollRight}
              >
                ›
              </button>
            </div>

            <div className="queue-footer">
              <div className="estimated-wait">
                Current estimated wait time:{" "}
                {currentQueue && currentQueue.length > 0
                  ? `${getSortedQueue(currentQueue).length * 30} minutes`
                  : "0 minutes"}
              </div>
            </div>
          </div>
        </div>



      </div>
      <Footer />
    </div>
  );
};

export default Queue;
