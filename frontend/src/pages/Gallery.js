import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  professionalHaircutExamples,
  executiveCut,
  gentlemansStyle,
  skinFade,
  texturedQuiff,
  classicSidePart,
  midFade,
  pompadour,
  texturedCrop,
} from "../assets/images";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Styles");
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/queue");
  };

  const galleryItems = [
    // Barbering Portfolio
    {
      id: 1,
      category: "Classic Cuts",
      title: "Gentleman's Style",
      description: "Sophisticated styling for the modern gentleman",
      image: gentlemansStyle,
      type: "barbering",
    },
    {
      id: 2,
      category: "Classic Cuts",
      title: "Classic Side Part",
      description: "Timeless elegance with a perfectly defined side part",
      image: classicSidePart,
      type: "barbering",
    },
    {
      id: 3,
      category: "Modern Styles",
      title: "Textured Quiff",
      description: "Modern interpretation with natural texture",
      image: texturedQuiff,
      type: "barbering",
    },
    {
      id: 4,
      category: "Modern Styles",
      title: "Pompadour",
      description: "Bold and stylish with vintage-inspired volume",
      image: pompadour,
      type: "barbering",
    },
    {
      id: 5,
      category: "Modern Styles",
      title: "Textured Crop",
      description: "Contemporary crop with textured finish",
      image: texturedCrop,
      type: "barbering",
    },
    {
      id: 6,
      category: "Fades",
      title: "Skin Fade",
      description: "Ultra-clean fade to skin perfection",
      image: skinFade,
      type: "barbering",
    },
    {
      id: 7,
      category: "Fades",
      title: "Mid Fade",
      description: "Balanced fade with smooth transitions",
      image: midFade,
      type: "barbering",
    },
    {
      id: 8,
      category: "Premium Collection",
      title: "Executive Cut",
      description: "Professional styling for business leaders",
      image: executiveCut,
      type: "barbering",
    },
    {
      id: 9,
      category: "Signature Styles",
      title: "Professional Examples",
      description: "Our finest precision cuts and styling expertise",
      image: professionalHaircutExamples,
      type: "barbering",
    },
    // Tailoring Portfolio
    {
      id: 10,
      category: "Custom Suits",
      title: "Bespoke Business Suit",
      description: "Hand-tailored three-piece suit with perfect fit",
      image:
        "data:image/svg+xml;base64," +
        btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background:#f8f9fa"><rect width="400" height="300" fill="#e9ecef"/><g transform="translate(200,150)"><path d="M-60,-80 L-60,-20 L-40,-20 L-40,80 L40,80 L40,-20 L60,-20 L60,-80 Z" fill="#2c3e50" stroke="#34495e" stroke-width="2"/><path d="M-50,-70 L-50,-30 L-30,-30 L-30,70 L30,70 L30,-30 L50,-30 L50,-70 Z" fill="#34495e"/><circle cx="0" cy="-90" r="15" fill="#f4d03f"/><path d="M-15,-75 L15,-75" stroke="#2c3e50" stroke-width="2"/><rect x="-10" y="-40" width="20" height="30" fill="#ecf0f1"/><path d="M-8,-35 L8,-35 M-8,-25 L8,-25 M-8,-15 L8,-15" stroke="#bdc3c7" stroke-width="1"/></g><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="16" fill="#2c3e50">Custom Tailored Suit</text></svg>`
        ),
      type: "tailoring",
    },
    {
      id: 11,
      category: "Traditional Wear",
      title: "Classic Agbada",
      description: "Traditional Nigerian ceremonial wear with modern touches",
      image:
        "data:image/svg+xml;base64," +
        btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background:#f8f9fa"><rect width="400" height="300" fill="#e9ecef"/><g transform="translate(200,150)"><path d="M-80,-60 Q-80,-80 -60,-80 L60,-80 Q80,-80 80,-60 L80,60 Q80,80 60,80 L-60,80 Q-80,80 -80,60 Z" fill="#8e44ad" stroke="#9b59b6" stroke-width="3"/><path d="M-70,-50 Q-70,-60 -60,-60 L60,-60 Q70,-60 70,-50 L70,50 Q70,60 60,60 L-60,60 Q-70,60 -70,50 Z" fill="#9b59b6"/><circle cx="0" cy="-90" r="12" fill="#d4af37"/><path d="M-10,-78 L10,-78" stroke="#2c3e50" stroke-width="2"/><path d="M-30,-40 L30,-40 M-25,-30 L25,-30 M-20,-20 L20,-20" stroke="#f1c40f" stroke-width="2"/><path d="M-60,-10 L-40,-10 M40,-10 L60,-10" stroke="#f1c40f" stroke-width="3"/></g><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="16" fill="#2c3e50">Traditional Agbada</text></svg>`
        ),
      type: "tailoring",
    },
    {
      id: 12,
      category: "Casual Wear",
      title: "Custom Shirt Collection",
      description: "Perfectly fitted shirts for everyday elegance",
      image:
        "data:image/svg+xml;base64," +
        btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background:#f8f9fa"><rect width="400" height="300" fill="#e9ecef"/><g transform="translate(200,150)"><path d="M-50,-60 L-50,60 L50,60 L50,-60 Z" fill="#3498db" stroke="#2980b9" stroke-width="2"/><path d="M-45,-55 L-45,55 L45,55 L45,-55 Z" fill="#5dade2"/><path d="M-70,-40 L-50,-40 L-50,-20 L-70,-20 Z" fill="#3498db"/><path d="M50,-40 L70,-40 L70,-20 L50,-20 Z" fill="#3498db"/><circle cx="0" cy="-75" r="10" fill="#f4d03f"/><path d="M-8,-68 L8,-68" stroke="#2c3e50" stroke-width="1.5"/><rect x="-5" y="-50" width="10" height="40" fill="#ecf0f1"/><circle cx="-15" cy="-35" r="2" fill="#2c3e50"/><circle cx="-15" cy="-25" r="2" fill="#2c3e50"/><circle cx="-15" cy="-15" r="2" fill="#2c3e50"/><path d="M-40,-10 L40,-10 M-40,0 L40,0 M-40,10 L40,10" stroke="#2980b9" stroke-width="1"/></g><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="16" fill="#2c3e50">Custom Fitted Shirts</text></svg>`
        ),
      type: "tailoring",
    },
    {
      id: 13,
      category: "Traditional Wear",
      title: "Senator Wear",
      description: "Contemporary Nigerian formal wear for special occasions",
      image:
        "data:image/svg+xml;base64," +
        btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background:#f8f9fa"><rect width="400" height="300" fill="#e9ecef"/><g transform="translate(200,150)"><path d="M-55,-70 L-55,70 L55,70 L55,-70 Z" fill="#1abc9c" stroke="#16a085" stroke-width="2"/><path d="M-50,-65 L-50,65 L50,65 L50,-65 Z" fill="#48c9b0"/><circle cx="0" cy="-85" r="12" fill="#f4d03f"/><path d="M-10,-73 L10,-73" stroke="#2c3e50" stroke-width="2"/><rect x="-8" y="-55" width="16" height="35" fill="#ecf0f1"/><path d="M-25,-45 L25,-45 M-20,-35 L20,-35 M-15,-25 L15,-25" stroke="#f1c40f" stroke-width="2"/><path d="M-45,20 L45,20 M-40,30 L40,30 M-35,40 L35,40" stroke="#f39c12" stroke-width="2"/><rect x="-40" y="-15" width="80" height="8" fill="#f1c40f"/></g><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="16" fill="#2c3e50">Senator Traditional Wear</text></svg>`
        ),
      type: "tailoring",
    },
  ];

  const categories = [
    "All Work",
    "Barbering",
    "Tailoring",
    "Classic Cuts",
    "Modern Styles",
    "Fades",
    "Custom Suits",
    "Traditional Wear",
    "Casual Wear",
  ];

  const filteredItems =
    activeCategory === "All Work"
      ? galleryItems
      : activeCategory === "Barbering"
      ? galleryItems.filter((item) => item.type === "barbering")
      : activeCategory === "Tailoring"
      ? galleryItems.filter((item) => item.type === "tailoring")
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <h1>Our Portfolio</h1>
          <p>
            Browse through our collection of precision cuts, styling expertise,
            and custom tailoring work. From fresh haircuts to bespoke suits,
            each piece showcases our commitment to quality craftsmanship and
            attention to detail.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <div
              key={category}
              className={`gallery-filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="gallery-showcase">
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-cta">
          <h2>Ready for Your Complete Transformation?</h2>
          <p>
            Our expert barbers and master tailor are ready to help you achieve
            the perfect look - from precision cuts to custom-fitted clothing
            that matches your personality and lifestyle.
          </p>
          <button className="cta-button" onClick={handleBookNow}>
            Book Your Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
