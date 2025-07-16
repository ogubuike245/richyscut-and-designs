import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>RICHYS CUTS & DESIGNS</h3>
            <p>Your premier destination for professional grooming, style, and custom tailoring.</p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                📘
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                📷
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                🐦
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/queue">Queue</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Haircuts & Styling</li>
              <li>Beard Grooming</li>
              <li>Custom Suits</li>
              <li>Alterations</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 123 Main Street, City, State 12345</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@primecuts.com</p>
            <p>🕒 Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 RICHYS CUTS & DESIGNS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
