const Chart = require("chart.js");
export const priceEl = document.getElementById("price");
export const balanceEl = document.getElementById("balance");
export const expenseEl = document.getElementById("expense");
export const expensesListEl = document.getElementById("expenses-list");
export const submitBtn = document.getElementById("submit");
export const resetBtn = document.getElementById("reset");

const ctx = document.getElementById("myChart").getContext("2d");
export const expensesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [{
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
    }]
  },
  options: {
    title: {
      text: "Expenses Chart"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});