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
    {
      id: 1,
      category: "Classic Cuts",
      title: "Gentleman's Style",
      description: "Sophisticated styling for the modern gentleman",
      image: gentlemansStyle,
    },
    {
      id: 2,
      category: "Classic Cuts",
      title: "Classic Side Part",
      description: "Timeless elegance with a perfectly defined side part",
      image: classicSidePart,
    },
    {
      id: 3,
      category: "Modern Styles",
      title: "Textured Quiff",
      description: "Modern interpretation with natural texture",
      image: texturedQuiff,
    },
    {
      id: 4,
      category: "Modern Styles",
      title: "Pompadour",
      description: "Bold and stylish with vintage-inspired volume",
      image: pompadour,
    },
    {
      id: 5,
      category: "Modern Styles",
      title: "Textured Crop",
      description: "Contemporary crop with textured finish",
      image: texturedCrop,
    },
    {
      id: 6,
      category: "Fades",
      title: "Skin Fade",
      description: "Ultra-clean fade to skin perfection",
      image: skinFade,
    },
    {
      id: 7,
      category: "Fades",
      title: "Mid Fade",
      description: "Balanced fade with smooth transitions",
      image: midFade,
    },
    {
      id: 8,
      category: "Premium Collection",
      title: "Executive Cut",
      description: "Professional styling for business leaders",
      image: executiveCut,
    },
    {
      id: 9,
      category: "Signature Styles",
      title: "Professional Examples",
      description: "Our finest precision cuts and styling expertise",
      image: professionalHaircutExamples,
    },
  ];

  const categories = [
    "All Styles",
    "Classic Cuts",
    "Modern Styles",
    "Fades",
    "Premium Collection",
    "Signature Styles",
  ];

  const filteredItems =
    activeCategory === "All Styles"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <h1>Our Work</h1>
          <p>
            Browse through our collection of precision cuts and styling
            expertise. Each cut is tailored to enhance your unique features and
            personal style.
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
          <h2>Ready for Your New Look?</h2>
          <p>
            Our expert barbers are ready to help you find the perfect style that
            matches your personality and lifestyle.
          </p>
          <button className="cta-button" onClick={handleBookNow}>
            Book Your Cut
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
