// Schema templates for service pages
// Copy this code into your service page components

// Web Development Service Schema
export const webDevelopmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "description": "Professional web development services including custom websites, web applications, e-commerce solutions, and responsive design.",
  "provider": {
    "@type": "Organization",
    "name": "Marcel Grace Infotech",
    "url": "https://marcelgrace.com"
  },
  "serviceType": "Web Development",
  "areaServed": "Worldwide"
};

// Mobile App Development Schema
export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile App Development Services",
  "description": "Native and cross-platform mobile app development for iOS and Android platforms.",
  "provider": {
    "@type": "Organization",
    "name": "Marcel Grace Infotech",
    "url": "https://marcelgrace.com"
  },
  "serviceType": "Mobile App Development",
  "areaServed": "Worldwide"
};

// How to implement in a service page:
/*
import Script from 'next/script'

export default function ServicesPage() {
  return (
    <>
      <Script
        id="web-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevelopmentSchema) }}
      />
      <div>
        Your service page content here
      </div>
    </>
  );
}
*/
