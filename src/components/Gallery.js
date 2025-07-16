import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
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
      type: "barbering"
    },
    {
      id: 2,
      category: "Classic Cuts",
      title: "Classic Side Part",
      description: "Timeless elegance with a perfectly defined side part",
      image: classicSidePart,
      type: "barbering"
    },
    {
      id: 3,
      category: "Modern Styles",
      title: "Textured Quiff",
      description: "Modern interpretation with natural texture",
      image: texturedQuiff,
      type: "barbering"
    },
    {
      id: 4,
      category: "Modern Styles",
      title: "Pompadour",
      description: "Bold and stylish with vintage-inspired volume",
      image: pompadour,
      type: "barbering"
    },
    {
      id: 5,
      category: "Modern Styles",
      title: "Textured Crop",
      description: "Contemporary crop with textured finish",
      image: texturedCrop,
      type: "barbering"
    },
    {
      id: 6,
      category: "Fades",
      title: "Skin Fade",
      description: "Ultra-clean fade to skin perfection",
      image: skinFade,
      type: "barbering"
    },
    {
      id: 7,
      category: "Fades",
      title: "Mid Fade",
      description: "Balanced fade with smooth transitions",
      image: midFade,
      type: "barbering"
    },
    {
      id: 8,
      category: "Premium Collection",
      title: "Executive Cut",
      description: "Professional styling for business leaders",
      image: executiveCut,
      type: "barbering"
    },
    {
      id: 9,
      category: "Signature Styles",
      title: "Professional Examples",
      description: "Our finest precision cuts and styling expertise",
      image: professionalHaircutExamples,
      type: "barbering"
    },
    // Tailoring Portfolio (using placeholder images for now)
    {
      id: 10,
      category: "Custom Suits",
      title: "Bespoke Business Suit",
      description: "Hand-tailored three-piece suit with perfect fit",
      image: executiveCut, // Placeholder - would need actual suit images
      type: "tailoring"
    },
    {
      id: 11,
      category: "Traditional Wear",
      title: "Classic Agbada",
      description: "Traditional Nigerian ceremonial wear with modern touches",
      image: gentlemansStyle, // Placeholder
      type: "tailoring"
    },
    {
      id: 12,
      category: "Casual Wear",
      title: "Custom Shirt Collection",
      description: "Perfectly fitted shirts for everyday elegance",
      image: classicSidePart, // Placeholder
      type: "tailoring"
    },
    {
      id: 13,
      category: "Traditional Wear",
      title: "Senator Wear",
      description: "Contemporary Nigerian formal wear for special occasions",
      image: texturedQuiff, // Placeholder
      type: "tailoring"
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
    "Casual Wear"
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
            Browse through our collection of precision cuts, styling expertise, and custom tailoring work.
            From fresh haircuts to bespoke suits, each piece showcases our commitment to quality craftsmanship
            and attention to detail.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery-filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
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
            Our expert barbers and master tailor are ready to help you achieve the perfect look -
            from precision cuts to custom-fitted clothing that matches your personality and lifestyle.
          </p>
          <button className="cta-button" onClick={handleBookNow}>
            Book Your Service
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
