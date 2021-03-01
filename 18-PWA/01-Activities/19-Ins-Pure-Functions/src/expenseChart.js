export function updateChart(expenseChart, name, price) {
  expenseChart.data.labels.push(name);
  expenseChart.data.datasets.forEach((dataset) => {
    dataset.data.push(price);
  });
  expenseChart.update();
}

export function resetChart(expenseChart) {
  expenseChart.data.labels = [];
  expenseChart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  expenseChart.update();
}