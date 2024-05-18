import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('/api/expenses').then(response => {
      setExpenses(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h1>Expense List</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            {expense.description} - ${expense.amount} - {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
