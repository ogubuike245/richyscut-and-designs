import React, { useState, useEffect } from "react";
import { services } from "../../config/services";
import { timeSlots } from "../../config/timeSlots";
import { checkAvailability } from "../../api";
import LoadingSpinnerIndicator from "../common/LoadingSpinnerIndicator";

const OnlineBookingFormPanel = ({
  addToQueue,
  refreshQueue,
  isBookingAvailable,
  isTimePassed,
}) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingAvailability, setIsLoadingAvailability] = useState(true);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  // Fetch availability data on component mount
  useEffect(() => {
    const fetchAvailability = async () => {
      setIsLoadingAvailability(true);
      try {
        const today = new Date().toISOString().split("T")[0];
        const availabilityData = await checkAvailability(today);
        if (availabilityData.success) {
          setBookedSlots(availabilityData.data.bookedSlots || []);
        }
      } catch (error) {
        console.error("Failed to fetch availability:", error);
      } finally {
        setIsLoadingAvailability(false);
      }
    };

    fetchAvailability();
  }, []);

  // Helper function to check if a time slot is booked
  const isSlotBooked = (timeSlot) => {
    // Convert 12-hour format to 24-hour format for comparison
    const [time, period] = timeSlot.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    const time24 = `${hours.toString().padStart(2, "0")}:${minutes}`;

    return bookedSlots.includes(time24);
  };

  // Handlers
  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
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

    // Prepare booking data for backend
    const selectedServiceObj = services.find((s) => s.name === selectedService);
    if (!selectedServiceObj) {
      alert("Invalid service selection.");
      return;
    }
    // Convert selectedTime (e.g., '10:00 AM') to 'HH:mm' 24-hour format
    const [time, period] = selectedTime.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    const appointmentTime24 = `${hours.toString().padStart(2, "0")}:${minutes}`;
    const bookingData = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      phone: userInfo.phone,
      email: userInfo.email,
      serviceType: selectedServiceObj.code,
      appointmentDate: new Date().toISOString().split("T")[0], // Today's date in YYYY-MM-DD format
      appointmentTime: appointmentTime24,
      type: "online",
    };
    setIsSubmitting(true);
    try {
      await addToQueue(bookingData);
      await refreshQueue();

      // Refresh availability data to reflect the new booking
      try {
        const today = new Date().toISOString().split("T")[0];
        const availabilityData = await checkAvailability(today);
        if (availabilityData.success) {
          setBookedSlots(availabilityData.data.bookedSlots || []);
        }
      } catch (availabilityError) {
        console.error("Failed to refresh availability:", availabilityError);
      }

      alert("Booking successful! You have been added to the waitlist.");
      setUserInfo({ firstName: "", lastName: "", phone: "", email: "" });
      setSelectedTime(null);
      setSelectedService(null);
    } catch (err) {
      alert("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
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
        {isLoadingAvailability ? (
          <div className="loading-state">
            <LoadingSpinnerIndicator
              size="medium"
              text="Loading available time slots..."
            />
          </div>
        ) : (
          <div className="time-grid">
            {timeSlots.map((time) => {
              const isPassed = isTimePassed(time);
              const isBooked = isSlotBooked(time);
              const isDisabled = isPassed || isBooked || isSubmitting;
              return (
                <button
                  key={time}
                  className={`time-btn ${
                    selectedTime === time ? "selected" : ""
                  }${isDisabled ? " disabled" : ""}`}
                  onClick={() => !isDisabled && setSelectedTime(time)}
                  disabled={isDisabled}
                  title={
                    isPassed
                      ? "This time slot has passed"
                      : isBooked
                      ? "Slot taken - try another time slot"
                      : isSubmitting
                      ? "Please wait while booking is being processed"
                      : ""
                  }
                >
                  {time}
                </button>
              );
            })}
          </div>
        )}
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
                {timeSlots.map((time) => {
                  const isPassed = isTimePassed(time);
                  const isBooked = isSlotBooked(time);
                  const isDisabled = isPassed || isBooked;
                  return (
                    <button
                      key={time}
                      className={`time-btn${
                        selectedTime === time ? " selected" : ""
                      }${isDisabled ? " disabled" : ""}`}
                      onClick={() => !isDisabled && setSelectedTime(time)}
                      disabled={isDisabled}
                      title={
                        isPassed
                          ? "This time slot has passed"
                          : isBooked
                          ? "Slot taken - try another time slot"
                          : ""
                      }
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="booking-footer-cta">
              <button
                className={`btn btn-book ${
                  isBookingAvailable() ? "btn-primary" : "btn-disabled"
                } ${isSubmitting ? "btn-loading" : ""}`}
                onClick={handleBooking}
                disabled={!isBookingAvailable() || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinnerIndicator size="small" color="white" />
                    <span style={{ marginLeft: "8px" }}>Processing...</span>
                  </>
                ) : isBookingAvailable() ? (
                  "Book Appointment"
                ) : (
                  "Booking Unavailable"
                )}
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
                selectedService === service.name ? "selected" : ""
              } ${service.category}`}
              onClick={() => !isSubmitting && setSelectedService(service.name)}
              disabled={isSubmitting}
            >
              <div className="service-category-badge">✂️</div>
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

        <div
          className={`booking-form-grid ${isSubmitting ? "form-loading" : ""}`}
        >
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        <button
          className={`booking-btn ${isSubmitting ? "btn-loading" : ""}`}
          onClick={handleBooking}
          disabled={!selectedTime || !selectedService || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinnerIndicator size="small" color="white" />
              <span style={{ marginLeft: "8px" }}>Processing...</span>
            </>
          ) : (
            "Book Appointment"
          )}
        </button>
      </section>
    </div>
  );
};

export default OnlineBookingFormPanel;
