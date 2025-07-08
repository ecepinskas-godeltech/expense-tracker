import { expensesRepository } from './expenses.repository';
import { ExpenseSchema } from '../db/db.service';

// TALKING TO BL
export class ExpensesService {
  addExpense(expenseData: Omit<ExpenseSchema, 'id'>): {
    id: number;
    success: boolean;
  } {
    if (expenseData.amount <= 0) {
      throw new Error('Amount must be greater than 0');
    }
    if (!expenseData.name.trim()) {
      throw new Error('Name cannot be empty');
    }
    if (!expenseData.category.trim()) {
      throw new Error('Category must be selected and cannot be empty');
    }

    try {
      const id = expensesRepository.insertExpense(expenseData);
      return { id, success: true };
    } catch (error) {
      console.error('Error adding expense:', error);
      throw new Error('Failed to add expense');
    }
  }

  getAllExpenses(): ExpenseSchema[] {
    try {
      return expensesRepository.selectAllExpenses();
    } catch (error) {
      console.error('Error fetching expenses:', error);
      throw new Error('Failed to fetch expenses');
    }
  }
}

export const expensesService = new ExpensesService();
