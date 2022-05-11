import express, { json } from 'express';
import { webhookCallback } from 'grammy';
import './bot/index.js';
import bot from './bot/instance.js';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.BASE_PATH;

const app = express();
app.use(json());

app.use(webhookCallback(bot));

app.listen(port, async (err) => {
  if (err) throw err;
  console.info(`> Ready on ${ROOT_URL}`);
});

export default app;
