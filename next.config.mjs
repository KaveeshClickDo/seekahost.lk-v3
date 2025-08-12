import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_STRAPI_PROTOCOL || 'http',
        hostname: process.env.NEXT_PUBLIC_STRAPI_HOSTNAME || 'backend',
        port: process.env.NEXT_PUBLIC_STRAPI_PORT || '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);