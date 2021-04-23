import { createContext } from 'react';
import Transaction from '../interfaces/Transaction';

interface Context {
  removeTransaction: (id: string) => void;
  addTransaction: (transaction: Transaction) => void;
  updatePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: { title: string; price: number };
  toggleModalSheet: () => void;
  isBottomSheetOpened: boolean;
  transactions: Transaction[];
}
const initialContext = {
  removeTransaction: () => {},
  addTransaction: () => {},
  updatePrice: () => {},
  updateTitle: () => {},
  userInput: {title: '', price: 0},
  toggleModalSheet: () => {},
  isBottomSheetOpened: false,
  transactions: []
};

export const MainContext = createContext<Context>(initialContext);
