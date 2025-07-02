export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.seekahost.co.uk/#breadcrumblist",
      "itemListElement": [
        {
          "@type": "ListItem",
          "@id": "https://www.seekahost.co.uk/#listItem",
          "position": 1,
          "name": "Home"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.seekahost.co.uk/#organization",
      "name": "SeekaHost Ltd",
      "description": "Web Hosting Services",
      "url": "https://www.seekahost.co.uk/",
      "telephone": "+94774745512",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
        "@id": "https://www.seekahost.co.uk/#organizationLogo",
        "width": 768,
        "height": 319,
        "caption": "SeekaHost"
      },
      "image": {
        "@id": "https://www.seekahost.co.uk/#organizationLogo"
      },
      "sameAs": [
        "https://www.instagram.com/seekahost/",
        "https://www.youtube.com/channel/UC4GpPx41PZ_4-e-wa_oltAQ",
        "https://www.linkedin.com/company/6640563/admin/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.seekahost.co.uk/#webpage",
      "url": "https://www.seekahost.co.uk/",
      "name": "Web Hosting UK: Best Website Hosting Services | SeekaHost",
      "description": "UK Web hosting services company offering domains and WordPress hosting packages with cheap monthly pay plans to get online. Best 24/7 support UK Host!",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.seekahost.co.uk/#website" },
      "breadcrumb": { "@id": "https://www.seekahost.co.uk/#breadcrumblist" },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
        "@id": "https://www.seekahost.co.uk/#mainImage",
        "width": 768,
        "height": 319,
        "caption": "SeekaHost"
      },
      "primaryImageOfPage": { "@id": "https://www.seekahost.co.uk/#mainImage" },
      "datePublished": "2019-06-06T10:18:26+01:00",
      "dateModified": "2024-12-23T17:37:42+00:00"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.seekahost.co.uk/#website",
      "url": "https://www.seekahost.co.uk/",
      "name": "SeekaHost™",
      "description": "Web Hosting Services",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://www.seekahost.co.uk/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.seekahost.co.uk/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Product",
      "name": "SeekaHost",
      "brand": "SeekaHost",
      "image": "https://www.seekahost.com/wp-content/themes/clickdo-main-theme/images/logo.png",
      "description": "SeekaHost offers cheapest web hosting services for any websites with domain registration and SSL Certificates. Shared and Dedicated IPs & VPS. 100% uptime.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "387",
        "reviewCount": "387"
      }
    }
  ]
};


export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.seekahost.com/#organization",
  "name": "SeekaHost Ltd",
  "description": "Web Hosting Services",
  "url": "https://www.seekahost.com/",
  "telephone": "+18887477170",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
    "@id": "https://www.seekahost.com/#organizationLogo",
    "width": 768,
    "height": 319,
    "caption": "SeekaHost"
  },
  "image": {
    "@id": "https://www.seekahost.com/#organizationLogo"
  },
  "sameAs": [
    "https://www.instagram.com/seekahost/",
    "https://www.youtube.com/channel/UC4GpPx41PZ_4-e-wa_oltAQ",
    "https://www.linkedin.com/company/6640563/admin/"
  ]
};


export const productSchema = {
  "@context": "http://schema.org/",
  "@type": "Product",
  "name": "SeekaHost",
  "brand": "SeekaHost",
  "image": "https://www.seekahost.com/wp-content/themes/clickdo-main-theme/images/logo.png",
  "description": "SeekaHost offers cheapest web hosting services for any websites with domain registration and SSL Certificates. Shared and Dedicated IPs & VPS. 100% uptime.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "387",
    "reviewCount": "387"
  }
};