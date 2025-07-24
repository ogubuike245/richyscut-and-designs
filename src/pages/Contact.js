import React, { useState } from "react";
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    toast.success(
      "Thank you for your appointment request! We'll get back to you soon."
    );
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1>MAKE AN APPOINTMENT</h1>
          <p>GET IN TOUCH WITH US</p>
        </div>
      </div>

      {/* Contact Info and Map Section */}
      <div className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <h2>CONTACT US</h2>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>
                      CARWASH, ELIOPARANWO
                      <br />
                      PORT HARCOURT, RIVERS STATE
                    </h3>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/12635/12635043.png?ga=GA1.1.602665086.1752272868"
                      alt="WhatsApp icon"
                    />
                  </div>
                  <div className="info-content">
                    <h3>WhatsApp: 09129942545</h3>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone: 07032290022</h3>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>richyogar@gmail.com</h3>
                  </div>
                </div>

                <div className="working-hours">
                  <h2>WORKING HOURS</h2>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span>MONDAY - FRIDAY</span>
                      <span>07:30 - 20:00</span>
                    </div>
                    <div className="hours-item">
                      <span>SATURDAY</span>
                      <span>07:30 - 21:00</span>
                    </div>
                    <div className="hours-item">
                      <span>SUNDAY</span>
                      <span>07:00 - 15:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2!2d6.9527384!3d4.8350461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTAnMDYuMiJOIDZwNTcnMDkuOSJF!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className="appointment-section">
        <div className="appointment-container">
          <h2>MAKE AN APPOINTMENT ONLINE</h2>

          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+123456789"
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Please describe the requested booking details here"
              ></textarea>
            </div>

            <button type="submit" className="appointment-btn">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
