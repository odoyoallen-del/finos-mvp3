/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/finos-mvp3',
  assetPrefix: '/finos-mvp3/',
}

module.exports = nextConfig