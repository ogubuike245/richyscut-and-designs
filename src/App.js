// React and Router imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Page Components
import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Layout Components
import { SiteHeaderNavigation, SiteFooterInfo, AutoScrollToTopHandler, BackToTopScrollButton, WhatsAppFloatingContactButton } from "./components/shared";
import { SEOHead, PWAOfflineIndicator } from "./components/common";

// Custom Hooks
import useQueue from "./hooks/useQueue";

// Styles - Import all CSS files for centralized management
import "./assets/css/App.css";
import "./assets/css/index.css";
import "./assets/css/Home.css";
import "./assets/css/LoadingComponents.css";
import "./assets/css/PWA.css";

/**
 * Main App Component
 * Handles routing and global state management for the booking system
 */
function App() {
  // Queue management hook for booking functionality
  const { queue, loading: queueLoading, refresh, addBooking } = useQueue();

  return (
    <HelmetProvider>
      <Router>
        {/* Default SEO */}
        <SEOHead />
        
        {/* Scroll to top on route change */}
        <AutoScrollToTopHandler />

      <div className="App">
        {/* Main Navigation */}
        <SiteHeaderNavigation />

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
                    refreshQueue={refresh}
                    isLoading={queueLoading}
                  />
                }
              />

              {/* Admin/Management Pages */}
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    currentQueue={queue}
                    refreshQueue={refresh}
                    isQueueLoading={queueLoading}
                  />
                }
              />
            </Routes>
          </main>
        </div>

        {/* Utility Components */}
        <BackToTopScrollButton />
        <WhatsAppFloatingContactButton />
        <PWAOfflineIndicator />

        {/* Footer */}
        <SiteFooterInfo />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
