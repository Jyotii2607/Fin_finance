// Chart.js for Stock Levels
const stockCtx = document.getElementById('stockChart').getContext('2d');
new Chart(stockCtx, {
  type: 'bar',
  data: {
    labels: ['Silk Saree', 'Leather Wallet', 'Gold Necklace'],
    datasets: [{
      label: 'Stock Level',
      data: [50, 20, 15],
      backgroundColor: ['#4E73DF', '#1CC88A', '#36B9CC'],
      borderColor: ['#4E73DF', '#1CC88A', '#36B9CC'],
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
