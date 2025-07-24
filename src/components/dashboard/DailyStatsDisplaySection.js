import React from "react";
import { SkeletonStats } from '../common/SkeletonContentLoader';

const DailyStatsDisplaySection = ({ dailyStats, statsLoading }) => {
  if (statsLoading) {
    return (
      <div className="daily-stats-section">
        <h3>Today's Statistics</h3>
        <SkeletonStats />
      </div>
    );
  }

  return (
    <div className="daily-stats-section">
      <h3>Today's Statistics</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{dailyStats.totalBookings}</div>
          <div className="stat-label">Total Customers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{dailyStats.completedBookings}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{dailyStats.pendingBookings}</div>
          <div className="stat-label">Pending</div>
        </div>
      </div>
    </div>
  );
};

export default DailyStatsDisplaySection;
