import React from 'react';

const DailyStatsSection = ({ dailyStats, statsLoading }) => {
  return (
    <div className="daily-stats-section">
      <h3>Today's Statistics</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">
            {statsLoading ? "..." : dailyStats.totalBookings}
          </div>
          <div className="stat-label">Total Customers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {statsLoading ? "..." : dailyStats.completedBookings}
          </div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {statsLoading ? "..." : dailyStats.pendingBookings}
          </div>
          <div className="stat-label">Pending</div>
        </div>
      </div>
    </div>
  );
};

export default DailyStatsSection;