import { Request, Response } from 'express';
import { expensesService } from './expenses.service';

export class ExpensesController {
  // POST - ADD EXPENSE
  async addExpense(req: Request, res: Response): Promise<void> {
    try {
      const { name, amount, currency, category, date } = req.body;

      const result = await expensesService.addExpense({
        name,
        amount,
        currency,
        category,
        date,
      });

      res.status(201).json({
        message: 'Expense was added successfully!',
        id: result.id,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Something went wrong...';
      res.status(400).json({ error: errorMessage });
    }
  }

  // GET - GET ALL EXPENSES
  async getAllExpenses(req: Request, res: Response): Promise<void> {
    try {
      const expenses = await expensesService.getAllExpenses();
      res.json({
        count: expenses.length,
        expenses,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Something went wrong...';
      res.status(400).json({ error: errorMessage });
    }
  }
}

export const expensesController = new ExpensesController();
