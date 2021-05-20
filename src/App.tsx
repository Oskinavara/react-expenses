import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/organisms/Header';
import TransactionsList from './components/organisms/TransactionsList';
import FloatingActionButton from './components/atoms/FloatingActionButton';
import { ThemeProvider } from 'styled-components';
import theme from './styles/global/Theme';
import GlobalStyle from './styles/global/GlobalStyle';
import TransactionWithId from './interfaces/TransactionWithId';
import Transaction from './interfaces/Transaction';
import UserInput from './interfaces/UserInput';
import ModalBottomSheet from './components/organisms/ModalBottomSheet';
import Chart from './components/organisms/Chart';
import styled from 'styled-components';
import { MainContext } from '@/contexts/MainContext';
import axios from '@/utils/axios';

const StyledApp = styled.div`
  height: 100vh;
  background-color: white;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
`;

const App = () => {
  const [transactions, setTransactions] = useState([] as TransactionWithId[]);
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [userInput, setUserInput] = useState({ title: '', price: 0, date: new Date() });
  const [editId, setEditId] = useState('');
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('expenses');
      setTransactions(data);
    })();
  }, []);

  const removeLastTransaction = () => {
    const copiedTransactions = [...transactions];
    copiedTransactions.pop();
    setTransactions(copiedTransactions);
  };

  const addTransaction = async (transaction: Transaction) => {
    setTransactions([...transactions, { ...transaction, _id: '_' }]);
    try {
      const response = await axios.post('expenses', transaction);
      const transactionWithId = { ...transaction, _id: response.data._id };
      setTransactions((prevState) => [
        ...prevState.slice(0, transactions.length),
        transactionWithId,
      ]);
    } catch (error) {
      removeLastTransaction();
      console.log(error);
    }
    setUserInput({ title: '', price: 0, date: new Date() });
  };

  const editTransaction = async (id: string) => {
    const initialTransactions = [...transactions];
    const editedTransactions = transactions.map((tx) =>
      tx._id === id ? { ...userInput, _id: id } : tx
    );
    setTransactions(editedTransactions);
    try {
      await axios.put(`expenses/${id}`, userInput);
    } catch (error) {
      setTransactions(initialTransactions);
      console.log(error);
    }
  };

  const removeTransaction: (id: string) => void = async (id: string) => {
    const initialTransactions = [...transactions];
    setTransactions([...transactions.filter((tx) => tx._id !== id)]);
    try {
      await axios.delete(`expenses/${id}`);
    } catch (error) {
      setTransactions(initialTransactions);
      console.log(error);
    }
  };

  const toggleModalSheet: (input?: UserInput | null) => void = (input = null) => {
    if (input) {
      setUserInput(input);
    }
    setIsBottomSheetOpened(!isBottomSheetOpened);
  };

  const updateField: (key: string, e: React.ChangeEvent<HTMLInputElement>) => void = (
    key,
    e
  ) => {
    setUserInput((prevState) => ({
      ...prevState,
      [key]: key === 'price' ? +e.target.value : e.target.value,
    }));
  };

  const providerValue = useMemo(
    () => ({
      removeTransaction,
      addTransaction,
      updateField,
      editTransaction,
      userInput,
      setEditId,
      editId,
      toggleModalSheet,
      isBottomSheetOpened,
      transactions,
    }),
    [
      removeTransaction,
      addTransaction,
      editTransaction,
      updateField,
      userInput,
      setEditId,
      editId,
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
          <FloatingActionButton clickHandler={() => toggleModalSheet()} />
          {isBottomSheetOpened && <ModalBottomSheet />}
        </StyledApp>
      </MainContext.Provider>
    </ThemeProvider>
  );
};

export default App;
