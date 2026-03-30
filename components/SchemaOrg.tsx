export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Ordinary Company",
    "alternateName": "Ordinary",
    "url": "https://www.stopbeingordinary.com",
    "logo": "https://www.stopbeingordinary.com/logo.png",
    "description": "We deliver Visual Infrastructure as a Service (VIaaS) in the modern age of AI-augmented design. Specializing in Branding, Motion Design, Social Media, and Marketing Content Production.",
    "foundingDate": "2026",
    "slogan": "Stop Being Ordinary.",
    "knowsAbout": [
      "Visual Infrastructure as a Service",
      "VIaaS",
      "AI-augmented Design",
      "Branding",
      "Motion Design",
      "Social Media Content Production",
      "Marketing Content Production"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding",
          "description": "Systematic and precise brand identity construction."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motion Design",
          "description": "Precision engineered motion graphics and 3D sequences."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Content Production",
          "description": "AI-augmented content pipelines for modern platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Content Production",
          "description": "Data-driven marketing and systematic market infiltration."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
