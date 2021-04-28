import { createContext } from 'react';
import TransactionWithId from '../interfaces/TransactionWithId';
import Transaction from '../interfaces/Transaction';
import UserInput from '../interfaces/UserInput';

interface Context {
  removeTransaction: (id: string) => void;
  addTransaction: (transaction: Transaction) => void;
  editTransaction: (id: string) => void;
  updateField: (key: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: { title: string; price: number; date: Date };
  setEditId: (id: string) => void;
  editId: string;
  toggleModalSheet: (input?: UserInput) => void;
  isBottomSheetOpened: boolean;
  transactions: TransactionWithId[];
}
const initialContext = {
  removeTransaction: () => {},
  addTransaction: () => {},
  updateField: () => {},
  editTransaction: () => {},
  setEditId: () => {},
  editId: '',
  userInput: { title: '', price: 0, date: new Date() },
  toggleModalSheet: () => {},
  isBottomSheetOpened: false,
  transactions: [],
};

export const MainContext = createContext<Context>(initialContext);
