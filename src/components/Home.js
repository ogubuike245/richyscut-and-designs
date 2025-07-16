import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { modernBarbershopInterior } from "../assets/images";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-main">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            {/* <div className="hero-badge">Premium Barbershop</div> */}
            <h1>RICHYS CUTS & DESIGNS</h1>
            <p>Where Style Meets Craftsmanship</p>
            <div className="hero-features">
              <span>✂️ Expert Barber</span>
              <span>🧵 Master Tailor</span>
              <span>🇳🇬 Nigerian Heritage</span>
            </div>
            <Link to="/queue" className="btn btn-primary hero-btn">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Welcome to RICHYS CUTS & DESIGNS! I'm Richard Ogar, your dedicated
                barber and master tailor in Port Harcourt where traditional Nigerian hospitality
                meets world-class grooming and fashion craftsmanship. With years of experience in both
                barbering and tailoring, I understand the unique styling needs of Nigerian men.
              </p>
              <p>
                From classic Afro cuts to modern fades, and from traditional Nigerian attire to
                contemporary suits, I celebrate Nigerian style while incorporating international trends.
                My dual expertise ensures you get the perfect cut and the perfect fit - all under one roof.
              </p>
              <p>
                Step into my establishment and experience the complete transformation. Whether you need
                a fresh haircut, a custom-tailored outfit, or both, I create a space where every man
                feels like royalty - because every Nigerian man deserves to look and feel his absolute best.
              </p>
            </div>
            <div className="about-image">
              <img
                src={modernBarbershopInterior}
                alt="Barbershop Interior"
                className="barbershop-interior-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          
          {/* Barbering Services */}
          <div className="service-category">
            <h3 className="category-title">✂️ Barbering Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <h4>Classic Cut</h4>
                <p>
                  Timeless haircuts with modern techniques. Includes consultation,
                  precision cutting, and styling.
                </p>
                <span className="service-price">₦8,000</span>
              </div>
              <div className="service-card">
                <h4>Skin Fade</h4>
                <p>
                  Professional fade cuts with seamless blending. Perfect gradient
                  for any style preference.
                </p>
                <span className="service-price">₦10,000</span>
              </div>
              <div className="service-card">
                <h4>Beard Sculpting</h4>
                <p>
                  Expert beard trimming and shaping to complement your facial
                  structure and personal style.
                </p>
                <span className="service-price">₦5,000</span>
              </div>
              <div className="service-card">
                <h4>Full Grooming</h4>
                <p>
                  Complete package including cut, beard trim, hot towel
                  finish, and styling.
                </p>
                <span className="service-price">₦12,000</span>
              </div>
            </div>
          </div>

          {/* Tailoring Services */}
          <div className="service-category">
            <h3 className="category-title">🧵 Tailoring Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <h4>Custom Suits</h4>
                <p>
                  Bespoke suits tailored to your exact measurements and style
                  preferences. Premium fabrics available.
                </p>
                <span className="service-price">₦45,000+</span>
              </div>
              <div className="service-card">
                <h4>Traditional Wear</h4>
                <p>
                  Authentic Nigerian attire including agbada, senator wear,
                  and traditional ceremonial outfits.
                </p>
                <span className="service-price">₦25,000+</span>
              </div>
              <div className="service-card">
                <h4>Casual Wear</h4>
                <p>
                  Custom shirts, trousers, and casual outfits designed
                  for comfort and style.
                </p>
                <span className="service-price">₦15,000+</span>
              </div>
              <div className="service-card">
                <h4>Alterations</h4>
                <p>
                  Professional alterations and repairs to ensure your
                  existing clothes fit perfectly.
                </p>
                <span className="service-price">₦3,000+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for the Complete Transformation, Oga?</h2>
            <p>
              Book your appointment today and join the RICHYS CUTS & DESIGNS family.
              Experience grooming and fashion that celebrates your Nigerian heritage with
              international flair. From fresh cuts to custom fits - we've got you covered.
              Walk-ins welcome, but appointments are recommended.
            </p>
            <Link to="/queue" className="btn btn-primary cta-btn">
              Book Your Service
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
