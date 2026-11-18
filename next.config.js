const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlausibleProxy({
  src: 'https://plausible.io/js/script.outbound-links.js',
  scriptPath: '/js/script.js',
  apiPath: '/api/event',
})(nextConfig);
