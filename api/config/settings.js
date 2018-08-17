/**
 * Backend API settings file
 */
// Define settings object
const settings = {
  environment: global.environment || process.env.NODE_ENV || 'development',
  indexPagePath: 'index.html',
  port: process.env.PORT || 3000,
  staticContentFolder: 'build',
};
// Exports settings object to be re-used
module.exports = settings;
