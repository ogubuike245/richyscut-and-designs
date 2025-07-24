import React from "react";
import { SEOHead } from "../components/common";

import {
  aboutUsIntro,
  classicSidePart,
  executiveCut,
  gentlemansStyle,
  midFade,
} from "../assets/images";

function Home() {
  return (
    <div className="home-page">
      <SEOHead
        title="Professional Barber & Tailoring Services"
        description="Premium barbering and custom tailoring services. Book online appointments for haircuts, beard trims, and custom clothing. Expert craftsmanship with 10+ years experience."
        keywords="barber, haircut, beard trim, tailoring, custom clothing, senator wear, casual wear, online booking, professional grooming"
      />
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-container">
          <div className="home-hero-content">
            <div className="home-hero-left">
              <h1>PREMIUM CUTS, PERFECT FITS</h1>
              <p>Where Style Meets Craftsmanship - Your Look, Our Passion</p>
              <div className="home-hero-buttons">
                <a href="/queue" className="home-btn-primary">
                  BOOK APPOINTMENT
                </a>
                <a href="/gallery" className="home-btn-secondary">
                  VIEW GALLERY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="home-experience">
        <div className="home-container">
          <div className="home-experience-content">
            <div className="home-experience-left">
              <div className="home-experience-badge">
                <span className="home-badge-text">PROFESSIONAL</span>
              </div>
              <h2>BARBERING & TAILORING EXCELLENCE</h2>
              <p>
                Experience premium grooming and custom tailoring at our modern
                studio. Book your appointment online and enjoy expert
                craftsmanship in a comfortable, professional environment
                designed for your style needs.
              </p>
              <div className="home-experience-stats">
                <div className="home-stat">
                  <div className="home-stat-number">10+</div>
                  <div className="home-stat-label">YEARS EXPERIENCE</div>
                </div>
                <div className="home-stat">
                  <div className="home-stat-number">100+</div>
                  <div className="home-stat-label">HAPPY CLIENTS</div>
                </div>
              </div>
            </div>
            <div className="home-experience-right">
              <div className="home-experience-image">
                <img src={aboutUsIntro} alt="Professional barber service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services">
        <div className="home-container">
          <div className="home-services-header">
            <h2>OUR SERVICES</h2>
            <p>
              From precision haircuts to custom tailoring, we offer
              comprehensive grooming and styling services. Our expert craftsmen
              combine traditional techniques with modern trends to deliver
              exceptional results that enhance your personal style and
              confidence.
            </p>
          </div>
          <div className="home-services-grid">
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2zm0 12c-1.1 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>ADULT HAIRCUT</h3>
              <p>
                Professional haircut services for adults. Expert styling and
                grooming to keep you looking sharp and confident for any
                occasion.
              </p>
              <div className="home-price">₦ 3,000</div>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.66 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>KIDS HAIRCUT</h3>
              <p>
                Gentle and fun haircut experience for children. Patient stylists
                who make sure your little ones feel comfortable and happy.
              </p>
              <div className="home-price">₦ 2,000</div>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.69 2 6 4.69 6 8v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-3.31-2.69-6-6-6zm-2 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>BEARD TRIM</h3>
              <p>
                Professional beard trimming and shaping services. Maintain your
                facial hair with precision cuts and expert grooming techniques.
              </p>
              <div className="home-price">₦ 1,500</div>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>SENATOR</h3>
              <p>
                Traditional Nigerian senator wear with authentic African
                designs. Premium quality fabrics and expert tailoring for
                cultural elegance.
              </p>
              <div className="home-price">₦ 30,000</div>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 4l-4-4-4 4v2l-4 2v14h16V8l-4-2V4zm-4-1.5L13.5 4h-3L12 2.5zM7 9l3-1.5V6h4v1.5L17 9v11H7V9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>CASUAL WEAR</h3>
              <p>
                Comfortable casual clothing for everyday style. Relaxed fits and
                trendy designs perfect for your leisure and social activities.
              </p>
              <div className="home-price">₦ 15,000</div>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>CLOTHES AMENDMENTS</h3>
              <p>
                Professional clothing alterations and repairs. Expert tailoring
                services to ensure your garments fit perfectly and last longer.
              </p>
              <div className="home-price">₦ 5,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="home-why-choose">
        <div className="home-container">
          <div className="home-why-choose-header">
            <h2>WHY CHOOSE US</h2>
            <p>
              Experience the finest barbering and tailoring services at our
              studio. We combine traditional craftsmanship with modern
              techniques and convenient online booking.
            </p>
          </div>
          <div className="home-why-choose-grid">
            <div className="home-why-choose-item">
              <div className="home-why-choose-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>PREMIUM STUDIO</h3>
              <p>
                Modern, clean facility with professional-grade equipment and
                premium products for exceptional results.
              </p>
            </div>
            <div className="home-why-choose-item">
              <div className="home-why-choose-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>EXPERT CRAFTSMEN</h3>
              <p>
                Skilled barber and tailor with 10+ years experience in precision
                cuts, styling, and custom tailoring.
              </p>
            </div>
            <div className="home-why-choose-item">
              <div className="home-why-choose-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>EASY BOOKING</h3>
              <p>
                Convenient online appointment booking system. Skip the wait and
                secure your preferred time slot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="home-gallery">
        <div className="home-container">
          <div className="home-gallery-header">
            <div className="home-gallery-title">
              <h2>PHOTO GALLERY</h2>
              <p>
                Explore our portfolio of precision cuts, stylish fades, and
                expert grooming work. See the quality and attention to detail
                that sets our barbershop apart.
              </p>
            </div>
            <div className="home-gallery-button">
              <a href="/gallery" className="home-btn-explore">
                VIEW MORE →
              </a>
            </div>
          </div>
          <div className="home-gallery-grid">
            <div className="home-gallery-item">
              <img src={classicSidePart} alt="Classic side part haircut" />
            </div>
            <div className="home-gallery-item">
              <img src={executiveCut} alt="Executive haircut style" />
            </div>
            <div className="home-gallery-item">
              <img src={gentlemansStyle} alt="Gentleman's haircut style" />
            </div>
            <div className="home-gallery-item">
              <img src={midFade} alt="Mid fade haircut" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
