import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((accumulation, item) => (accumulation += item), 0)
    .toFixed(1);

  return (
    <div>
      <h4>Balance</h4>
      <h1>Rp {total}</h1>
    </div>
  );
};

export default Balance;
