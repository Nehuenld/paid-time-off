/**
 * Server bootstrap file
 */
/**
 * Load module dependencies
 */
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const settings = require('./api/config/settings');
/**
 * Connect to MongDB database
 */
// require('./api/db/connect.js');
/**
 * Create Express application
 */
const app = express();
/**
 * Middlewares
 */
// Armoring the API with Helmet
app.use(helmet());
// Parse application/json
app.use(bodyParser.json());
// Enabling CORS in the API
app.use(cors());
// Compacting requests using GZIP middleware
app.use(compression());
// Serve static content
app.use(express.static(path.resolve(__dirname, settings.staticContentFolder)));
/**
 * Map routes with controllers
 */
// app.use('/api/cliente', require('./api/controllers/cliente.controller'));
// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, settings.staticContentFolder, settings.indexPagePath));
});
// Make application run on given port
app.listen(settings.port, () => console.log('Paid time Off API is running...'));
// Export app to be re-used
module.exports = app;
