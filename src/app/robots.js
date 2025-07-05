export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/api/',
                    '/private/',
                    '/_next/',
                    '/thank-you/',
                    '/order-confirmation/',
                    '/search?*',
                    '/*?utm_*',  // Block URLs with UTM parameters to avoid duplicate content
                ],
                crawlDelay: 1, // Be respectful to smaller bots
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/api/',
                    '/private/',
                    '/thank-you/',
                    '/order-confirmation/',
                ],
                // No crawl delay for Google since they're efficient
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
        host: process.env.NEXT_PUBLIC_BASE_URL, // Specify preferred domain
    }
}