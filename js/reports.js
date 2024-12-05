// Chart.js for Revenue
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue (₹)',
      data: [200000, 250000, 300000, 350000, 400000, 450000],
      borderColor: '#F9A825',
      backgroundColor: 'rgba(249, 168, 37, 0.2)',
      borderWidth: 2,
      tension: 0.4,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    }
  }
});

// Chart.js for Expense Breakdown
const expenseCtx = document.getElementById('expenseChart').getContext('2d');
new Chart(expenseCtx, {
  type: 'doughnut',
  data: {
    labels: ['Marketing', 'Salaries', 'Inventory', 'Miscellaneous'],
    datasets: [{
      label: 'Expenses (₹)',
      data: [100000, 150000, 200000, 50000],
      backgroundColor: ['#4E73DF', '#1CC88A', '#36B9CC', '#F9A825'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
    }
  }
});
