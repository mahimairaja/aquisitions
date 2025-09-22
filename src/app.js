// setting up express app with right middlewares

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server');
});

export default app;
