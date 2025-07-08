import express from 'express';
import { Request, Response } from 'express';

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

export default app;
