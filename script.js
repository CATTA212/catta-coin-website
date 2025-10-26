// Chart harga dummy
const ctx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [{
      label: 'Harga Catta Coin (USD)',
      data: [0.1, 0.15, 0.13, 0.2, 0.25, 0.3],
      backgroundColor: 'rgba(255, 204, 0, 0.2)',
      borderColor: 'rgba(255, 204, 0, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' }
    },
    scales: { y: { beginAtZero: true } }
  }
});
