/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add remote patterns here only if you move product images to
    // Backblaze B2 / Cloudflare R2 instead of /public.
    remotePatterns: [],
  },
};

module.exports = nextConfig;
