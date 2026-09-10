/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.18.10'],
  // allowedDevOrigins: ['192.168.1.247'],
  images: {
    qualities: [25, 50, 75, 100],
  },
};


export default nextConfig;
