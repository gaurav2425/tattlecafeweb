/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
        // hostname: "i.imghippo.com",
        // Your external image hosting
      },
    ],
  },
};

export default nextConfig;
