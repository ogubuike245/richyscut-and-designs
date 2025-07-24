import React, { useState, useEffect } from 'react';

const PWAOfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Auto-hide offline message after 5 seconds
    if (!isOnline) {
      const timer = setTimeout(() => {
        setShowOfflineMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

  if (!showOfflineMessage) return null;

  return (
    <div className="pwa-offline-indicator">
      <div className="offline-message">
        <div className="offline-icon">📱</div>
        <div className="offline-text">
          <strong>You're offline</strong>
          <p>Some features may be limited. The app will work with cached content.</p>
        </div>
        <button 
          className="offline-close"
          onClick={() => setShowOfflineMessage(false)}
          aria-label="Close offline notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PWAOfflineIndicator;