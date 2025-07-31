import { routing } from '@/i18n/routing';

export default async function sitemap() {
  // Define your routes (without locale prefix)
  const routes = [
    // Main pages
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.8 },

    // Domain & SSL
    { path: '/register-domain', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/domain-transfer', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/domain-pricing', changeFrequency: 'monthly', priority: 0.8 },

    // Hosting Services
    { path: '/business-web-hosting', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/cheap-web-hosting-with-cpanel', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/nodejs-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/small-business-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/agency-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/hosting-migration', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/london-server-hosting', changeFrequency: 'monthly', priority: 0.7 },

    // WordPress Services
    { path: '/wordpress-hosting', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/managed-wordpress', changeFrequency: 'monthly', priority: 0.9 },

    // eCommerce
    { path: '/woocommerce-hosting', changeFrequency: 'monthly', priority: 0.9 },

    // Marketing Services
    { path: '/google-advertising-campaigns', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/free-business-listing', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/seo-consultancy', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/online-marketing-courses', changeFrequency: 'monthly', priority: 0.6 },

    // Servers
    { path: '/dedicated-servers', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/cloud-servers', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/vps-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/n8n-vps-hosting', changeFrequency: 'monthly', priority: 0.7 },

    // Feature Comparison Pages
    { path: '/shared-hosting-features', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/managed-wordpress-features', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/woocommerce-hosting-features', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/wordpress-hosting-features', changeFrequency: 'monthly', priority: 0.7 },

    // Custom Plans
    { path: '/personalized-hosting', changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Generate sitemap entries for all locales
  const sitemapEntries = [];
  
  routing.locales.forEach(locale => {
    routes.forEach(route => {
      let url;
      
      if (locale === routing.defaultLocale) {
        // For default locale (en), don't include locale prefix
        url = route.path === '' 
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/`
          : `${process.env.NEXT_PUBLIC_BASE_URL}${route.path}`;
      } else {
        // For non-default locales, include locale prefix
        url = route.path === '' 
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`
          : `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}${route.path}`;
      }
        
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });
  });

  return sitemapEntries;
}