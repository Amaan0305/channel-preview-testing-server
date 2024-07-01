const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
// module.exports = {
//   cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
// };