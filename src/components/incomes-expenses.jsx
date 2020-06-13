import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const IncomesExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((accumulation, item) => (accumulation += item), 0)
    .toFixed(1);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((accumulation, item) => (accumulation += item), 0)
    .toFixed(1);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">Rp {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">Rp {Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomesExpenses;
