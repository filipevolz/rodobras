/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/rodobras-rebranding' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rodobras-rebranding/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
