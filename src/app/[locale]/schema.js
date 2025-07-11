// Enhanced Schema.js for SeekaHost Next.js Application

// Get base URL from environment variable
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seekahost.co.uk';

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumblist`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "@id": `${BASE_URL}/#listItem`,
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}/`
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "SeekaHost Ltd",
      "legalName": "SeekaHost Limited",
      "description": "Professional Web Hosting Services and Domain Registration",
      "foundingDate": "2019",
      "url": `${BASE_URL}/`,
      "telephone": "+94774745512",
      "email": "support@seekahost.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressLocality": "London",
        "addressRegion": "England"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+94774745512",
          "email": "support@seekahost.co.uk",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+94774745512",
          "email": "sales@seekahost.co.uk",
          "availableLanguage": "English"
        }
      ],
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
        "@id": `${BASE_URL}/#organizationLogo`,
        "width": 768,
        "height": 319,
        "caption": "SeekaHost Logo"
      },
      "image": {
        "@id": `${BASE_URL}/#organizationLogo`
      },
      "sameAs": [
        "https://www.instagram.com/seekahost/",
        "https://www.youtube.com/channel/UC4GpPx41PZ_4-e-wa_oltAQ",
        "https://www.linkedin.com/company/6640563/admin/",
        "https://www.facebook.com/seekahost",
        "https://twitter.com/seekahost"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}/`,
      "name": "SeekaHost™",
      "description": "Professional Web Hosting Services",
      "inLanguage": "en-GB",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
        "width": 768,
        "height": 319
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/?s={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      "url": `${BASE_URL}/`,
      "name": "Web Hosting UK: Best Website Hosting Services | SeekaHost",
      "description": "UK Web hosting services company offering domains and WordPress hosting packages with cheap monthly pay plans to get online. Best 24/7 support UK Host!",
      "inLanguage": "en-GB",
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${BASE_URL}/#organization` },
      "breadcrumb": { "@id": `${BASE_URL}/#breadcrumblist` },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
        "@id": `${BASE_URL}/#mainImage`,
        "width": 768,
        "height": 319,
        "caption": "SeekaHost Web Hosting"
      },
      "primaryImageOfPage": { "@id": `${BASE_URL}/#mainImage` },
      "datePublished": "2019-06-06T10:18:26+01:00",
      "dateModified": "2024-12-23T17:37:42+00:00"
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service`,
      "name": "Web Hosting Services",
      "description": "Comprehensive web hosting solutions including shared hosting, VPS, dedicated servers, and domain registration",
      "provider": { "@id": `${BASE_URL}/#organization` },
      "serviceType": "Web Hosting",
      "areaServed": ["GB", "UK", "United Kingdom"],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `${BASE_URL}/`,
        "serviceSmsNumber": "+94774745512",
        "servicePhone": "+94774745512"
      }
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#product`,
      "name": "SeekaHost Web Hosting",
      "brand": {
        "@type": "Brand",
        "name": "SeekaHost"
      },
      "image": "https://www.seekahost.com/wp-content/themes/clickdo-main-theme/images/logo.png",
      "description": "SeekaHost offers cheapest web hosting services for any websites with domain registration and SSL Certificates. Shared and Dedicated IPs & VPS. 100% uptime.",
      "category": "Web Hosting",
      "manufacturer": { "@id": `${BASE_URL}/#organization` },
      "offers": [
        {
          "@type": "Offer",
          "name": "Shared Hosting",
          "priceCurrency": "GBP",
          "price": "2.99",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": `${BASE_URL}/#organization` }
        },
        {
          "@type": "Offer",
          "name": "VPS Hosting",
          "priceCurrency": "GBP",
          "price": "15.99",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": `${BASE_URL}/#organization` }
        },
        {
          "@type": "Offer",
          "name": "Dedicated Server",
          "priceCurrency": "GBP",
          "price": "99.99",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": `${BASE_URL}/#organization` }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "387",
        "reviewCount": "387",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#mainImage`,
      "contentUrl": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
      "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
      "width": 768,
      "height": 319,
      "caption": "SeekaHost Web Hosting Services"
    }
  ]
};

