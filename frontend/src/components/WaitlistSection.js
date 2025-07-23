import React, { useState, useEffect } from 'react';
import WaitlistItem from './WaitlistItem';
import { formatCurrentTime, calculateEstimatedWaitTime } from '../utils/bookingUtils';

const WaitlistSection = ({ currentQueue, bookingOperations }) => {
  const { handleSetActive, handleServeCustomer, handleDeleteBooking } = bookingOperations;
  
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

  return (
    <div className="dashboard-card waitlist-card">
      <div className="waitlist-header">
        <h3>Current Waitlist</h3>
        <div className="current-time">
          <span>Current time: {formatCurrentTime()}</span>
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
        {currentQueue && currentQueue.length > 0 ? (
          getCurrentPageItems().map((booking, index) => {
            // Calculate actual index in the full queue for status determination
            const actualIndex = currentPage * itemsPerPage + index;
            return (
              <WaitlistItem
                key={booking._id || index}
                booking={booking}
                index={actualIndex}
                onSetActive={handleSetActive}
                onServeCustomer={handleServeCustomer}
                onDeleteBooking={handleDeleteBooking}
              />
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
        <div className="wait-time">
          {calculateEstimatedWaitTime(currentQueue?.length || 0)}
        </div>
      </div>
    </div>
  );
};

export default WaitlistSection;