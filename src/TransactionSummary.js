import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

export const TransactionSummary = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  const categories = transactions.filter((transaction)=>transaction.amount<0).reduce((acc, transaction) => {
    const category = transaction.category || 'Other';
    if (!acc[category]) acc[category] = 0;
    acc[category] +=(-transaction.amount);
    return acc;
  }, {});

  const data = Object.entries(categories).map(([key, value]) => ({ name: key, value }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="transaction-summary">
      <h3 className="title">Spending Summary</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
