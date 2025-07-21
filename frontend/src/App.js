// React and Router imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Components
import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Utility Components
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Custom Hooks
import useQueue from "./hooks/useQueue";

// Styles - Import all CSS files for centralized management
import "./assets/css/App.css";
import "./assets/css/index.css";
import "./assets/css/Home.css";
import "./assets/css/Test.css";

/**
 * Main App Component
 * Handles routing and global state management for the booking system
 */
function App() {
  // Queue management hook for booking functionality
  const { queue, loading, error, refresh, addBooking, setQueue } = useQueue();

  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <div className="App">
        {/* Main Navigation */}
        <Header />

        {/* Main Content Area */}
        <div className="content-wrap">
          <main className="main-content">
            <Routes>
              {/* Public Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />

              {/* Booking System */}
              <Route
                path="/queue"
                element={
                  <Queue
                    currentQueue={queue}
                    addToQueue={addBooking}
                    setCurrentQueue={setQueue}
                    refreshQueue={refresh}
                    loading={loading}
                    error={error}
                  />
                }
              />

              {/* Admin/Management Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Development/Testing */}
              <Route path="/test" element={<Test />} />
            </Routes>
          </main>
        </div>

        {/* Utility Components */}
        <BackToTop />
        <WhatsAppFloat />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
