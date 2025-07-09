import express from 'express';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { expensesController } from './expenses/expenses.controller';

// PRISMA REQUEST INTERFACE
declare module 'express-serve-static-core' {
  interface Request {
    prisma: PrismaClient;
  }
}

const app = express();
const prisma = new PrismaClient();

// MIDDLEWARE
app.use(express.json());

// PRISMA
app.use((req: Request, res: Response, next) => {
  req.prisma = prisma;
  next();
});

// ROUTES
app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

// EXPENSE ROUTES
app.post(
  '/api/expenses',
  expensesController.addExpense.bind(expensesController),
);
app.get(
  '/api/expenses',
  expensesController.getAllExpenses.bind(expensesController),
);

// PRISMA SHUTDOWN
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

export default app;
export { prisma };
