document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('revenue-chart', {
      chart: {
        type: 'line',
        backgroundColor: '#FFFFFF'
      },
      title: {
        text: 'Monthly Revenue'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        title: {
          text: 'Revenue (₹)'
        }
      },
      series: [{
        name: 'Revenue',
        data: [10000, 15000, 12000, 20000, 30000, 25000],
        color: '#F9A825'
      }]
    });
  });
  