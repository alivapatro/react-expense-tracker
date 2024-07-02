import React, { useContext, useState, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from './GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);


  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const filtered = transactions.filter(transaction =>
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (transaction.date >= Date(searchQuery) && Date(searchQuery))
    );
    setFilteredTransactions(filtered);
  }, [searchQuery, transactions]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <> 
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search transactions"/>
      <div className="history">
      <ul className="list">
        {filteredTransactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      </div>
      
    </>
  )
}
