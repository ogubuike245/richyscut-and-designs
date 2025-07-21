import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <div className="dashboard-title">
              <h1>Dashboard Overview</h1>
              <p className="dashboard-time">Date • Time</p>
            </div>
            <div className="dashboard-actions">
              <button className="dashboard-btn secondary">Refresh</button>
              <button className="dashboard-btn primary">Logout</button>
            </div>
          </div>
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon appointments">📅</div>
              <div className="stat-content">
                <h3>12</h3>
                <p>Today's Appointments</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon waitlist">⏳</div>
              <div className="stat-content">
                <h3>2</h3>
                <p>Waitlist Count</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon customers">👥</div>
              <div className="stat-content">
                <h3>1,254</h3>
                <p>Total Customers</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon revenue">💰</div>
              <div className="stat-content">
                <h3>$350</h3>
                <p>Today's Revenue</p>
              </div>
            </div>
          </div>
          <div className="alert-section">
            <div className="alert-header">🔔 Next Customer Alert</div>
            <div className="alert-body">
              <div className="next-customer">
                <div className="customer-details">
                  <h4>John Doe</h4>
                  <p>Service: Adult Haircut</p>
                </div>
                <button className="call-btn">📢 Call Customer</button>
              </div>
            </div>
          </div>
          <div className="dashboard-grid">
            <div className="dashboard-card queue-card">
              <div className="card-header">
                <h3>👥 Queue Management</h3>
                <span className="queue-count">2 customers</span>
              </div>
              <div className="card-body">
                <div className="current-queue">
                  <div className="queue-item">
                    <div className="customer-info">
                      <div className="customer-name">
                        <span className="customer-type walkin">🚶</span>
                        John Doe
                        <span className="queue-position">#1</span>
                      </div>
                      <div className="customer-service">Adult Haircut</div>
                      <div className="customer-meta">
                        <span className="customer-type-label">Walk-in</span>
                        <span className="queue-time">10:00 AM</span>
                      </div>
                    </div>
                    <div className="queue-actions">
                      <button className="queue-btn serve">✅ Serve</button>
                      <button className="queue-btn remove">❌ Remove</button>
                    </div>
                  </div>
                  <div className="queue-item">
                    <div className="customer-info">
                      <div className="customer-name">
                        <span className="customer-type online">🌐</span>
                        Jane Smith
                        <span className="queue-position">#2</span>
                      </div>
                      <div className="customer-service">Kids Haircut</div>
                      <div className="customer-meta">
                        <span className="customer-type-label">Online</span>
                        <span className="queue-time">11:00 AM</span>
                      </div>
                    </div>
                    <div className="queue-actions">
                      <button className="queue-btn serve">✅ Serve</button>
                      <button className="queue-btn remove">❌ Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card actions-card">
              <div className="card-header">
                <h3>⚡ Quick Actions</h3>
              </div>
              <div className="card-body">
                <div className="booking-status open">
                  <span className="status-icon">🟢</span>
                  <span className="status-message">
                    Walk-in registration is available
                  </span>
                </div>
                <div className="quick-actions">
                  <button className="action-btn primary">📢 Call Next</button>
                  <button className="action-btn success">🚶 Add Walk-in</button>
                  <button className="action-btn secondary">
                    👁️ View Queue
                  </button>
                  <button className="action-btn warning">🗑️ Clear Queue</button>
                </div>
                <div className="walkin-form">
                  <h4>Add Walk-in Customer</h4>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select name="service" required>
                        <option value="">Select Service</option>
                        <option value="Haircut & Style">Haircut & Style</option>
                        <option value="Beard Trim & Shape">
                          Beard Trim & Shape
                        </option>
                        <option value="Kids Haircut">Kids Haircut</option>
                      </select>
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn-submit">
                        Add to Queue
                      </button>
                      <button type="button" className="btn-cancel">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
