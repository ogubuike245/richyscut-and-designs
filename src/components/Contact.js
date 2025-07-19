import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Minimalist Header */}
      <div className="container">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Get in touch with us</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-item">
              <h3>Location</h3>
              <p>
                123 Main Street
                <br />
                Downtown District
                <br />
                Your City, State 12345
              </p>
            </div>

            <div className="info-item">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>

            <div className="info-item">
              <h3>Hours</h3>
              <div className="hours">
                <div>Mon-Fri: 9:00 AM - 7:00 PM</div>
                <div>Saturday: 8:00 AM - 6:00 PM</div>
                <div>Sunday: 10:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send Message</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name *"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email Address *"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Message *"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
