// React and Router imports
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { SiteHeaderNavigation, SiteFooterInfo, AutoScrollToTopHandler, BackToTopScrollButton, WhatsAppFloatingContactButton } from "./components/shared";
import { SEOHead, PWAOfflineIndicator } from "./components/common";

// Custom Hooks
import useQueue from "./hooks/useQueue";

// Toast notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles - Import all CSS files for centralized management
import "./assets/css/App.css";
import "./assets/css/index.css";
import "./assets/css/Home.css";
import "./assets/css/LoadingComponents.css";
import "./assets/css/PWA.css";

// Lazy-loaded Page Components for code splitting
const Home = React.lazy(() => import("./pages/Home"));
const Queue = React.lazy(() => import("./pages/Queue"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

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
            <Suspense fallback={
              <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
                <span className="loading-text">Loading...</span>
              </div>
            }>
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
            </Suspense>
          </main>
        </div>

        {/* Utility Components */}
        <BackToTopScrollButton />
        <WhatsAppFloatingContactButton />
        <PWAOfflineIndicator />

        {/* Footer */}
        <SiteFooterInfo />
        
        {/* Toast Container for global notifications */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
