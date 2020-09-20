const composePlugins = require('next-compose-plugins');
const images = require('next-images');
const mdxEnhanced = require('next-mdx-enhanced');

module.exports = composePlugins([
  images,
  mdxEnhanced({
    defaultLayout: true,
    layoutPath: './src/templates',
    defaultLayout: true,
    fileExtensions: ['mdx']
  })
]);