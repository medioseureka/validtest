import express from 'express';

module.exports = app => {
  // SETTINGS OF APP
  app.set('port', process.env.PORT || 3000);

  // middlewares
  app.use(express.json())
};

