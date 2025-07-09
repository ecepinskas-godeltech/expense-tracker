import Database from 'better-sqlite3';
import path from 'path';

export interface ExpenseSchema {
  id: number;
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
}

const databasePath = path.join(process.cwd(), 'expense-tracker.db');
console.log('PATH TO DATABASE:', databasePath);

const database = new Database(databasePath);

const query = `
    CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        amount REAL NOT NULL,
        currency TEXT NOT NULL,
        category TEXT NOT NULL,
        date DATETIME NOT NULL
    )`;

try {
  database.exec(query);

  console.log(`DATABASE STATUS: ✅ \tPATH: ${databasePath}`);
} catch (error) {
  console.error(
    'DATABASE STATUS: ❌ \tERROR WHEN INITIALIZING THE DATABASE ',
    error,
  );
}

export default database;
