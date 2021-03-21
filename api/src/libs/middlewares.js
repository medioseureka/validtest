import express from 'express';
const cors = require('cors')

module.exports = app => {
  // SETTINGS OF APP
  app.set('port', process.env.PORT || 3000);

  // middlewares
  app.use(express.json());
  app.use(cors());
};

