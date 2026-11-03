const path = require('path');

module.exports = {
  appName: 'PAW Project Week 7',
  port: process.env.PORT || 3000,
  logDir: path.join(__dirname, '..', 'logs'),
  logFile: 'logger.md',
};
