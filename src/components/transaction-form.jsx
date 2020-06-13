import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { v4 as uuid } from 'uuid';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: uuid(),
      description,
      amount: parseInt(amount),
    });
    setDescription('');
    setAmount('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="description">description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="enter description here..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="enter the amount here..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
