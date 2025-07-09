import { expensesRepository, ExpenseData } from './expenses.repository';

// TALKING TO BL
export class ExpensesService {
  async addExpense(expenseData: Omit<ExpenseData, 'id'>): Promise<{
    id: number;
    success: boolean;
  }> {
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
      const id = await expensesRepository.insertExpense(expenseData);
      return { id, success: true };
    } catch (error) {
      console.error('Error adding expense:', error);
      throw new Error('Failed to add expense');
    }
  }

  async getAllExpenses(): Promise<ExpenseData[]> {
    try {
      const expenses = await expensesRepository.selectAllExpenses();
      return expenses.map((expense) => ({
        ...expense,
        amount: expense.amount ?? 0,
      }));
    } catch (error) {
      console.error('Error fetching expenses:', error);
      throw new Error('Failed to fetch expenses');
    }
  }
}

export const expensesService = new ExpensesService();
