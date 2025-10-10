import { routing } from '@/i18n/routing';
import fetchPosts from '@/data/fetchPosts';

export default async function sitemap() {
  // Define your routes (without locale prefix)
  const routes = [
    // Main pages
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact-us', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.8 },

    // Domain & SSL
    { path: '/register-domain', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/domain-transfer', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/domain-pricing', changeFrequency: 'monthly', priority: 0.8 },

    // Hosting Services
    { path: '/business-web-hosting', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/cheap-web-hosting', changeFrequency: 'monthly', priority: 0.9 },
    // { path: '/nodejs-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/small-business-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/agency-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/business-email-hosting', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/hosting-migration', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/london-server-hosting', changeFrequency: 'monthly', priority: 0.7 },

    // WordPress Services
    { path: '/wordpress-hosting', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/managed-wordpress', changeFrequency: 'monthly', priority: 0.9 },

    // eCommerce
    { path: '/woocommerce-hosting', changeFrequency: 'monthly', priority: 0.9 },

    // Marketing Services
    // { path: '/google-advertising-campaigns', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/free-business-listing', changeFrequency: 'monthly', priority: 0.6 },
    // { path: '/seo-consultancy', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/online-marketing-courses', changeFrequency: 'monthly', priority: 0.6 },

    // Servers
    { path: '/dedicated-servers', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/cloud-servers', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/vps-hosting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/n8n-vps-hosting', changeFrequency: 'monthly', priority: 0.7 },

    // Feature Comparison Pages
    // { path: '/shared-hosting-features', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/managed-wordpress-features', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/woocommerce-hosting-features', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/wordpress-hosting-features', changeFrequency: 'monthly', priority: 0.7 },

    // Custom Plans
    { path: '/personalized-hosting', changeFrequency: 'monthly', priority: 0.7 },
  ];

  try {
    // Fetch all blogs
    const allBlogs = await fetchPosts('sort[0]=publishedAt:desc');

    // Get categories from blogs if they exist
    const categoriesResponse = await fetchPosts();
    const uniqueCategories = [...new Set(
      categoriesResponse.data?.flatMap(post =>
        post.postPrimary?.categories || []
      ).filter(Boolean) || []
    )];
    // Generate sitemap entries for all locales
    const sitemapEntries = [];

    // 🟢 Base routes only (no locale prefixes)
    routes.forEach(route => {
      const url =
        route.path === ''
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/`
          : `${process.env.NEXT_PUBLIC_BASE_URL}${route.path}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });

    // 🟢 Blog posts (base only)
    if (allBlogs.data?.length) {
      allBlogs.data.forEach(blog => {
        sitemapEntries.push({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/${blog.postSlug}`,
          lastModified: new Date(blog.updatedAt || blog.publishedAt),
          changeFrequency: 'weekly',
          priority: 1,
        });
      });
    }

    // 🟢 Category pages (base only)
    if (uniqueCategories.length) {
      uniqueCategories.forEach(category => {
        const categorySlug = category
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');

        sitemapEntries.push({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/category/${categorySlug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.9,
        });
      });
    }

    // 🔴 Locale-based code (commented out for now)
    /*
    routing.locales.forEach(locale => {
      // Add static routes
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

      // Add blog posts for each locale
      if (allBlogs.data?.length) {
        allBlogs.data.forEach(blog => {
          let blogUrl;
          
          if (locale === routing.defaultLocale) {
            blogUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${blog.postSlug}`;
          } else {
            blogUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${blog.postSlug}`;
          }

          sitemapEntries.push({
            url: blogUrl,
            lastModified: new Date(blog.updatedAt || blog.publishedAt),
            changeFrequency: 'weekly',
            priority: 1,
          });
        });
      }

      // Add category pages for each locale
      if (uniqueCategories.length) {
        uniqueCategories.forEach(category => {
          let categoryUrl;
          const categorySlug = category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

          if (locale === routing.defaultLocale) {
            categoryUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/category/${categorySlug}`;
          } else {
            categoryUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/blog/category/${categorySlug}`;
          }

          sitemapEntries.push({
            url: categoryUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
          });
        });
      }
    });
    */

    return sitemapEntries;

  } catch (error) {
    console.error('Error generating sitemap:', error);

    // 🟢 Fallback: Base routes only
    const sitemapEntries = [];

    routes.forEach(route => {
      const url =
        route.path === ''
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/`
          : `${process.env.NEXT_PUBLIC_BASE_URL}${route.path}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });

    // 🔴 Fallback: Locale-based sitemap (commented out)
    /*
    routing.locales.forEach(locale => {
      routes.forEach(route => {
        let url;
        
        if (locale === routing.defaultLocale) {
          url = route.path === ''
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/`
            : `${process.env.NEXT_PUBLIC_BASE_URL}${route.path}`;
        } else {
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
    */

    return sitemapEntries;
  }
}
