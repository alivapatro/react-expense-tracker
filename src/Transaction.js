import React, { useContext,useState } from 'react';
import { GlobalContext } from './GlobalState';
import { EditTransaction } from './EditTransaction';


function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  let a = p[0].split('').reverse();
  return (
    a.reduce((acc, num, i, orig) => {
      return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
    }) +'.' + p[1] + 'INR'
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
    <li className={transaction.amount < 0 ? 'expense' : 'income'}>
      <div>{moneyFormatter(transaction.amount)}->{transaction.category}</div>
      <div className="aa">
      <div className="btns">
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">Delete</button>
        </div>
      <div className="btns">
      <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
      {isEditing && <EditTransaction transaction={transaction} onClose={() => setIsEditing(false)} />}
      </div>
      </div>
    </li>
    <li> Description:{transaction.description}</li>
    </>
  )
}
