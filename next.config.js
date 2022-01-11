const composePlugins = require('next-compose-plugins');
const images = require('next-images');

module.exports = composePlugins([
  images
]);