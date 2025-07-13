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
            <h1>RICHYS CUTS</h1>
            <p>Where Style Meets Culture</p>
            <div className="hero-features">
              <span>✂️ Expert Barber</span>
              {/* <span>🏆 Premium Service</span> */}
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
                Welcome to RICHYS CUTS Naija! I'm Richard Ogar, your dedicated
                barber in Port Harcourt where traditional Nigerian hospitality
                meets world-class grooming. With years of experience, I
                understand the unique hair textures and styling preferences of
                Nigerian men.
              </p>
              <p>
                From classic Afro cuts to modern fades, I celebrate Nigerian
                style while incorporating international trends. My expertise
                lies in techniques that work perfectly with African hair types,
                ensuring you get the perfect cut every time.
              </p>
              <p>
                Step into my shop and feel the warmth of Nigerian hospitality. I
                create a space where every man feels like royalty - because
                every Nigerian man deserves to look and feel his best.
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
          <div className="services-grid">
            <div className="service-card">
              <h3>Classic Cut</h3>
              <p>
                Timeless haircuts with modern techniques. Includes consultation,
                precision cutting, and styling.
              </p>
              <span className="service-price">₦15,000</span>
            </div>
            <div className="service-card">
              <h3>Skin Fade</h3>
              <p>
                Professional fade cuts with seamless blending. Our barbers
                create the perfect gradient for any style.
              </p>
              <span className="service-price">₦20,000</span>
            </div>
            <div className="service-card">
              <h3>Beard Sculpting</h3>
              <p>
                Expert beard trimming and shaping to complement your facial
                structure and personal style.
              </p>
              <span className="service-price">₦12,000</span>
            </div>
            <div className="service-card">
              <h3>Full Service</h3>
              <p>
                Complete grooming package including cut, beard trim, hot towel
                finish, and styling.
              </p>
              <span className="service-price">₦30,000</span>
            </div>
            <div className="service-card">
              <h3>Hair & Beard Coloring</h3>
              <p>
                Professional coloring services to enhance your look with natural
                or bold color choices.
              </p>
              <span className="service-price">₦25,000</span>
            </div>
            <div className="service-card">
              <h3>Hot Towel Shave</h3>
              <p>
                Traditional straight razor shave with hot towel treatment and
                aftercare.
              </p>
              <span className="service-price">₦18,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Look Sharp, Oga?</h2>
            <p>
              Book your appointment today and join the RICHYS CUTS Naija family.
              Experience grooming that celebrates your Nigerian heritage with
              international flair. Walk-ins welcome, but appointments are
              recommended.
            </p>
            <Link to="/queue" className="btn btn-primary cta-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
