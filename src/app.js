// setting up express app with right middlewares

import express from 'express';
import logger  from '#config/logger.js';

const app = express();

app.get('/', (req, res) => {
  logger.info('Hello from API');
  res.status(200).send('Hello from the server');
});

export default app;
