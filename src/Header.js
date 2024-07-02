import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="navBar">
      <h2 className="name">
        Expense Tracker
      </h2>
      <div className='links'>
        <div className="Link"><Link to="/">Dashboard</Link></div>
        <div className="Link"><Link to="/add-transaction">Add Transaction</Link></div>
        
      </div>
    </div>
  )
}


