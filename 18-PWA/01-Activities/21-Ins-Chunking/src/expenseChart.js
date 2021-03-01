const Chart = require("chart.js");
import { useIndexedDb } from "./indexedDb";

const ctx = document.getElementById("myChart").getContext("2d");
export const expensesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Expense cost in $",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    title: {
      text: "Expenses Chart"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

export function updateChart(expenseChart, name, price) {
  expenseChart.data.labels.push(name);
  expenseChart.data.datasets.forEach(dataset => {
    dataset.data.push(price);
  });
  expenseChart.update();
}

export function resetChart(expenseChart) {
  expenseChart.data.labels = [];
  expenseChart.data.datasets.forEach(dataset => {
    dataset.data = [];
  });
  expenseChart.update();
}

useIndexedDb("expense", "expenseStore", "get").then(results => {
  results.forEach(expense => {
    updateChart(expensesChart, expense.name, expense.value);
  });
});
