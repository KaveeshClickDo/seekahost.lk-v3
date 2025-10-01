import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.seekahost.co.uk',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);