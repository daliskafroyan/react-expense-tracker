import React from 'react';
import Header from './components/header';

import './App.css';
import Balance from './components/balance';
import IncomesExpenses from './components/incomes-expenses';
import GlobalContextProvider from './contexts/GlobalContext';
import TransactionList from './components/transaction-list';
import TransactionForm from './components/transaction-form';

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomesExpenses />
          <TransactionList />
          <TransactionForm />
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
