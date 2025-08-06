import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marcel Grace Infotech",
    "alternateName": "Marcel Grace",
    "url": "https://marcelgrace.com",
    "logo": "https://marcelgrace.com/assets/mg_logo2.png",
    "description": "Leading software development company providing innovative digital solutions, web development, mobile apps, and custom software services.",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://marcelgrace.com/contact"
    },
    "sameAs": [
      "https://github.com/marcelgrace",
      "https://www.linkedin.com/company/marcelgrace"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": "Software Development",
      "description": "Custom software development, web applications, mobile apps, and cloud solutions"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
