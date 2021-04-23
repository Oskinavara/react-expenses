import React, { useState, useMemo } from 'react';
import Header from './components/organisms/Header';
import TransactionsList from './components/organisms/TransactionsList';
import FloatingActionButton from './components/atoms/FloatingActionButton';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Transaction from './interfaces/Transaction';
import ModalBottomSheet from './components/organisms/ModalBottomSheet';
import Chart from './components/organisms/Chart';
import styled from 'styled-components';
import { MainContext } from '@/contexts/MainContext';

const transactionList: Transaction[] = [
  { title: 'Title 1', date: new Date(1992, 12, 1), price: 58, id: '1' },
  { title: 'Title 2', date: new Date(1992, 11, 1), price: 22, id: '2' },
  { title: 'Title 3', date: new Date(1992, 10, 1), price: 43, id: '3' },
  { title: 'Title 4', date: new Date(1992, 9, 1), price: 22, id: '4' },
];

const StyledApp = styled.div`
  height: 100vh;
  position: relative;
`;

const App = () => {
  const [transactions, setTransactions] = useState(transactionList);
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [userInput, setUserInput] = useState({ title: '', price: 0 });

  const addTransaction: (transaction: Transaction) => void = (
    transaction: Transaction
  ) => {
    setTransactions([...transactions, transaction]);
    setUserInput({ title: '', price: 0 });
    toggleModalSheet();
  };

  const removeTransaction: (id: string) => void = (id: string) => {
    setTransactions([...transactions.filter((tx) => tx.id !== id)]);
  };

  const toggleModalSheet: () => void = () => {
    setIsBottomSheetOpened(!isBottomSheetOpened);
  };

  const updatePrice: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setUserInput({ ...userInput, price: +e.target.value });
  };

  const updateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setUserInput({ ...userInput, title: e.target.value });
  };

  const providerValue = useMemo(
    () => ({
      removeTransaction,
      addTransaction,
      updatePrice,
      updateTitle,
      userInput,
      toggleModalSheet,
      isBottomSheetOpened,
      transactions,
    }),
    [
      removeTransaction,
      addTransaction,
      updatePrice,
      updateTitle,
      userInput,
      toggleModalSheet,
      isBottomSheetOpened,
      transactions,
    ]
  );

  return (
    <ThemeProvider theme={theme}>
      <MainContext.Provider value={providerValue}>
        <StyledApp>
          <GlobalStyle />
          <Header />
          <Chart />
          <TransactionsList transactions={transactions} />
          <FloatingActionButton handleClick={toggleModalSheet} />
          {isBottomSheetOpened && <ModalBottomSheet />}
        </StyledApp>
      </MainContext.Provider>
    </ThemeProvider>
  );
};

export default App;
