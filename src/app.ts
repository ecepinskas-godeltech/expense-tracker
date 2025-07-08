import express from 'express';
import { Request, Response } from 'express';
import { expensesController } from './expenses/expenses.controller';

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

// EXPENSE ROUTES
app.post('/expenses', expensesController.addExpense.bind(expensesController));
app.get(
  '/expenses',
  expensesController.getAllExpenses.bind(expensesController),
);

export default app;
