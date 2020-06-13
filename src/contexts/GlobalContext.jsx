import React, { createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { GlobalReducer } from '../reducers/GlobalReducer';

// initial state
const initialState = {
  transactions: [
    { id: uuid(), description: 'food', amount: 30 },
    { id: uuid(), description: 'beverage', amount: -10 },
  ],
};

// global context
export const GlobalContext = createContext(initialState);

// provider component
const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalContextProvider;
