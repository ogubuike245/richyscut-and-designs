import React, { useState } from 'react';
import Footer from './Footer';

const Queue = ({ currentQueue, addToQueue }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '', phone: '', email: '', notes: '' });

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
      return { status: 'closed', message: 'Booking opens at 10:00 AM' };
    } else if (now > closeTime) {
      return { status: 'closed', message: 'Booking closed for today' };
    } else {
      return { status: 'open', message: 'Booking is currently available' };
    }
  };

  // Example data for services
  const services = [
    { name: 'Classic Haircut', desc: 'Traditional clipper and/or scissor cut for men', price: '₦8,000' },
    { name: 'Beard Trim', desc: 'Beard shaping and trim with hot towel', price: '₦5,000' },
    { name: 'Full Service', desc: 'Haircut, beard trim, and hot towel', price: '₦12,000' },
    { name: 'Head Shave', desc: 'Razor shave with hot towel', price: '₦10,000' },
    { name: 'Kids Cut', desc: 'For children under 12', price: '₦6,000' },
    { name: 'Grey Coverage', desc: 'Blending for natural look', price: '₦15,000' }
  ];
  const times = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM'
  ];



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
      alert('Online booking opens at 10:00 AM. Please try again later.');
      return;
    }
    
    if (now > closeTime) {
      alert('Online booking is closed for today. Booking is available from 10:00 AM to 6:30 PM.');
      return;
    }

    if (!selectedTime || !selectedService || !userInfo.firstName || !userInfo.lastName || !userInfo.phone) {
      alert('Please fill in all required fields');
      return;
    }

    const booking = {
      id: Date.now(),
      time: selectedTime,
      service: selectedService,
      customer: userInfo,
      timestamp: new Date().toISOString(),
      type: 'online'
    };

    addToQueue(booking);
    
    // Reset form
    setSelectedTime(null);
    setSelectedService(null);
    setUserInfo({ firstName: '', lastName: '', phone: '', email: '', notes: '' });
    
    alert('Booking confirmed for today! You will receive a confirmation shortly.');
  };

  return (
    <div className="queue-booking-page">
      <div className="container">
        <h2 className="booking-title">Join Our Queue</h2>
        <p className="booking-desc">Skip the wait and secure your spot with our streamlined queue system. Choose your preferred service and time for today, and get ready for an unbeatable grooming experience. Online booking is available from 10:00 AM to 6:30 PM.</p>
        
        {/* Booking Status Indicator */}
        <div className={`booking-status ${getBookingStatus().status}`}>
          <span className="status-icon">
            {getBookingStatus().status === 'open' ? '🟢' : '🔴'}
          </span>
          <span className="status-message">{getBookingStatus().message}</span>
        </div>
        

        
        {/* Select a Time */}
        <section className="booking-section">
          <h3>Select a Time</h3>
          <div className="time-grid">
            {times.map((time) => (
              <button
                key={time}
                className={`time-btn${selectedTime === time ? ' selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >{time}</button>
            ))}
          </div>
        </section>
        
        {/* Select a Service */}
        <section className="booking-section">
          <h3>Select a Service</h3>
          <div className="service-grid">
            {services.map((service) => (
              <button
                key={service.name}
                className={`service-card${selectedService === service.name ? ' selected' : ''}`}
                onClick={() => setSelectedService(service.name)}
              >
                <div className="service-title">{service.name}</div>
                <div className="service-desc">{service.desc}</div>
                <div className="service-price">{service.price}</div>
              </button>
            ))}
          </div>
        </section>

        
        {/* User Info */}
        <section className="booking-section">
          <h3>Your Information</h3>
          <div className="user-info-grid">
            <input name="firstName" placeholder="First Name" value={userInfo.firstName} onChange={handleUserInfoChange} />
            <input name="lastName" placeholder="Last Name" value={userInfo.lastName} onChange={handleUserInfoChange} />
            <input name="phone" placeholder="Phone Number" value={userInfo.phone} onChange={handleUserInfoChange} />
            <input name="email" placeholder="Email Address" value={userInfo.email} onChange={handleUserInfoChange} />
            <input name="notes" placeholder="Special Requests (Optional)" value={userInfo.notes} onChange={handleUserInfoChange} />
          </div>
        </section>

        
        {/* How It Works */}
        <section className="booking-section">
          <h3>How It Works</h3>
          <div className="how-it-works-grid">
            <div className="how-step"><div className="step-icon">1</div><div className="step-title">Join Queue</div><div className="step-desc">Select your service and join our digital queue.</div></div>
            <div className="how-step"><div className="step-icon">2</div><div className="step-title">Get Updates</div><div className="step-desc">Receive real-time updates on your position.</div></div>
            <div className="how-step"><div className="step-icon">3</div><div className="step-title">Arrive on Time</div><div className="step-desc">Come in when it's almost your turn.</div></div>
            <div className="how-step"><div className="step-icon">4</div><div className="step-title">Enjoy Your Service</div><div className="step-desc">Experience premium grooming with minimal wait.</div></div>
          </div>
        </section>

        
        {/* Current Queue Display */}
        <section className="booking-section">
          <h3>Current Queue Status</h3>
          <div className="current-queue-display">
            {currentQueue && currentQueue.length > 0 ? (
              <div className="queue-list">
                {currentQueue.map((item, index) => {
                  const formatTime = (timestamp) => {
                    const date = new Date(timestamp);
                    return date.toLocaleTimeString('en-US', { 
                      hour: 'numeric', 
                      minute: '2-digit',
                      hour12: true 
                    });
                  };
                  
                  return (
                    <div key={item.id || index} className={`queue-item ${index === 0 ? 'current' : ''}`}>
                      <span className="queue-position">#{index + 1}</span>
                      <span className="queue-customer-info">
                        <span className={`customer-type-icon ${item.type || 'online'}`}>
                          {(item.type === 'walkin') ? '🚶' : '🌐'}
                        </span>
                        <span className="queue-name">{item.name}</span>
                        <span className="customer-type-label">
                          {(item.type === 'walkin') ? 'Walk-in' : 'Online'}
                        </span>
                      </span>
                      <span className="queue-service">{item.service}</span>
                      <span className="queue-time">
                        {item.type === 'walkin' 
                          ? `Arrived: ${formatTime(item.timestamp)}`
                          : `Booked: ${item.time}`
                        }
                      </span>
                      {index === 0 && <span className="current-indicator">← Currently Being Served</span>}
                    </div>
                  );
                })}
                <div className="queue-info">
                  <p className="queue-explanation">
                    💡 This queue includes both online bookings (🌐) and walk-in customers (🚶) who are currently at the shop.
                  </p>
                </div>
              </div>
            ) : (
              <p className="empty-queue">No one in queue currently - be the first!</p>
            )}
          </div>
        </section>
        
        <div className="booking-footer-cta">
          <button 
            className={`btn ${isBookingAvailable() ? 'btn-primary' : 'btn-disabled'}`} 
            onClick={handleBooking}
            disabled={!isBookingAvailable()}
          >
            {isBookingAvailable() ? 'Book for Today' : 'Booking Unavailable'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Queue;