/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.18.10'],
  // allowedDevOrigins: ['10.131.107.30'],
  images: {
    qualities: [25, 50, 75, 100],
  },
};


export default nextConfig;
