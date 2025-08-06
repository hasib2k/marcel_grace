/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['marcelgrace.com', 'www.marcelgrace.com', 'localhost'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
