/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/font/index.scss"; @import "styles/_mediaQueries.scss"; @import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },
};

module.exports = nextConfig;
