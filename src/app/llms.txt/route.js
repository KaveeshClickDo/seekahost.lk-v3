import { routing } from '@/i18n/routing';
import fetchPosts from '@/data/fetchPosts';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dev.seekahost.co.uk';
  
  try {
    // Fetch all posts
    const allPosts = await fetchPosts('sort[0]=publishedAt:desc');
    
    // Get categories from the posts
    const categoriesResponse = await fetchPosts();
    const uniqueCategories = [...new Set(
      categoriesResponse.data?.flatMap(post => 
        post.postPrimary?.categories || []
      ).filter(Boolean) || []
    )];

    // All posts (sorted by publication date)
    const posts = allPosts.data || [];
    
    // Build llms.txt content
    const llmsContent = `# llms.txt

## About This Site
Professional web hosting and domain services provider offering comprehensive digital solutions.
URL: ${baseUrl}
Last Updated: ${new Date().toISOString().split('T')[0]}
Languages: ${routing.locales.join(', ')}
Default Language: ${routing.defaultLocale}

## Business Focus
- Web Hosting Services (Shared, WordPress, WooCommerce, Business)
- Domain Registration & Management
- Cloud & VPS Solutions
- Dedicated Servers
- Website Migration Services
- Specialized Hosting (N8N, Agency, Small Business)

## Site Structure

### Main Pages
- Homepage: ${baseUrl}
- About: ${baseUrl}/about-us
- Contact: ${baseUrl}/contact-us
- Pricing: ${baseUrl}/pricing
- Blog: ${baseUrl}/blog

### Hosting Services
- Business Web Hosting: ${baseUrl}/business-web-hosting
- Cheap Web Hosting with cPanel: ${baseUrl}/cheap-web-hosting
- Small Business Hosting: ${baseUrl}/small-business-hosting
- Agency Hosting: ${baseUrl}/agency-hosting
- Business Email Hosting: ${baseUrl}/business-email-hosting
- Hosting Migration: ${baseUrl}/hosting-migration
- London Server Hosting: ${baseUrl}/london-server-hosting

### WordPress Services
- WordPress Hosting: ${baseUrl}/wordpress-hosting
- Managed WordPress: ${baseUrl}/managed-wordpress

### eCommerce
- WooCommerce Hosting: ${baseUrl}/woocommerce-hosting

### Domain Services
- Register Domain: ${baseUrl}/register-domain
- Domain Transfer: ${baseUrl}/domain-transfer
- Domain Pricing: ${baseUrl}/domain-pricing

### Server Solutions
- Dedicated Servers: ${baseUrl}/dedicated-servers
- Cloud Servers: ${baseUrl}/cloud-servers
- VPS Hosting: ${baseUrl}/vps-hosting
- N8N VPS Hosting: ${baseUrl}/n8n-vps-hosting

### Custom Solutions
- Personalized Hosting: ${baseUrl}/personalized-hosting

## Internationalization
The site supports multiple languages with the following structure:
- Default locale (${routing.defaultLocale}): ${baseUrl}/[page]
- Other locales: ${baseUrl}/[locale]/[page]

Supported locales: ${routing.locales.join(', ')}

${uniqueCategories.length > 0 ? `## Blog Categories
${uniqueCategories.map(category => {
  const categorySlug = category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\\s+/g, '-');
  return `- ${category}: ${baseUrl}/blog/category/${categorySlug}`;
}).join('\n')}` : ''}

${posts.length > 0 ? `## Blog Posts
${posts.map(post => {
  const title = post.title || 'Untitled';
  const slug = post.postSlug || '';
  const publishedAt = new Date(post.publishedAt || post.createdAt).toISOString().split('T')[0];
  const excerpt = post.postPrimary?.excerpt || '';
  const categories = post.postPrimary?.categories?.join(', ') || 'Uncategorized';
  
  return `- [${title}](${baseUrl}/${slug}) (${publishedAt})
  Categories: ${categories}${excerpt ? `\n  ${excerpt.substring(0, 150)}${excerpt.length > 150 ? '...' : ''}` : ''}`;
}).join('\n\n')}` : `## Blog Posts
Currently building our blog content. Check back soon for hosting tips, tutorials, and industry insights.`}

## Service Categories
- **Shared Hosting**: Affordable hosting solutions for small websites and blogs
- **WordPress Hosting**: Optimized hosting specifically for WordPress sites
- **Business Hosting**: Professional hosting with enhanced performance and support
- **WooCommerce Hosting**: Specialized hosting for online stores and eCommerce
- **VPS & Cloud**: Scalable virtual private servers and cloud solutions
- **Dedicated Servers**: High-performance dedicated server solutions
- **Domain Services**: Domain registration, transfer, and management

## Technical Specifications
- Built with Next.js 15
- Internationalization (i18n) support
- Content management through Strapi CMS
- SEO optimized with proper meta tags
- Responsive design for all devices
- Performance optimized hosting infrastructure

## Content Guidelines
- All service descriptions are accurate and up-to-date
- Pricing information is regularly reviewed
- Technical documentation is maintained by hosting experts
- Customer support resources are comprehensive
- Security and performance best practices are emphasized

## Contact & Business Information
- Professional hosting provider with years of experience
- 24/7 customer support available
- Multiple data centers for optimal performance
- Competitive pricing with transparent policies
- Migration assistance and technical support included

## Crawling Instructions
- Sitemap available at: ${baseUrl}/sitemap.xml
- Robots.txt available at: ${baseUrl}/robots.txt
- All public pages are crawlable
- Rate limiting may apply to prevent abuse
- Dynamic content includes blog posts and service updates

## Special Features
- Multi-language support for international customers
- Specialized hosting solutions (N8N, Agency-specific)
- Custom hosting solutions available
- Server locations include London and other strategic locations
- Migration services for existing websites

---
Generated: ${new Date().toISOString()}
Total Posts: ${posts.length}
Total Categories: ${uniqueCategories.length}
Available Languages: ${routing.locales.length}`;

    return new Response(llmsContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
    
  } catch (error) {
    console.error('Error generating llms.txt:', error);
    
    // Return basic llms.txt if fetch fails
    const fallbackContent = `# llms.txt

## About This Site
Professional web hosting and domain services provider.
URL: ${baseUrl}
Last Updated: ${new Date().toISOString().split('T')[0]}
Languages: ${routing.locales.join(', ')}

## Main Services
- Web Hosting (Shared, WordPress, Business, WooCommerce)
- Domain Registration & Transfer
- VPS & Cloud Solutions
- Dedicated Servers
- Website Migration Services

## Site Structure
- Homepage: ${baseUrl}
- Services: Various hosting and domain services
- Blog: ${baseUrl}/blog
- Contact: ${baseUrl}/contact-us
- Pricing: ${baseUrl}/pricing

## Error Notice
Unable to fetch dynamic content at this time. Please visit the site directly for complete service information.

## Technical Details
- Multi-language support
- Professional hosting infrastructure
- 24/7 customer support
- Competitive pricing with transparent policies

---
Generated: ${new Date().toISOString()}`;

    return new Response(fallbackContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300', // Shorter cache on error
      },
    });
  }
}