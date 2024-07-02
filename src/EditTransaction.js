import React, { useState, useContext } from 'react';
import { GlobalContext } from './GlobalState';

export const EditTransaction = ({ transaction, onClose }) => {
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(transaction.date);
  const [category, setCategory] = useState(transaction.category);

  const { updateTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const updatedTransaction = {
      ...transaction,
      description,
      amount: +amount,
      date,
      category
    };

    updateTransaction(updatedTransaction);
    onClose();
  }

  return (
    <div className="edit-transaction">
      <h3>Edit transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
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
        <button className="btn">Update transaction</button>
        <button className="btn" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
