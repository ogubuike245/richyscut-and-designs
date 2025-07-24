// Image assets for the barbershop website
// All imports verified to match existing files in the directory

// Logo and branding
import barbershopLogo from "./Richys Cuts and Designs Logo.svg";

// Hero and main images

import aboutUsIntro from "./about-us_home.webp";
import professionalHaircutExamples from "./professional-haircut-examples.webp"; // Haircut style images
import classicSidePart from "./classic-side-part.webp";
import executiveCut from "./executive-cut.webp";
import gentlemansStyle from "./gentlemans-style.webp";
import midFade from "./mid-fade.webp";
import pompadour from "./Pompadour.webp";
import skinFade from "./skin-fade.webp";
import texturedCrop from "./textured-crop.webp";
import texturedQuiff from "./textured-quiff.webp";

// Named exports - organized by category
export {
  // Logo and branding
  barbershopLogo,

  // Hero and main images
  aboutUsIntro,
  professionalHaircutExamples,
  // Individual haircut styles
  classicSidePart,
  executiveCut,
  gentlemansStyle,
  midFade,
  pompadour,
  skinFade,
  texturedCrop,
  texturedQuiff,
};

// Default export - all images in one object for convenience
const images = {
  // Logo and branding
  barbershopLogo,

  // Hero and main images

  aboutUsIntro,
  professionalHaircutExamples,

  // Individual haircut styles
  classicSidePart,
  executiveCut,
  gentlemansStyle,
  midFade,
  pompadour,
  skinFade,
  texturedCrop,
  texturedQuiff,
};

export default images;
