<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>統計資料</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <h2>我旅遊過的國家數量統計</h2>
  <canvas id="travelChart" width="400" height="200"></canvas>

  <script>
    const ctx = document.getElementById('travelChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['日本', '韓國', '法國', '泰國', '台灣'],
        datasets: [{
          label: '旅遊次數',
          data: [5, 3, 2, 4, 8],
          borderWidth: 1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } }
      }
    });
  </script>
</body>
</html>
