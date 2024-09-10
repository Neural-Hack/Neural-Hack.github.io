/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

const withNextra = require('nextra')({
  theme: './nextra.theme.tsx'
})

module.exports = withNextra(nextConfig)
