/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/HectorRubi/hector-rubi/assets/68661875/**',
      },
    ],
  },
}

module.exports = nextConfig
