import React, { useState, useContext } from 'react'
import { GlobalContext } from './GlobalState';

export const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState('');
  const [type, setType] = useState(null);
  const [category, setCategory] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const handleTransactionAmount = (amount, type) => {
    if (type === 'expense') {
      return -Math.abs(amount);
    }
    return amount;
  };


  const onSubmit = e => {
    
    const transactionAmount = handleTransactionAmount(Number(amount), type);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: transactionAmount,
      date,
      type,
      category
    };

    addTransaction(newTransaction);
    
  };
  return (
    <div>
      <h2 className="create">Add new transaction</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <h3 className="type">Type:</h3>
          <input type="radio" id="male" name="type" value="expense" onChange={(e) => setType(e.target.value)} />
          <label htmlfor="expense">Expense</label>
          <input type="radio" id="female" name="type" value="income" onChange={(e) => setType(e.target.value)} />
          <label htmlfor="income">Income</label>
        </div>
        <div className="form-control">
          <label>Category:</label>
          <select value={category} required onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Salary">Salary</option>
            <option value="Others">Other</option>
          </select>
        </div>
        <div className="form-control">
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label> Amount</label>
          <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="btn-box">
          <button className="btn">Add transaction</button>
        </div>

      </form>
    </div>
  );

}
