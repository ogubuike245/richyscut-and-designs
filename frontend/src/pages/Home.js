import React from "react";
import { Link } from "react-router-dom";
import { aboutUsIntro } from "../assets/images";


function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero-main">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="home-hero-content">
            {/* <div className="home-hero-badge">Premium Barbershop</div> */}
            {/* <h1>RICHYS CUTS & DESIGNS</h1> */}
            {/* <p>Where Style Meets Craftsmanship</p> */}
            <div className="home-hero-features">
              <span>✂️ Expert Barber</span>
              <span>🧵 Master Tailor</span>
              {/* <span>🇳🇬 Nigerian Heritage</span> */}
            </div>
            <Link to="/queue" className="btn btn-primary home-hero-btn">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about-section">
        <div className="container">
          <div className="home-about-content">
            <div className="home-about-text">
              <h2>About Us</h2>
              <p>
                Welcome to Richys Cuts & Designs – your go-to spot for fresh
                cuts and custom traditional outfits in Port Harcourt. I'm
                Richard Ogar, a passionate barber and tailor committed to
                helping every man look his best.
              </p>
              <p>
                From clean fades to stylish Afro cuts, and from perfectly
                crafted native wears to unique designs, we combine skill,
                creativity, and Nigerian flair to give you a complete style
                upgrade.
              </p>
            </div>
            <div className="home-about-image">
              <img
                src={aboutUsIntro}
                alt="Barbershop Interior"
                className="home-barbershop-interior-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services-section">
        <div className="container">
          <h2 className="home-services-section-title">Our Services</h2>

          {/* Barbering Services */}
          <div className="service-category">
            <h3 className="category-title">✂️ Barbering Services</h3>
            <div className="home-services-grid">
              <div className="home-service-card">
                <h4>Adult Haircut</h4>
                <p>Professional haircut with styling for adults</p>
                <span className="home-service-price">₦1,500</span>
              </div>
              <div className="home-service-card">
                <h4>Beard Trim</h4>
                <p>Beard shaping and trim with hot towel</p>
                <span className="home-service-price">₦1,000</span>
              </div>
              <div className="home-service-card">
                <h4>Kids Haircut</h4>
                <p>Professional haircut for children under 12</p>
                <span className="home-service-price">₦700</span>
              </div>
            </div>
          </div>

          {/* Tailoring Services */}
          <div className="service-category" style={{ marginTop: "4rem" }}>
            <h3 className="category-title">🧵 Tailoring Services</h3>
            <div className="home-services-grid">
              <div className="home-service-card">
                <h4>Measurements</h4>
                <p>Professional body measurements for custom clothing</p>
                <span className="home-service-price">₦3,000</span>
              </div>
              <div className="home-service-card">
                <h4>Sewing</h4>
                <p>Custom garment creation and construction</p>
                <span className="home-service-price">₦15,000</span>
              </div>
              <div className="home-service-card">
                <h4>Amendments</h4>
                <p>Clothing alterations and adjustments</p>
                <span className="home-service-price">₦5,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-content">
            <h2>Ready for the Complete Transformation, Oga?</h2>
            <p>
              Book your appointment today and join the RICHYS CUTS & DESIGNS
              family. Experience grooming and fashion that celebrates your
              Nigerian heritage with international flair. From fresh cuts to
              custom fits - we've got you covered. Walk-ins welcome, but
              appointments are recommended.
            </p>
            <Link to="/queue" className="btn btn-primary home-cta-btn">
              Book Your Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
