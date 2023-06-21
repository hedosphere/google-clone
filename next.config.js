/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        // pathname: "**",
        // pathname: "/t/p/original/**",
      },
    ],
  },
};
module.exports = nextConfig;
