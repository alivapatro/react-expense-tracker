
import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { getTransactionsFromStorage, saveTransactionsToStorage } from './localStorage';

// Initial state
const initialState = {
  transactions: getTransactionsFromStorage(),
  filteredTransactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    saveTransactionsToStorage(state.transactions);
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function updateTransaction(updatedTransaction) {
    dispatch({
      type: 'UPDATE_TRANSACTION',
      payload: updatedTransaction
    });
  }

  function setFilteredTransactions(filteredTransactions) {
    dispatch({
      type: 'SET_FILTERED_TRANSACTIONS',
      payload: filteredTransactions
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      filteredTransactions: state.filteredTransactions,
      deleteTransaction,
      addTransaction,
      updateTransaction,
      setFilteredTransactions,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
