/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "preodemo.gumlet.io",
      },
    ],
  },
};

export default nextConfig;
