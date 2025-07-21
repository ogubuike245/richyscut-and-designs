import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { barbershopLogo } from "../assets/images";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced mobile menu functions based on test.txt logic
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside (adapted from test.txt)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.querySelector("header");
      if (isMenuOpen && header && !header.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { path: "/", label: "Home", type: "secondary" },
    { path: "/gallery", label: "Gallery", type: "secondary" },
    { path: "/contact", label: "Contact", type: "secondary" },
    { path: "/queue", label: "Book Appointment", type: "button" },
    { path: "/login", label: "Admin", type: "primary" },
  ];

  return (
    <header className={`modern-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-wrapper">
          {/* Logo */}
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <div className="logo-container">
              {/* <div className="logo-icon">
                <img
                  src={barbershopLogo}
                  alt="RICHYS CUTS & DESIGNS Logo"
                  width="45"
                  height="45"
                />
              </div> */}
              <div className="brand-text">
                <span className="brand-name">RICHYS CUTS & DESIGNS</span>
                <span className="brand-tagline">
                  Barbershop & Tailoring Studio
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${item.type} ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    <span className="nav-text">{item.label}</span>
                    <div className="nav-indicator"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <div className="hamburger">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-nav-overlay" onClick={closeMenu}></div>
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <h3>Navigation</h3>
              <button className="close-btn" onClick={closeMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li
                  key={item.path}
                  className="mobile-nav-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${item.type} ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    <span className="mobile-nav-text">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-footer">
              <p>RICHYS CUTS & DESIGNS - Barbershop & Tailoring Studio</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
