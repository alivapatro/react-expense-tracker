import React from 'react';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { TransactionSummary } from './TransactionSummary';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="Balance">
      <Balance />
      </div>
      <div className="summaryBox">
        <div className="summary"><IncomeExpenses /></div>
        <div className="summary"><TransactionSummary /></div>
      </div>
      <h3 className="recent">Recent Transactions</h3>
      <div><TransactionList /></div>
      {/* <FilterTransaction /> */}
    </div>
  );
}
