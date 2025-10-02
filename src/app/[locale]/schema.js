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
          "email": "support@seekahost.co.uk",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "sales@seekahost.co.uk",
          "availableLanguage": "English"
        }
      ],
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/images/shared/header-logo.webp`,
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
        "https://x.com/atSeekaHost"
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
        "url": `${BASE_URL}/images/shared/header-logo.webp`,
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
        "url": `${BASE_URL}/images/shared/header-logo.webp`,
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
        "serviceUrl": `${BASE_URL}/`
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
      "image": `${BASE_URL}/images/shared/header-logo.webp`,
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
          "price": "2.99",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": `${BASE_URL}/#organization` }
        },
        {
          "@type": "Offer",
          "name": "Dedicated Server",
          "priceCurrency": "GBP",
          "price": "2.99",
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
      "contentUrl": `${BASE_URL}/images/shared/header-logo.webp`,
      "url": `${BASE_URL}/images/shared/header-logo.webp`,
      "width": 768,
      "height": 319,
      "caption": "SeekaHost Web Hosting Services"
    }
  ]
};

// Function to get the base URL (useful for SSR/SSG)
export const getBaseUrl = () => BASE_URL;