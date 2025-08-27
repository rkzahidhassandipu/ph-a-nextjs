/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"], // ✅ must be nested under images
  },
};

export default nextConfig;
