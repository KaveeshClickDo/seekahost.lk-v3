/** @type {import('next').NextConfig} */
const nextConfig = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL)
    // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://dev.seekahost.lk')
};

export default nextConfig;
