/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { json } from 'express';
import * as path from 'path';
import { auth } from '@psu-superapp/api-routes';

const app = express();
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(json());
app.use('/api/auth', auth);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
