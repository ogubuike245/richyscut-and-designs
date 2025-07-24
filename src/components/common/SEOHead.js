import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = 'Richy\'s Cut & Designs - Professional Barber Services',
  description = 'Professional barber services in your area. Book online appointments for haircuts, beard trims, and styling. Quality cuts with experienced barbers.',
  keywords = 'barber, haircut, beard trim, styling, grooming, professional barber, online booking, appointment',
  image = '/favicon.svg',
  url = window.location.href,
  type = 'website'
}) => {
  const siteTitle = 'Richy\'s Cut & Designs';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Richy's Cut & Designs" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Business Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Richy's Cut & Designs",
          "description": description,
          "url": url,
          "telephone": "+1-XXX-XXX-XXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "Your City",
            "addressRegion": "Your State",
            "postalCode": "Your ZIP",
            "addressCountry": "US"
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 09:00-17:00"
          ],
          "priceRange": "$$",
          "serviceType": "Barber Services",
          "hasOfferingCatalog": {
            "@type": "OfferingCatalog",
            "name": "Barber Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Adult Haircut",
                  "description": "Professional haircut for adults"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Beard Trim",
                  "description": "Professional beard trimming and styling"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Kids Haircut",
                  "description": "Haircut services for children"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;