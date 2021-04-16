import React, { useState, useMemo } from 'react';
import Header from './components/organisms/Header';
import TransactionsList from './components/organisms/TransactionsList';
import FloatingActionButton from './components/atoms/FloatingActionButton';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Transaction from './interfaces/Transaction';
import ModalBottomSheet from './components/organisms/ModalBottomSheet';
import styled from 'styled-components';
import { MainContext } from './contexts/MainContext';
import axios from 'axios';

const transactionList: Transaction[] = [
  { title: 'Title 1', date: new Date(), price: 11111, id: '' },
  { title: 'Title 2', date: new Date(), price: 223213222, id: '2' },
];

const StyledApp = styled.div`
  height: 100vh;
  position: relative;
  font-family: Roboto;
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

  const updateField: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void = (
    e,
    key
  ) => {
    setUserInput({ ...userInput, [key]: e.target.value });
  };

  const providerValue = useMemo(
    () => ({
      removeTransaction,
      addTransaction,
      updateField,
      userInput,
      toggleModalSheet,
    }),
    [removeTransaction, addTransaction, updateField, userInput, toggleModalSheet]
  );

  const post = async () => {
    console.log('post start');
    try {
      const result = await axios.post('http://192.168.0.227:3001/test', {
        title: 'test title',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi doloremque omnis illo modi, commodi molestias officiis a. Harum, animi? Illum expedita sit ipsum natus aperiam molestias nihil quaerat doloremque a.',
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const get = async () => {
    console.log('post start');
    try {
      const result = await axios.get('http://192.168.0.227:3001/test');
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContext.Provider value={providerValue}>
        <StyledApp>
          <GlobalStyle />
          <Header />
          <button onClick={post}>POST</button>
          <button onClick={get}>GET</button>
          <TransactionsList transactions={transactions} />
          <FloatingActionButton handleClick={toggleModalSheet} />
          {isBottomSheetOpened && <ModalBottomSheet />}
        </StyledApp>
      </MainContext.Provider>
    </ThemeProvider>
  );
};

export default App;
