import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export interface ExpenseData {
  name: string;
  amount: number;
  currency: string;
  category: string;
  date?: Date;
}

export class ExpensesRepository {
  // INSERT ONE
  async insertExpense(expense: Omit<ExpenseData, 'id'>): Promise<number> {
    const result = await prisma.expense.create({
      data: expense,
    });
    return result.id;
  }

  // SELECT ALL
  async selectAllExpenses() {
    return await prisma.expense.findMany({
      orderBy: { date: 'desc' },
    });
  }
}

export const expensesRepository = new ExpensesRepository();
