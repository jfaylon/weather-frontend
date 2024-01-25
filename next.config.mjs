/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.data.gov.sg",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
