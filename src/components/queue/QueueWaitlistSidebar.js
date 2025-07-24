import React, { useState, useEffect } from "react";
import { SkeletonList } from '../common/SkeletonContentLoader';

const QueueWaitlistSidebar = ({ currentQueue, isLoading = false }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Reset to first page when queue changes
  useEffect(() => {
    setCurrentPage(0);
  }, [currentQueue]);

  // Pagination handlers
  const totalPages = currentQueue
    ? Math.ceil(currentQueue.length / itemsPerPage)
    : 0;

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const getCurrentPageItems = () => {
    if (!currentQueue || currentQueue.length === 0) return [];
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return currentQueue.slice(startIndex, endIndex);
  };
  // Service code to name mapping
  const serviceCodeToName = {
    ADULT_HAIRCUT: "Adult Haircut",
    BEARD_TRIM: "Beard Trim",
    KIDS_HAIRCUT: "Kids Haircut",
  };

  // Helper function to format customer display name
  const formatCustomerName = (booking) => {
    const customerName =
      booking.firstName && booking.lastName
        ? `${booking.firstName} ${booking.lastName}`
        : booking.customer
        ? `${booking.customer.firstName} ${booking.customer.lastName}`
        : booking.name || "Unknown";

    // Show first name and initial of last name
    let displayName = customerName;
    if (booking.firstName && booking.lastName) {
      displayName = `${booking.firstName.toUpperCase()} ${booking.lastName
        .charAt(0)
        .toUpperCase()}.`;
    } else if (
      booking.customer &&
      booking.customer.firstName &&
      booking.customer.lastName
    ) {
      displayName = `${booking.customer.firstName.toUpperCase()} ${booking.customer.lastName
        .charAt(0)
        .toUpperCase()}.`;
    }
    return displayName;
  };

  // Helper function to get service name
  const getServiceName = (booking) => {
    return (
      serviceCodeToName[booking.serviceType] ||
      booking.serviceType ||
      booking.service ||
      "Service"
    );
  };

  // Helper function to format appointment time
  const formatAppointmentTime = (booking) => {
    return (
      booking.appointmentTime ||
      booking.time ||
      (booking.timestamp
        ? new Date(booking.timestamp).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        : "N/A")
    );
  };

  // Helper function to get current time formatted
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Helper function to calculate estimated wait time
  const getEstimatedWaitTime = () => {
    return currentQueue && currentQueue.length > 0
      ? `${currentQueue.length * 15} min`
      : "0 min";
  };

  return (
    <div className="waitlist-sidebar">
      <div className="waitlist-card">
        <div className="waitlist-header">
          <h3>Current Waitlist</h3>
          <div className="current-time">
            <span>Current time: {getCurrentTime()}</span>
            {totalPages > 1 && (
              <div className="time-controls">
                <button
                  className="time-nav"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                >
                  ‹
                </button>
                <span className="page-indicator">
                  {currentPage + 1}/{totalPages}
                </span>
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
          {isLoading ? (
            <SkeletonList items={4} />
          ) : currentQueue && currentQueue.length > 0 ? (
            getCurrentPageItems().map((booking, index) => {
              const displayName = formatCustomerName(booking);
              const serviceName = getServiceName(booking);
              const appointmentTime = formatAppointmentTime(booking);

              // Calculate actual index in the full queue for status determination
              const actualIndex = currentPage * itemsPerPage + index;
              const status = actualIndex === 0 ? "active" : "waiting";

              return (
                <div
                  key={booking.id || booking.bookingReference || index}
                  className="waitlist-item"
                >
                  <div className="service-info">
                    <h4>
                      {serviceName} {"-"} {displayName}
                    </h4>
                    <div className="appointment-time">{appointmentTime}</div>
                    <div className="booking-type">
                      <span
                        className={`type-badge ${
                          booking.type === "walk-in" ? "walkin" : "online"
                        }`}
                      >
                        {booking.type === "walk-in"
                          ? "🚶 Walk-in"
                          : "💻 Online"}
                      </span>
                    </div>
                  </div>
                  <span className={`status-badge ${status}`}>
                    {status === "active" ? "Active" : "Waiting"}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="waitlist-item">
              <div className="service-info">
                <h4>No appointments booked</h4>
                <div className="appointment-time">
                  Book your appointment above
                </div>
              </div>
              <span className="status-badge waiting">Empty</span>
            </div>
          )}
        </div>

        <div className="estimated-wait">
          <p>Estimated Wait Time</p>
          <div className="wait-time">{getEstimatedWaitTime()}</div>
        </div>
      </div>
    </div>
  );
};

export default QueueWaitlistSidebar;
