export const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.seekahost.com/#breadcrumblist",
        "itemListElement": [
          {
            "@type": "ListItem",
            "@id": "https://www.seekahost.com/#listItem",
            "position": 1,
            "name": "Home"
          }
        ]
      },
      {
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
      },
      {
        "@type": "WebPage",
        "@id": "https://www.seekahost.com/#webpage",
        "url": "https://www.seekahost.com/",
        "name": "SeekaHost® Official Web Hosting Site for Domain Hosting | SeekaHost",
        "description": "Official SeekaHost site! Web hosting services, domain registration and SSL Certificates. Managed WordPress, Shared, Dedicated & VPS. 100% uptime & 24/7 Support.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://www.seekahost.com/#website" },
        "breadcrumb": { "@id": "https://www.seekahost.com/#breadcrumblist" },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.seekahost.com/wp-content/uploads/2019/09/SeekaHost.jpg",
          "@id": "https://www.seekahost.com/#mainImage",
          "width": 768,
          "height": 319,
          "caption": "SeekaHost"
        },
        "primaryImageOfPage": { "@id": "https://www.seekahost.com/#mainImage" },
        "datePublished": "2019-06-06T10:18:26+01:00",
        "dateModified": "2024-12-23T17:37:42+00:00"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.seekahost.com/#website",
        "url": "https://www.seekahost.com/",
        "name": "SeekaHost™",
        "description": "Web Hosting Services",
        "inLanguage": "en-US",
        "publisher": { "@id": "https://www.seekahost.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.seekahost.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
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