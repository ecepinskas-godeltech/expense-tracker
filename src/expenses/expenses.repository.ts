import database from '../db/db.service';
import { ExpenseSchema } from '../db/db.service';

// TALKING TO DB
export class ExpensesRepository {
  // INSERT ONE
  insertExpense(expense: Omit<ExpenseSchema, 'id'>): number {
    const insertExpense = database.prepare(
      'INSERT INTO expenses (name, amount, currency, category, date) VALUES (?, ?, ?, ?, ?)',
    );

    const result = insertExpense.run(
      expense.name,
      expense.amount,
      expense.currency,
      expense.category,
      expense.date,
    );

    return result.lastInsertRowid as number;
  }

  // SELECT ALL
  selectAllExpenses(): ExpenseSchema[] {
    const selectAllExpenses = database.prepare('SELECT * FROM expenses');

    return selectAllExpenses.all() as ExpenseSchema[];
  }
}

export const expensesRepository = new ExpensesRepository();
