import React from 'react';
import Header from './components/organisms/Header';
import TransactionsList from './components/organisms/TransactionsList';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <TransactionsList />
    </ThemeProvider>
  );
};

export default App;
