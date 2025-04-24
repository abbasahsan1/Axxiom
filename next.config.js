/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeFonts: true,
  },
  // Ensure proper hydration for dark mode
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig