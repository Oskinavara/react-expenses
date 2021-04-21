import { createContext } from 'react';
import Transaction from '../interfaces/Transaction';

export const MainContext = createContext({
  removeTransaction: (id: string) => {},
  addTransaction: (transaction: Transaction) => {},
  updateField: (e: React.ChangeEvent<HTMLInputElement>, key: string) => {},
  userInput: { title: '', price: 0 },
  toggleModalSheet: () => {},
  isBottomSheetOpened: true,
});
