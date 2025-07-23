import React from 'react';
import {
  formatDisplayName,
  formatServiceName,
  formatAppointmentTime,
  getBookingStatus
} from '../utils/bookingUtils';

const WaitlistItem = ({ booking, index, onSetActive, onServeCustomer, onDeleteBooking }) => {
  const displayName = formatDisplayName(booking);
  const serviceName = formatServiceName(booking);
  const appointmentTime = formatAppointmentTime(booking);
  const status = getBookingStatus(booking);

  return (
    <div key={booking._id || index} className="waitlist-item">
      <div className="service-info">
        <h4>
          {serviceName} - {displayName}
        </h4>
        <div className="appointment-time">
          {appointmentTime}
        </div>
        <div className="booking-type">
          <span
            className={`type-badge ${
              booking.type === "walk-in" ? "walkin" : "online"
            }`}
          >
            {booking.type === "walk-in" ? "🚶 Walk-in" : "💻 Online"}
          </span>
        </div>
      </div>
      <div className="waitlist-item-actions">
        <span className={`status-badge ${status}`}>
          {status === "active" ? "Active" : "Waiting"}
        </span>
        <div className="action-buttons">
          {!booking.isActive && (
            <button
              className="action-btn set-active-btn"
              onClick={() => onSetActive(booking._id)}
              title="Set as active customer"
            >
              🎯
            </button>
          )}
          <button
            className="action-btn serve-btn"
            onClick={() => onServeCustomer(booking._id)}
            title="Mark as served"
          >
            ✅
          </button>
          <button
            className="action-btn delete-btn"
            onClick={() => onDeleteBooking(booking._id)}
            title="Delete booking"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistItem;