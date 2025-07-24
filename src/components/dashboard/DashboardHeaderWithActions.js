import React from 'react';
import { formatCurrentDateTime } from '../../utils/bookingUtils';

const DashboardHeaderWithActions = ({ onRefresh }) => {
  const { date, time } = formatCurrentDateTime();

  return (
    <div className="dashboard-header">
      <div className="dashboard-title">
        <h1>Dashboard Overview</h1>
        <p className="dashboard-time">
          {date} • {time}
        </p>
      </div>
      <div className="dashboard-actions">
        <button
          className="dashboard-btn secondary"
          onClick={onRefresh}
        >
          Refresh
        </button>
        <button className="dashboard-btn primary">Logout</button>
      </div>
    </div>
  );
};

export default DashboardHeaderWithActions;