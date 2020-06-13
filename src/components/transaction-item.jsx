import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const TransactionItem = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = props.transaction.amount < 0 ? '-' : '';
  return (
    <div>
      <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
        {props.transaction.description}{' '}
        <span>
          {' '}
          {sign} Rp {Math.abs(props.transaction.amount)}{' '}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(props.transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default TransactionItem;
