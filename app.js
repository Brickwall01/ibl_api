const express = require('express');
const app = express();
const healthRoutes = require('./api_modules/routes/health');

app.use('/health', healthRoutes);

module.exports = app;