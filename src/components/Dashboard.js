import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Dashboard = ({
  currentQueue,
  servedToday,
  serveCustomer,
  removeFromQueue,
  callNext,
  clearQueue,
  addWalkInCustomer,
  logout,
  isLoggedIn,
}) => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [todayRevenue] = useState(Math.floor(Math.random() * 500) + 200); // Mock data
  const [showWalkInForm, setShowWalkInForm] = useState(false);
  const [walkInData, setWalkInData] = useState({ name: '', service: '' });

  const services = [
    // Barbering Services
    'Adult Haircut',
    'Beard Trim',
    'Kids Haircut',
    // Tailoring Services
    'Measurements',
    'Sewing',
    'Amendments'
  ];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleWalkInSubmit = (e) => {
    e.preventDefault();
    
    // Check if current time is within business hours (9 AM - 8 PM)
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(9, 0, 0, 0); // 9:00 AM
    const closeTime = new Date();
    closeTime.setHours(20, 0, 0, 0); // 8:00 PM
    
    if (now < openTime) {
      alert('Walk-in customers can only be added from 9:00 AM onwards.');
      return;
    }
    
    if (now > closeTime) {
      alert('Walk-in customer registration is closed for today. Business hours: 9:00 AM - 8:00 PM.');
      return;
    }
    
    // Validate required fields with specific error messages
    if (!walkInData.name || !walkInData.name.trim()) {
      alert('Please enter the customer name to add them to the queue.');
      return;
    }
    
    if (!walkInData.service) {
      alert('Please select a service for the walk-in customer.');
      return;
    }
    
    addWalkInCustomer(walkInData);
    setWalkInData({ name: '', service: '' });
    setShowWalkInForm(false);
    alert('Walk-in customer added to queue!');
  };

  const handleWalkInChange = (e) => {
    setWalkInData({ ...walkInData, [e.target.name]: e.target.value });
  };

  const nextCustomer = currentQueue.length > 0 ? currentQueue[0] : null;

  // Check if walk-in registration is currently available
  const isWalkInAvailable = () => {
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(9, 0, 0, 0); // 9:00 AM
    const closeTime = new Date();
    closeTime.setHours(20, 0, 0, 0); // 8:00 PM
    
    return now >= openTime && now <= closeTime;
  };

  const getWalkInStatus = () => {
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(9, 0, 0, 0); // 9:00 AM
    const closeTime = new Date();
    closeTime.setHours(20, 0, 0, 0); // 8:00 PM
    
    if (now < openTime) {
      return { status: 'closed', message: 'Walk-in registration opens at 9:00 AM' };
    } else if (now > closeTime) {
      return { status: 'closed', message: 'Walk-in registration closed for today' };
    } else {
      return { status: 'open', message: 'Walk-in registration is available' };
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <div className="dashboard-page">
        <div className="container">
          <div className="dashboard-container">
            {/* Dashboard Header */}
            <div className="dashboard-header">
              <div className="dashboard-title">
                <h1>Dashboard Overview</h1>
                <p className="dashboard-time">
                  {currentTime.toLocaleDateString()} •{" "}
                  {currentTime.toLocaleTimeString()}
                </p>
              </div>
              <div className="dashboard-actions">
                <button
                  className="dashboard-btn secondary"
                  onClick={() => window.location.reload()}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M23 4v6h-6M1 20v-6h6M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.64A9 9 0 0 1 3.51 15" />
                  </svg>
                  Refresh
                </button>
                <button
                  className="dashboard-btn primary"
                  onClick={handleLogout}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>

            {/* Stats Overview */}
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
                  <h3>{currentQueue.length}</h3>
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
                  <h3>${todayRevenue}</h3>
                  <p>Today's Revenue</p>
                </div>
              </div>
            </div>

            {/* Next Customer Alert */}
            {nextCustomer && (
              <div className="alert-section">
                <div className="alert-header">🔔 Next Customer Alert</div>
                <div className="alert-body">
                  <div className="next-customer">
                    <div className="customer-details">
                      <h4>{nextCustomer.name}</h4>
                      <p>Service: {nextCustomer.service}</p>
                    </div>
                    <button className="call-btn" onClick={callNext}>
                      📢 Call Customer
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Dashboard Grid */}
            <div className="dashboard-grid">
              {/* Queue Management */}
              <div className="dashboard-card queue-card">
                <div className="card-header">
                  <h3>👥 Queue Management</h3>
                  <span className="queue-count">
                    {currentQueue.length} customers
                  </span>
                </div>
                <div className="card-body">
                  <div className="current-queue">
                    {currentQueue.length > 0 ? (
                      currentQueue
                        .slice()
                        .sort((a, b) => {
                          // Helper function to convert time string to comparable format
                          const parseTime = (customer) => {
                            if (customer.type === 'walkin') {
                              // For walk-ins, use timestamp
                              return new Date(customer.timestamp);
                            } else {
                              // For online bookings, parse the time string (e.g., "2:00 PM")
                              const today = new Date();
                              const [time, period] = customer.time.split(' ');
                              const [hours, minutes] = time.split(':');
                              let hour24 = parseInt(hours);
                              
                              if (period === 'PM' && hour24 !== 12) {
                                hour24 += 12;
                              } else if (period === 'AM' && hour24 === 12) {
                                hour24 = 0;
                              }
                              
                              const bookingTime = new Date(today);
                              bookingTime.setHours(hour24, parseInt(minutes), 0, 0);
                              return bookingTime;
                            }
                          };
                          
                          return parseTime(a) - parseTime(b);
                        })
                        .map((customer, index) => {
                        const formatTime = (timestamp) => {
                          const date = typeof timestamp === 'string' ? new Date(timestamp) : new Date(timestamp);
                          return date.toLocaleTimeString('en-US', { 
                            hour: 'numeric', 
                            minute: '2-digit',
                            hour12: true 
                          });
                        };
                        
                        return (
                          <div key={customer.id} className="queue-item">
                            <div className="customer-info">
                              <div className="customer-name">
                                <span className={`customer-type ${customer.type}`}>
                                  {customer.type === 'walkin' ? '🚶' : '🌐'}
                                </span>
                                {customer.name}
                                <span className="queue-position">#{index + 1}</span>
                              </div>
                              <div className="customer-service">
                                {customer.service}
                              </div>
                              <div className="customer-meta">
                                <span className="customer-type-label">
                                  {customer.type === 'walkin' ? 'Walk-in' : 'Online'}
                                </span>
                                <span className="customer-time">
                                  {customer.type === 'walkin' 
                                    ? `Arrived: ${formatTime(customer.timestamp)}`
                                    : `Booked: ${customer.time}`
                                  }
                                </span>
                              </div>
                            </div>
                            <div className="queue-actions">
                              <button
                                className="queue-btn serve"
                                onClick={() => serveCustomer(customer.id)}
                              >
                                ✅ Serve
                              </button>
                              <button
                                className="queue-btn remove"
                                onClick={() => removeFromQueue(customer.id)}
                              >
                                ❌ Remove
                              </button>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="empty-queue">
                        <p>No customers in queue</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="dashboard-card actions-card">
                <div className="card-header">
                  <h3>⚡ Quick Actions</h3>
                </div>
                <div className="card-body">
                  {/* Walk-in Status Indicator */}
                  <div className={`booking-status ${getWalkInStatus().status}`}>
                    <span className="status-icon">
                      {getWalkInStatus().status === 'open' ? '🟢' : '🔴'}
                    </span>
                    <span className="status-message">{getWalkInStatus().message}</span>
                  </div>
                  <div className="quick-actions">
                    <button
                      className={`action-btn ${isWalkInAvailable() ? 'primary' : 'disabled'}`}
                      onClick={callNext}
                      disabled={currentQueue.length === 0 || !isWalkInAvailable()}
                      title={!isWalkInAvailable() ? 'Call Next is only available during business hours (9:00 AM - 8:00 PM)' : currentQueue.length === 0 ? 'No customers in queue' : 'Call next customer'}
                    >
                      📢 {isWalkInAvailable() ? 'Call Next' : 'Call Closed'}
                    </button>
                    <button
                      className={`action-btn ${isWalkInAvailable() ? 'success' : 'disabled'}`}
                      onClick={() => isWalkInAvailable() && setShowWalkInForm(!showWalkInForm)}
                      disabled={!isWalkInAvailable()}
                      title={!isWalkInAvailable() ? getWalkInStatus().message : 'Add walk-in customer'}
                    >
                      🚶 {isWalkInAvailable() ? 'Add Walk-in' : 'Walk-in Closed'}
                    </button>
                    <button
                      className="action-btn secondary"
                      onClick={() => navigate("/queue")}
                    >
                      👁️ View Queue
                    </button>
                    <button
                      className={`action-btn ${isWalkInAvailable() ? 'warning' : 'disabled'}`}
                      onClick={clearQueue}
                      disabled={currentQueue.length === 0 || !isWalkInAvailable()}
                      title={!isWalkInAvailable() ? 'Clear Queue is only available during business hours (9:00 AM - 8:00 PM)' : currentQueue.length === 0 ? 'No customers in queue' : 'Clear all customers from queue'}
                    >
                      🗑️ {isWalkInAvailable() ? 'Clear Queue' : 'Clear Closed'}
                    </button>
                  </div>
                  
                  {/* Walk-in Customer Form */}
                  {showWalkInForm && (
                    <div className="walkin-form">
                      <h4>Add Walk-in Customer</h4>
                      <form onSubmit={handleWalkInSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Customer Name"
                            value={walkInData.name}
                            onChange={handleWalkInChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <select
                            name="service"
                            value={walkInData.service}
                            onChange={handleWalkInChange}
                            required
                          >
                            <option value="">Select Service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-actions">
                          <button type="submit" className="btn-submit">
                            Add to Queue
                          </button>
                          <button
                            type="button"
                            className="btn-cancel"
                            onClick={() => setShowWalkInForm(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
