/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
    experimental: {
        serverActions: true,
      },
}

module.exports = withNextIntl(nextConfig)
