import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_STRAPI_PROTOCOL || 'https',
        hostname: process.env.NEXT_PUBLIC_STRAPI_HOSTNAME || 'admin.seekahost.co.uk',
        port: process.env.NEXT_PUBLIC_STRAPI_PORT || '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);