import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/expenses').then(response => {
      const data = response.data;
      const categories = Array.from(new Set(data.map(expense => expense.category)));
      const amounts = categories.map(category => data.filter(expense => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0));
      setChartData({
        labels: categories,
        datasets: [{
          label: 'Expenses',
          data: amounts,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }],
      });
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default Dashboard;