// Simplified organization schema for specific pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "SeekaHost Ltd",
  "legalName": "SeekaHost Limited",
  "description": "Professional Web Hosting Services and Domain Registration",
  "foundingDate": "2019",
  "url": `${BASE_URL}/`,
  "telephone": "+94774745512",
  "email": "support@seekahost.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressLocality": "London",
    "addressRegion": "England"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+94774745512",
    "email": "support@seekahost.co.uk",
    "availableLanguage": "English"
  },
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
    "@id": `${BASE_URL}/#organizationLogo`,
    "width": 768,
    "height": 319,
    "caption": "SeekaHost Logo"
  },
  "image": {
    "@id": `${BASE_URL}/#organizationLogo`
  },
  "sameAs": [
    "https://www.instagram.com/seekahost/",
    "https://www.youtube.com/channel/UC4GpPx41PZ_4-e-wa_oltAQ",
    "https://www.linkedin.com/company/6640563/admin/",
    "https://www.facebook.com/seekahost",
    "https://twitter.com/seekahost"
  ]
};

// Enhanced product schema with offers
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${BASE_URL}/#product`,
  "name": "SeekaHost Web Hosting",
  "brand": {
    "@type": "Brand",
    "name": "SeekaHost"
  },
  "image": "https://www.seekahost.com/wp-content/themes/clickdo-main-theme/images/logo.png",
  "description": "SeekaHost offers cheapest web hosting services for any websites with domain registration and SSL Certificates. Shared and Dedicated IPs & VPS. 100% uptime.",
  "category": "Web Hosting",
  "manufacturer": { "@id": `${BASE_URL}/#organization` },
  "offers": [
    {
      "@type": "Offer",
      "name": "Shared Hosting Plan",
      "priceCurrency": "GBP",
      "price": "2.99",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": `${BASE_URL}/#organization` },
      "url": `${BASE_URL}/shared-hosting`
    },
    {
      "@type": "Offer",
      "name": "VPS Hosting Plan",
      "priceCurrency": "GBP",
      "price": "15.99",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": `${BASE_URL}/#organization` },
      "url": `${BASE_URL}/vps-hosting`
    },
    {
      "@type": "Offer",
      "name": "Dedicated Server Plan",
      "priceCurrency": "GBP",
      "price": "99.99",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": `${BASE_URL}/#organization` },
      "url": `${BASE_URL}/dedicated-servers`
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "387",
    "reviewCount": "387",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// FAQ Schema for better SEO
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of hosting does SeekaHost offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SeekaHost offers shared hosting, VPS hosting, dedicated servers, and WordPress hosting with 24/7 support and 100% uptime guarantee."
      }
    },
    {
      "@type": "Question",
      "name": "Does SeekaHost provide domain registration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SeekaHost provides domain registration services along with SSL certificates and various hosting packages."
      }
    },
    {
      "@type": "Question",
      "name": "What is the uptime guarantee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SeekaHost provides a 100% uptime guarantee for all hosting services with 24/7 customer support."
      }
    }
  ]
};

// Service schema for specific hosting services
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/#service`,
  "name": "Web Hosting Services",
  "description": "Comprehensive web hosting solutions including shared hosting, VPS, dedicated servers, and domain registration",
  "provider": { "@id": `${BASE_URL}/#organization` },
  "serviceType": "Web Hosting",
  "areaServed": ["GB", "UK", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hosting Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shared Hosting"
        },
        "price": "2.99",
        "priceCurrency": "GBP"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VPS Hosting"
        },
        "price": "15.99",
        "priceCurrency": "GBP"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dedicated Server"
        },
        "price": "99.99",
        "priceCurrency": "GBP"
      }
    ]
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `${BASE_URL}/`,
    "serviceSmsNumber": "+94774745512",
    "servicePhone": "+94774745512"
  }
};

// Helper function to generate dynamic breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs, baseUrl = BASE_URL) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  };
};

// Helper function to generate page-specific schema
export const generatePageSchema = (pageData, baseUrl = BASE_URL) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url.startsWith('http') ? pageData.url : `${baseUrl}${pageData.url}`,
    "inLanguage": "en-GB",
    "isPartOf": { "@id": `${baseUrl}/#website` },
    "about": { "@id": `${baseUrl}/#organization` },
    "datePublished": pageData.datePublished,
    "dateModified": pageData.dateModified || new Date().toISOString()
  };
};

// Helper function to generate article schema for blog posts
export const generateArticleSchema = (articleData, baseUrl = BASE_URL) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Person",
      "name": articleData.author || "SeekaHost Team"
    },
    "publisher": { "@id": `${baseUrl}/#organization` },
    "datePublished": articleData.datePublished,
    "dateModified": articleData.dateModified || articleData.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleData.url.startsWith('http') ? articleData.url : `${baseUrl}${articleData.url}`
    },
    "image": articleData.image || "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg"
  };
};

// Function to get the base URL (useful for SSR/SSG)
export const getBaseUrl = () => BASE_URL;