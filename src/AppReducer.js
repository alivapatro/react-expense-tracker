
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload.id ? action.payload : transaction
        )
      };
    case 'SET_FILTERED_TRANSACTIONS':
      return {
        ...state,
        filteredTransactions: action.payload
      };
    default:
      return state;
  }
};
