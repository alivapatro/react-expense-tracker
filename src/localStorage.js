export const getTransactionsFromStorage = () => {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  };
  
  export const saveTransactionsToStorage = (transactions) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };
  