import React from "react";
import { SEOHead } from "../components/common";
import { QueueWaitlistSidebar, OnlineBookingFormPanel } from "../components/queue";

const Queue = ({ currentQueue, addToQueue, refreshQueue, isLoading = false }) => {
  
  // Check if booking is currently available
  const isBookingAvailable = () => {
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(10, 0, 0, 0); // 10:00 AM
    const closeTime = new Date();
    closeTime.setHours(18, 30, 0, 0); // 6:30 PM

    return now >= openTime && now <= closeTime;
  };

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

  return (
    <div className="queue-booking-page">
      <SEOHead 
        title="Book Appointment - Online Booking System"
        description="Book your barber appointment online. Choose your preferred time slot and service. Easy online booking system for haircuts, beard trims, and grooming services."
        keywords="book appointment, online booking, barber appointment, haircut booking, beard trim booking, schedule appointment, queue system"
      />
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
          <OnlineBookingFormPanel
            addToQueue={addToQueue}
            refreshQueue={refreshQueue}
            isBookingAvailable={isBookingAvailable}
            isTimePassed={isTimePassed}
          />

          {/* Waitlist Sidebar */}
          <QueueWaitlistSidebar currentQueue={currentQueue} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Queue;
