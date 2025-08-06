// Add this to your service pages for better SEO
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
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Development",
          "description": "Tailored web applications built with modern technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Development",
          "description": "Online store development with payment integration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Responsive Web Design",
          "description": "Mobile-friendly website design and development"
        }
      }
    ]
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://marcelgrace.com/services"
  }
};

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

// Example of how to implement in a service page component:
/*
export default function ServicesPage() {
  return (
    <>
      <script
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
